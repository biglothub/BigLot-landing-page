import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { sendIndicatorConfirmation, sendIndicatorAdminNotification } from '$lib/email';
import { LINE_OA_URL } from '$lib/config';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const tradingviewUsername = formData.get('tradingview_username') as string;

        // Validate required fields
        if (!name?.trim() || !email?.trim() || !tradingviewUsername?.trim()) {
            return json({ error: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return json({ error: 'รูปแบบ Email ไม่ถูกต้อง' }, { status: 400 });
        }

        // Validate TradingView username format
        const tvRegex = /^[a-zA-Z0-9_]{3,25}$/;
        if (!tvRegex.test(tradingviewUsername.trim())) {
            return json(
                { error: 'TradingView Username ไม่ถูกต้อง (ตัวอักษร ตัวเลข หรือ _ เท่านั้น, 3-25 ตัวอักษร)' },
                { status: 400 }
            );
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanTvUsername = tradingviewUsername.trim().toLowerCase();

        // Check duplicate email
        const { data: existingEmail } = await supabase
            .from('indicator_leads')
            .select('id')
            .eq('email', cleanEmail)
            .single();

        if (existingEmail) {
            return json(
                { error: 'Email นี้ลงทะเบียนรับ Indicator แล้ว กรุณาเช็ค Email ของคุณ' },
                { status: 409 }
            );
        }

        // Check duplicate TradingView username
        const { data: existingTv } = await supabase
            .from('indicator_leads')
            .select('id')
            .eq('tradingview_username', cleanTvUsername)
            .single();

        if (existingTv) {
            return json(
                { error: 'TradingView Username นี้มีคนลงทะเบียนแล้ว หากเป็น Username ของคุณจริงๆ กรุณาติดต่อทีมงานผ่าน Line' },
                { status: 409 }
            );
        }

        // Insert lead
        const { error: insertError } = await supabase
            .from('indicator_leads')
            .insert({
                name: name.trim(),
                email: cleanEmail,
                tradingview_username: cleanTvUsername,
                access_granted: false,
                email_sent: false
            });

        if (insertError) {
            console.error('Supabase insert error:', insertError);
            return json({ error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' }, { status: 500 });
        }

        // Send confirmation email to user
        let emailSent = false;
        try {
            await sendIndicatorConfirmation(name.trim(), cleanEmail, cleanTvUsername, LINE_OA_URL);
            emailSent = true;
        } catch (emailError) {
            console.error('Indicator confirmation email error:', emailError);
        }

        // Send admin notification
        try {
            await sendIndicatorAdminNotification(name.trim(), cleanEmail, cleanTvUsername);
        } catch (notifyError) {
            console.error('Indicator admin notification error:', notifyError);
        }

        // Update email_sent flag if confirmation was sent
        if (emailSent) {
            await supabase
                .from('indicator_leads')
                .update({ email_sent: true })
                .eq('email', cleanEmail);
        }

        return json({
            success: true,
            message: 'ลงทะเบียนสำเร็จ! เช็ค Email ของคุณ'
        });
    } catch {
        return json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' }, { status: 500 });
    }
};

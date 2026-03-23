import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { sendEbookEmail, sendAdminNotification } from '$lib/email';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const brokerAccountId = formData.get('broker_account_id') as string;
        const tier = (formData.get('tier') as string) || 'free';

        // Validate tier
        const validTiers = ['free', 'premium', 'vip'];
        if (!validTiers.includes(tier)) {
            return json({ error: 'Tier ไม่ถูกต้อง' }, { status: 400 });
        }

        // Validate required fields
        if (!name?.trim() || !email?.trim() || !brokerAccountId?.trim()) {
            return json({ error: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return json({ error: 'รูปแบบ Email ไม่ถูกต้อง' }, { status: 400 });
        }

        // Check duplicate email for same tier
        const { data: existing } = await supabase
            .from('leads')
            .select('id, tier')
            .eq('email', email.trim())
            .eq('tier', tier)
            .single();

        if (existing) {
            const messages: Record<string, string> = {
                vip: 'Email นี้เคยสมัคร VIP แล้ว กรุณารอทีมงานตรวจสอบ',
                premium: 'Email นี้เคยขอ eBook Premium แล้ว กรุณารอทีมงานตรวจสอบ',
                free: 'Email นี้เคยลงทะเบียนแล้ว กรุณาเช็ค Email ของคุณ'
            };
            return json({ error: messages[tier] || messages.free }, { status: 409 });
        }

        // Insert lead (slip จะส่งผ่าน Line แทน)
        const { error: insertError } = await supabase
            .from('leads')
            .insert({
                name: name.trim(),
                email: email.trim(),
                broker_account_id: brokerAccountId.trim(),
                tier,
                slip_url: null,
                approved: tier === 'free',
                email_sent: false
            });

        if (insertError) {
            console.error('Supabase insert error:', insertError);
            return json({ error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' }, { status: 500 });
        }

        // Free tier: send ebook immediately
        if (tier === 'free') {
            try {
                await sendEbookEmail(name.trim(), email.trim(), 'free');

                await supabase
                    .from('leads')
                    .update({ email_sent: true })
                    .eq('email', email.trim())
                    .eq('tier', 'free');
            } catch (emailError) {
                console.error('Email send error:', emailError);
            }
        }

        // Premium & VIP tier: notify admin (slip จะมาทาง Line)
        if (tier === 'premium' || tier === 'vip') {
            try {
                await sendAdminNotification(name.trim(), email.trim(), brokerAccountId.trim(), null, tier);
            } catch (notifyError) {
                console.error('Admin notification error:', notifyError);
            }
        }

        const messages: Record<string, string> = {
            vip: 'ลงทะเบียนสำเร็จ! กรุณาส่ง Slip ผ่าน Line เพื่อรับ eBook + Discord Invite',
            premium: 'ลงทะเบียนสำเร็จ! กรุณาส่ง Slip ผ่าน Line เพื่อรับ eBook Premium',
            free: 'ลงทะเบียนสำเร็จ! เช็ค Email ของคุณ'
        };

        return json({
            success: true,
            message: messages[tier] || messages.free
        });
    } catch {
        return json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' }, { status: 500 });
    }
};

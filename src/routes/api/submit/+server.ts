import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { sendEbookEmail, sendAdminNotification } from '$lib/email';

const MAX_LEAD_REQUESTS_PER_EMAIL = 3;

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

        // Validate required fields (broker_account_id is optional for free tier)
        if (!name?.trim() || !email?.trim()) {
            return json({ error: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' }, { status: 400 });
        }

        if (tier !== 'free' && !brokerAccountId?.trim()) {
            return json({ error: 'กรุณากรอก Broker Account ID' }, { status: 400 });
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();
        const cleanBrokerAccountId = brokerAccountId?.trim() || '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(cleanEmail)) {
            return json({ error: 'รูปแบบ Email ไม่ถูกต้อง' }, { status: 400 });
        }

        // Allow the same email up to 3 requests total across all tiers.
        const { count: existingLeadCount, error: countError } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('email', cleanEmail);

        if (countError) {
            console.error('Supabase count error:', countError);
            return json({ error: 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล' }, { status: 500 });
        }

        if ((existingLeadCount ?? 0) >= MAX_LEAD_REQUESTS_PER_EMAIL) {
            return json(
                { error: `Email นี้ใช้สิทธิ์ครบ ${MAX_LEAD_REQUESTS_PER_EMAIL} ครั้งแล้ว กรุณาใช้ Email อื่นหรือติดต่อทีมงาน` },
                { status: 409 }
            );
        }

        // Insert lead (slip จะส่งผ่าน Line แทน)
        const { data: insertedLead, error: insertError } = await supabase
            .from('leads')
            .insert({
                name: cleanName,
                email: cleanEmail,
                broker_account_id: cleanBrokerAccountId,
                tier,
                slip_url: null,
                approved: tier === 'free',
                email_sent: false
            })
            .select('id')
            .single();

        if (insertError) {
            console.error('Supabase insert error:', insertError);
            return json({ error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' }, { status: 500 });
        }

        // Free tier: send ebook immediately
        if (tier === 'free') {
            try {
                await sendEbookEmail(cleanName, cleanEmail, 'free');

                await supabase
                    .from('leads')
                    .update({ email_sent: true })
                    .eq('id', insertedLead.id);
            } catch (emailError) {
                console.error('Email send error:', emailError);
            }
        }

        // Premium & VIP tier: notify admin (slip จะมาทาง Line)
        if (tier === 'premium' || tier === 'vip') {
            try {
                await sendAdminNotification(cleanName, cleanEmail, cleanBrokerAccountId, null, tier);
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

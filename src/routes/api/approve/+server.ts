import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { sendEbookEmail } from '$lib/email';
import { ADMIN_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { lead_id, action, admin_key } = await request.json();

        if (admin_key !== ADMIN_SECRET) {
            return json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!lead_id || !action) {
            return json({ error: 'Missing lead_id or action' }, { status: 400 });
        }

        // Get the lead
        const { data: lead, error: fetchError } = await supabase
            .from('leads')
            .select('*')
            .eq('id', lead_id)
            .single();

        if (fetchError || !lead) {
            return json({ error: 'Lead not found' }, { status: 404 });
        }

        if (lead.approved) {
            return json({ error: 'Lead already approved' }, { status: 409 });
        }

        if (action === 'approve') {
            // Send eBook email
            await sendEbookEmail(lead.name, lead.email, lead.tier);

            // Update lead as approved + email sent
            await supabase
                .from('leads')
                .update({ approved: true, email_sent: true })
                .eq('id', lead_id);

            return json({ success: true, message: `Approved and sent email to ${lead.email}` });
        }

        if (action === 'reject') {
            await supabase
                .from('leads')
                .update({ approved: false })
                .eq('id', lead_id);

            return json({ success: true, message: `Rejected lead ${lead.email}` });
        }

        return json({ error: 'Invalid action. Use "approve" or "reject"' }, { status: 400 });
    } catch {
        return json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' }, { status: 500 });
    }
};

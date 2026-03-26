import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { ADMIN_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { lead_id, admin_key } = await request.json();

        if (!admin_key || admin_key !== ADMIN_SECRET) {
            return json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!lead_id) {
            return json({ error: 'Missing lead_id' }, { status: 400 });
        }

        // Fetch lead and check it exists
        const { data: lead, error: fetchError } = await supabase
            .from('indicator_leads')
            .select('id, access_granted')
            .eq('id', lead_id)
            .single();

        if (fetchError || !lead) {
            return json({ error: 'Lead not found' }, { status: 404 });
        }

        if (lead.access_granted) {
            return json({ error: 'Already granted' }, { status: 409 });
        }

        const { error: updateError } = await supabase
            .from('indicator_leads')
            .update({ access_granted: true })
            .eq('id', lead_id);

        if (updateError) {
            return json({ error: 'Database error' }, { status: 500 });
        }

        return json({ success: true, message: 'Marked as granted' });
    } catch {
        return json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' }, { status: 500 });
    }
};

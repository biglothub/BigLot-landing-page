import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { ADMIN_SECRET } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
    const adminKey = url.searchParams.get('admin_key');
    if (!adminKey || adminKey !== ADMIN_SECRET) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const filter = url.searchParams.get('filter') || 'pending';

    let query = supabase
        .from('indicator_leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

    if (filter === 'pending') {
        query = query.eq('access_granted', false);
    } else if (filter === 'granted') {
        query = query.eq('access_granted', true);
    }

    const { data: leads, error } = await query;

    if (error) {
        return json({ error: 'Database error' }, { status: 500 });
    }

    return json({ leads: leads || [] });
};

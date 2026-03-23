import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { ADMIN_SECRET } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
    const adminKey = url.searchParams.get('admin_key');
    const filter = url.searchParams.get('filter') || 'pending';

    if (adminKey !== ADMIN_SECRET) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    let query = supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

    if (filter === 'pending') {
        query = query.eq('approved', false).in('tier', ['premium', 'vip']);
    } else if (filter === 'approved') {
        query = query.eq('approved', true);
    }

    const { data, error } = await query.limit(100);

    if (error) {
        return json({ error: 'Failed to fetch leads' }, { status: 500 });
    }

    return json({ leads: data });
};

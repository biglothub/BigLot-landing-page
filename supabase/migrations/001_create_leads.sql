CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    broker_account_id TEXT NOT NULL,
    tier TEXT NOT NULL DEFAULT 'free' CHECK (tier IN ('free', 'premium', 'vip')),
    slip_url TEXT,
    approved BOOLEAN DEFAULT FALSE,
    email_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Unique constraint: one email per tier
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_email_tier ON leads(email, tier);

-- Index for admin queries
CREATE INDEX IF NOT EXISTS idx_leads_pending ON leads(tier, approved) WHERE approved = FALSE;

-- Create storage bucket for slips (run in Supabase SQL Editor)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('slips', 'slips', true);

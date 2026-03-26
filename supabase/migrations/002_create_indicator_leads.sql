CREATE TABLE IF NOT EXISTS indicator_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    tradingview_username TEXT NOT NULL,
    access_granted BOOLEAN DEFAULT FALSE,
    email_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_indicator_leads_email
    ON indicator_leads(email);

CREATE UNIQUE INDEX IF NOT EXISTS idx_indicator_leads_tv_username
    ON indicator_leads(LOWER(tradingview_username));

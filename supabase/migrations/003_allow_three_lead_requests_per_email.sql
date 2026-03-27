DROP INDEX IF EXISTS idx_leads_email_tier;

UPDATE leads
SET email = LOWER(TRIM(email))
WHERE email <> LOWER(TRIM(email));

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

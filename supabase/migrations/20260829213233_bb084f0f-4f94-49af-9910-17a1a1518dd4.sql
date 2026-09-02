CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  is_organization BOOLEAN NOT NULL DEFAULT false,
  organization_name TEXT,
  organization_address TEXT,
  website TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  topic_label TEXT NOT NULL,
  card_type TEXT,
  card_number TEXT,
  message TEXT,
  attachment_paths TEXT[] NOT NULL DEFAULT '{}',
  recipients TEXT[] NOT NULL DEFAULT '{}',
  email_status TEXT NOT NULL DEFAULT 'pending',
  email_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_inquiries TO service_role;

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only service role can access inquiries"
ON public.contact_inquiries FOR ALL TO service_role USING (true) WITH CHECK (true);
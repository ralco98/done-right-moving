CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  num_boxes text,
  move_date text,
  moving_from text,
  moving_to text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON quote_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON quote_requests TO authenticated;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_quote_requests" ON quote_requests;
CREATE POLICY "auth_select_quote_requests"
ON quote_requests FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_quote_requests" ON quote_requests;
CREATE POLICY "auth_update_quote_requests"
ON quote_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_quote_requests" ON quote_requests;
CREATE POLICY "auth_delete_quote_requests"
ON quote_requests FOR DELETE
TO authenticated USING (true);

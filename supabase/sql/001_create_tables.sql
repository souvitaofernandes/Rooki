-- Rooki Database Schema
-- Run this in your Supabase SQL Editor

-- Leads table (B2C form submissions)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  tipo_lead TEXT NOT NULL DEFAULT 'b2c',
  origem_pagina TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  consent_email BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact requests table (B2B form submissions)
CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa_escola TEXT,
  cargo TEXT,
  mensagem TEXT NOT NULL,
  tipo_solicitacao TEXT NOT NULL DEFAULT 'contato_b2b',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_tipo ON leads(tipo_lead);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests(created_at DESC);

-- Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (form submissions)
CREATE POLICY "Allow anonymous inserts on leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (TRUE);

CREATE POLICY "Allow anonymous inserts on contact_requests"
  ON contact_requests FOR INSERT
  TO anon
  WITH CHECK (TRUE);

-- Only authenticated users can read (for admin dashboard later)
CREATE POLICY "Allow authenticated reads on leads"
  ON leads FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "Allow authenticated reads on contact_requests"
  ON contact_requests FOR SELECT
  TO authenticated
  USING (TRUE);

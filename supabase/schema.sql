-- ============================================================
-- IVTherapyListing — Full Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- ============================================================
-- CITIES
-- ============================================================
CREATE TABLE IF NOT EXISTS cities (
  id            BIGSERIAL PRIMARY KEY,
  city_name     TEXT NOT NULL,
  state         TEXT NOT NULL,
  state_slug    TEXT NOT NULL,
  city_slug     TEXT NOT NULL,
  population    INTEGER DEFAULT 0,
  latitude      NUMERIC(9,6) NOT NULL,
  longitude     NUMERIC(9,6) NOT NULL,
  county        TEXT,
  metro_area    TEXT,
  intro         TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(state_slug, city_slug)
);

CREATE INDEX IF NOT EXISTS idx_cities_state_slug ON cities(state_slug);
CREATE INDEX IF NOT EXISTS idx_cities_population ON cities(population DESC);

-- ============================================================
-- BUSINESSES
-- ============================================================
CREATE TABLE IF NOT EXISTS businesses (
  id                 BIGSERIAL PRIMARY KEY,
  city_id            BIGINT REFERENCES cities(id) ON DELETE CASCADE,
  name               TEXT NOT NULL,
  slug               TEXT NOT NULL,
  address            TEXT,
  phone              TEXT,
  website            TEXT,
  email              TEXT,
  rating             NUMERIC(2,1),
  review_count       INTEGER DEFAULT 0,
  tier               TEXT DEFAULT 'free' CHECK (tier IN ('free', 'verified', 'premium')),
  is_active          BOOLEAN DEFAULT TRUE,
  is_mobile          BOOLEAN DEFAULT FALSE,
  clinic_type        TEXT DEFAULT 'iv_bar' CHECK (clinic_type IN ('iv_bar', 'medspa', 'clinic', 'mobile', 'wellness_center')),
  drips_available    TEXT[] DEFAULT '{}',
  description        TEXT,
  photos             TEXT[] DEFAULT '{}',
  created_at         TIMESTAMPTZ DEFAULT NOW(),
  updated_at         TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(city_id, slug)
);

CREATE INDEX IF NOT EXISTS idx_businesses_city_id ON businesses(city_id);
CREATE INDEX IF NOT EXISTS idx_businesses_tier ON businesses(tier);
CREATE INDEX IF NOT EXISTS idx_businesses_active ON businesses(is_active);
CREATE INDEX IF NOT EXISTS idx_businesses_mobile ON businesses(is_mobile);

-- ============================================================
-- CITY PRICING
-- ============================================================
CREATE TABLE IF NOT EXISTS city_pricing (
  id               BIGSERIAL PRIMARY KEY,
  city_id          BIGINT REFERENCES cities(id) ON DELETE CASCADE,
  drip_type        TEXT NOT NULL,
  price_low        INTEGER NOT NULL,
  price_high       INTEGER NOT NULL,
  session_minutes  INTEGER DEFAULT 45,
  updated_at       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(city_id, drip_type)
);

CREATE INDEX IF NOT EXISTS idx_city_pricing_city_id ON city_pricing(city_id);

-- ============================================================
-- LEADS
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id                     BIGSERIAL PRIMARY KEY,
  city_id                BIGINT REFERENCES cities(id),
  name                   TEXT NOT NULL,
  email                  TEXT NOT NULL,
  phone                  TEXT NOT NULL,
  zip_code               TEXT NOT NULL,
  health_goal            TEXT NOT NULL,
  drip_type_interested   TEXT DEFAULT 'Not Sure',
  is_mobile_preferred    BOOLEAN DEFAULT FALSE,
  message                TEXT,
  status                 TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
  created_at             TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_city_id ON leads(city_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- ============================================================
-- LISTING REQUESTS (from /list-your-business form)
-- ============================================================
CREATE TABLE IF NOT EXISTS listing_requests (
  id             BIGSERIAL PRIMARY KEY,
  business_name  TEXT NOT NULL,
  contact_name   TEXT NOT NULL,
  email          TEXT NOT NULL,
  phone          TEXT NOT NULL,
  city_state     TEXT NOT NULL,
  website        TEXT,
  clinic_type    TEXT,
  plan           TEXT DEFAULT 'free' CHECK (plan IN ('free', 'verified', 'premium')),
  message        TEXT,
  status         TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'approved', 'rejected')),
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_listing_requests_status ON listing_requests(status);
CREATE INDEX IF NOT EXISTS idx_listing_requests_created_at ON listing_requests(created_at DESC);

-- ============================================================
-- NEARBY CITIES FUNCTION
-- Returns cities near a given lat/lng, excluding the current city
-- ============================================================
CREATE OR REPLACE FUNCTION nearby_cities(
  city_id      BIGINT,
  lat          NUMERIC,
  lng          NUMERIC,
  limit_count  INTEGER DEFAULT 6
)
RETURNS TABLE (
  id             BIGINT,
  city_name      TEXT,
  state          TEXT,
  state_slug     TEXT,
  city_slug      TEXT,
  population     INTEGER,
  distance_miles NUMERIC
)
LANGUAGE SQL STABLE
AS $$
  SELECT
    c.id,
    c.city_name,
    c.state,
    c.state_slug,
    c.city_slug,
    c.population,
    ROUND(
      CAST(
        3959 * ACOS(
          LEAST(1.0, COS(RADIANS(lat)) * COS(RADIANS(c.latitude))
          * COS(RADIANS(c.longitude) - RADIANS(lng))
          + SIN(RADIANS(lat)) * SIN(RADIANS(c.latitude)))
        ) AS NUMERIC
      ), 1
    ) AS distance_miles
  FROM cities c
  WHERE c.id != city_id
  ORDER BY distance_miles ASC
  LIMIT limit_count;
$$;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Cities: public read
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "cities_public_read" ON cities FOR SELECT USING (true);

-- Businesses: public read active only
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "businesses_public_read" ON businesses FOR SELECT USING (is_active = true);

-- City pricing: public read
ALTER TABLE city_pricing ENABLE ROW LEVEL SECURITY;
CREATE POLICY "city_pricing_public_read" ON city_pricing FOR SELECT USING (true);

-- Leads: insert only via service role (no anon reads)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "leads_insert" ON leads FOR INSERT WITH CHECK (true);

-- Listing requests: insert only via service role
ALTER TABLE listing_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "listing_requests_insert" ON listing_requests FOR INSERT WITH CHECK (true);

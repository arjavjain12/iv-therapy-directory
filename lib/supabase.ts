import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Lead } from '@/types'

// Lazy singleton — only instantiated when real credentials are present.
let _client: SupabaseClient | null = null

export function isConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return !!(url && key && url.startsWith('http') && !url.startsWith('<'))
}

export function getClient(): SupabaseClient {
  if (_client) return _client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key || !url.startsWith('http') || url.startsWith('<')) {
    throw new Error('Supabase credentials not configured. Add them to .env.local')
  }
  _client = createClient(url, key)
  return _client
}

// ─── City queries ────────────────────────────────────────────────────────────

export async function getCityBySlug(stateSlug: string, citySlug: string) {
  const { data, error } = await getClient()
    .from('cities')
    .select('*')
    .eq('state_slug', stateSlug)
    .eq('city_slug', citySlug)
    .single()
  if (error) return null
  return data
}

export async function getCitiesByState(stateSlug: string) {
  const { data } = await getClient()
    .from('cities')
    .select('*')
    .eq('state_slug', stateSlug)
    .order('population', { ascending: false })
  return data || []
}

// Returns empty — state pages use dynamicParams=true for on-demand ISR rendering.
export async function getAllStates() {
  const { data } = await getClient()
    .from('cities')
    .select('state, state_slug')
    .order('state', { ascending: true })
  if (!data) return [] as { state: string; state_slug: string }[]
  // deduplicate by state_slug
  const seen = new Set<string>()
  return data.filter((r) => {
    if (seen.has(r.state_slug)) return false
    seen.add(r.state_slug)
    return true
  }) as { state: string; state_slug: string }[]
}

export async function getNearbyCities(cityId: number, lat: number, lng: number, limit = 6) {
  const { data } = await getClient()
    .rpc('nearby_cities', { city_id: cityId, lat, lng, limit_count: limit })
  return data || []
}

export async function getPopularCities(limit = 10) {
  const { data } = await getClient()
    .from('cities')
    .select('*')
    .order('population', { ascending: false })
    .limit(limit)
  return data || []
}

// ─── Business queries ────────────────────────────────────────────────────────

export async function getBusinessesByCity(cityId: number) {
  const { data } = await getClient()
    .from('businesses')
    .select('*')
    .eq('city_id', cityId)
    .eq('is_active', true)
    .order('tier', { ascending: false })
    .order('rating', { ascending: false })
  return data || []
}

export async function getBusinessBySlug(cityId: number, businessSlug: string) {
  const { data, error } = await getClient()
    .from('businesses')
    .select('*, city:cities(*)')
    .eq('city_id', cityId)
    .eq('slug', businessSlug)
    .single()
  if (error) return null
  return data
}

export async function getBusinessByPath(stateSlug: string, citySlug: string, businessSlug: string) {
  const city = await getCityBySlug(stateSlug, citySlug)
  if (!city) return null
  return getBusinessBySlug(city.id, businessSlug)
}

// ─── Pricing queries ─────────────────────────────────────────────────────────

export async function getCityPricing(cityId: number) {
  const { data } = await getClient()
    .from('city_pricing')
    .select('*')
    .eq('city_id', cityId)
    .order('drip_type')
  return data || []
}

// ─── Lead submission ─────────────────────────────────────────────────────────

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await getClient()
    .from('leads')
    .insert({ ...lead, status: 'new' })
    .select()
    .single()
  if (error) throw error
  return data
}

// ─── Static generation helpers ───────────────────────────────────────────────

// Returns empty — city pages use dynamicParams=true for on-demand ISR rendering.
// Pre-generating 31k+ pages at build time would exceed Vercel's build timeout.
export async function getAllCitySlugs() {
  const PAGE_SIZE = 1000
  const all: { state_slug: string; city_slug: string }[] = []
  let page = 0
  while (true) {
    const { data } = await getClient()
      .from('cities')
      .select('state_slug, city_slug')
      .order('population', { ascending: false })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)
    if (!data || data.length === 0) break
    all.push(...data)
    if (data.length < PAGE_SIZE) break
    page++
  }
  return all
}

export async function getAllBusinessSlugs() {
  const { data } = await getClient()
    .from('businesses')
    .select('slug, city:cities(state_slug, city_slug)')
    .eq('is_active', true)
  return (data || []) as unknown as Array<{ slug: string; city: { state_slug: string; city_slug: string } }>
}

// ─── City × Drip helpers ──────────────────────────────────────────────────────

export async function getTopCitySlugsByPopulation(minPop = 100000) {
  if (!isConfigured()) return []
  const { data } = await getClient()
    .from('cities')
    .select('state_slug, city_slug')
    .gte('population', minPop)
    .order('population', { ascending: false })
  return (data || []) as { state_slug: string; city_slug: string }[]
}

export async function getBusinessesByCityAndDrip(cityId: number, dripSlug: string) {
  const { data } = await getClient()
    .from('businesses')
    .select('*')
    .eq('city_id', cityId)
    .eq('is_active', true)
    .contains('drips_available', [dripSlug])
    .order('tier', { ascending: false })
    .order('rating', { ascending: false })
  return data || []
}

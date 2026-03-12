import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim()
  if (!q || q.length < 2) {
    return NextResponse.json({ cities: [], businesses: [] })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json({ cities: [], businesses: [] })
  }

  const supabase = createClient(url, key)
  const pattern = `%${q}%`

  const [citiesRes, businessesRes] = await Promise.all([
    supabase
      .from('cities')
      .select('city_name, state, state_slug, city_slug, population')
      .ilike('city_name', pattern)
      .order('population', { ascending: false })
      .limit(8),
    supabase
      .from('businesses')
      .select('name, slug, city_id, cities(city_name, state, state_slug, city_slug)')
      .eq('is_active', true)
      .ilike('name', pattern)
      .limit(5),
  ])

  return NextResponse.json({
    cities: citiesRes.data || [],
    businesses: (businessesRes.data || []).map((b) => ({
      name: b.name,
      slug: b.slug,
      city: b.cities as unknown as { city_name: string; state: string; state_slug: string; city_slug: string },
    })),
  })
}

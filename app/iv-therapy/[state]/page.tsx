import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Users, Droplets, Building2, TrendingUp } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { titleCase, formatNumber, STATE_NAMES } from '@/lib/utils'
import { getStateFAQs } from '@/lib/faq'
import { getCitiesByState, getAllStates, getClient, isConfigured } from '@/lib/supabase'

async function getStateData(stateSlug: string) {
  const cities = await getCitiesByState(stateSlug)
  if (!cities.length) return null
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)

  // Get business counts per city in this state
  let businessCounts: Record<number, number> = {}
  let totalProviders = 0
  let mobileCities = 0
  if (isConfigured()) {
    const cityIds = cities.map((c) => c.id)
    // Fetch businesses for all cities in this state
    const PAGE = 1000
    let allBiz: { city_id: number; is_mobile: boolean }[] = []
    let from = 0
    while (true) {
      const { data } = await getClient()
        .from('businesses')
        .select('city_id, is_mobile')
        .in('city_id', cityIds)
        .eq('is_active', true)
        .range(from, from + PAGE - 1)
      if (!data || data.length === 0) break
      allBiz = allBiz.concat(data)
      if (data.length < PAGE) break
      from += PAGE
    }
    for (const b of allBiz) {
      businessCounts[b.city_id] = (businessCounts[b.city_id] || 0) + 1
      totalProviders++
    }
    // Count cities that have at least one mobile provider
    const mobileSet = new Set(allBiz.filter((b) => b.is_mobile).map((b) => b.city_id))
    mobileCities = mobileSet.size
  }

  const citiesWithProviders = Object.keys(businessCounts).length
  return { cities, stateName, businessCounts, totalProviders, citiesWithProviders, mobileCities }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state } = await params
  const data = await getStateData(state)
  if (!data) return { title: 'Not Found' }
  const providerText = data.totalProviders > 0 ? `${data.totalProviders} providers across ` : ''
  const title = `IV Therapy in ${data.stateName} — ${providerText}${data.cities.length}+ Cities`
  const description = `Compare IV therapy clinics and mobile IV services across ${data.stateName}. Browse ${data.citiesWithProviders} cities with providers and find hangover recovery, Myers' Cocktail, NAD+, and more.`
  return {
    title, description,
    alternates: { canonical: `/iv-therapy/${state}` },
    openGraph: { title, description, url: `/iv-therapy/${state}` },
  }
}

export const revalidate = 86400

export async function generateStaticParams() {
  const states = await getAllStates()
  return states.map((s: { state_slug: string }) => ({ state: s.state_slug }))
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state: stateSlug } = await params
  const data = await getStateData(stateSlug)
  if (!data) notFound()

  const { cities, stateName, businessCounts, totalProviders, citiesWithProviders, mobileCities } = data
  const faqs = getStateFAQs(stateName)
  const totalPop = cities.reduce((sum, c) => sum + (c.population || 0), 0)

  const stateSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `IV Therapy Clinics in ${stateName}`,
    numberOfItems: cities.length,
    itemListElement: cities
      .filter((c) => businessCounts[c.id] > 0)
      .slice(0, 50)
      .map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${c.city_name} IV Therapy`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/iv-therapy/${stateSlug}/${c.city_slug}`,
      })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  // Sort cities: those with providers first (by population), then the rest
  const sortedCities = [...cities].sort((a, b) => {
    const aHas = businessCounts[a.id] > 0 ? 1 : 0
    const bHas = businessCounts[b.id] > 0 ? 1 : 0
    if (aHas !== bHas) return bHas - aHas
    return b.population - a.population
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: stateName },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy in {stateName}
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Browse IV therapy clinics and mobile IV services across {stateName}. Select your city to compare
            local providers, view pricing, and find hangover recovery, Myers&apos; Cocktail, NAD+, and more.
          </p>
        </div>
      </div>

      {/* State stats bar */}
      {totalProviders > 0 && (
        <div className="bg-sky-50 border-b border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-sky-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">{totalProviders}</span> IV therapy providers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-600" />
                <span className="text-gray-700">Across <span className="font-semibold text-gray-900">{citiesWithProviders}</span> cities</span>
              </div>
              {mobileCities > 0 && (
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-sky-600" />
                  <span className="text-gray-700">Mobile IV in <span className="font-semibold text-gray-900">{mobileCities}</span> cities</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-600" />
                <span className="text-gray-700">Serving <span className="font-semibold text-gray-900">{formatNumber(totalPop)}</span> residents</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* State overview content */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">IV Therapy Overview — {stateName}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {stateName} has {totalProviders > 0 ? `${totalProviders} IV therapy providers across ${citiesWithProviders} cities` : 'a growing IV therapy market'}. IV therapy in {stateName} is administered by licensed registered nurses (RNs) operating under physician medical directors, as required by state medical board regulations. Services include in-clinic IV bars, medical spas, wellness centers, and mobile IV services that come to your home or hotel. Common treatments include hydration drips ($99–$175), Myers&apos; Cocktail ($149–$275), NAD+ therapy ($250–$500), and hangover recovery ($125–$250).
          </p>
        </div>

        {/* Top cities with providers */}
        {citiesWithProviders > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-sky-600" />
              <h2 className="text-xl font-bold text-gray-900">Top Cities with IV Therapy Providers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedCities
                .filter((c) => businessCounts[c.id] > 0)
                .slice(0, 20)
                .map((city) => (
                  <Link
                    key={city.id}
                    href={`/iv-therapy/${stateSlug}/${city.city_slug}`}
                    className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 hover:border-sky-400 hover:shadow-sm transition"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-sky-500 group-hover:text-sky-600 transition" />
                        <span className="font-semibold text-gray-900 group-hover:text-sky-700 transition">
                          {city.city_name}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium text-sky-600">{businessCounts[city.id]} providers</span>
                        {city.population > 0 && (
                          <>
                            <span className="text-gray-300">·</span>
                            <span>{formatNumber(city.population)} pop</span>
                          </>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-sky-500 transition shrink-0 mt-0.5" />
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* All cities */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              All {cities.length} {cities.length === 1 ? 'City' : 'Cities'} in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedCities.map((city) => (
              <Link
                key={city.id}
                href={`/iv-therapy/${stateSlug}/${city.city_slug}`}
                className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 hover:border-sky-400 hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gray-400 group-hover:text-sky-500 transition" />
                    <span className="font-semibold text-gray-900 group-hover:text-sky-700 transition">
                      {city.city_name}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                    {businessCounts[city.id] > 0 && (
                      <span className="text-sky-600 font-medium">{businessCounts[city.id]} providers</span>
                    )}
                    {city.population > 0 && (
                      <span>{formatNumber(city.population)}</span>
                    )}
                  </div>
                  {city.county && (
                    <p className="mt-0.5 text-xs text-gray-400">{city.county}</p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-sky-500 transition shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <FAQ items={faqs} title={`Frequently Asked Questions — IV Therapy in ${stateName}`} />
        </div>
      </div>
    </>
  )
}

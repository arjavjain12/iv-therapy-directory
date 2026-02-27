import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, ArrowRight, Droplets } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import BusinessCard from '@/components/BusinessCard'
import DripPricingTable from '@/components/DripPricingTable'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import BenefitsInfographic from '@/components/infographics/BenefitsInfographic'

import { titleCase, formatNumber, STATE_NAMES } from '@/lib/utils'
import { getCityFAQs } from '@/lib/faq'
import { getCityBySlug, getBusinessesByCity, getCityPricing, getNearbyCities, getAllCitySlugs } from '@/lib/supabase'

async function getCityData(stateSlug: string, citySlug: string) {
  const city = await getCityBySlug(stateSlug, citySlug)
  if (!city) return null

  const [businesses, pricing, nearby] = await Promise.all([
    getBusinessesByCity(city.id),
    getCityPricing(city.id),
    getNearbyCities(city.id, city.latitude, city.longitude, 5),
  ])

  return { city, businesses, pricing, nearby }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}): Promise<Metadata> {
  const { state, city } = await params
  const data = await getCityData(state, city)

  if (!data) return { title: 'Not Found' }

  const { city: c, businesses } = data
  const stateName = STATE_NAMES[state] ?? titleCase(state)
  const title = `IV Therapy in ${c.city_name}, ${c.state} (2026) | Clinics & Mobile IV`
  const description = `Find IV therapy clinics and mobile IV services in ${c.city_name}, ${stateName}. Compare ${businesses.length > 0 ? businesses.length + ' local providers,' : ''} pricing for hangover recovery, Myers' Cocktail, NAD+, and more.`

  return {
    title,
    description,
    alternates: {
      canonical: `/iv-therapy/${state}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `/iv-therapy/${state}/${city}`,
    },
  }
}

export const dynamicParams = true
export const revalidate = false // cache forever — only regenerate on redeploy

export async function generateStaticParams() {
  const slugs = await getAllCitySlugs()
  return slugs.map((c: { state_slug: string; city_slug: string }) => ({
    state: c.state_slug,
    city: c.city_slug,
  }))
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}) {
  const { state: stateSlug, city: citySlug } = await params
  const data = await getCityData(stateSlug, citySlug)

  if (!data) notFound()

  const { city, businesses, pricing, nearby } = data
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  const stateAbbr = Object.entries(STATE_NAMES).find(([, v]) => v === stateName)?.[0]?.toUpperCase() ?? ''
  const faqs = getCityFAQs(city.city_name, stateName)
  const avgRating = businesses.length
    ? (businesses.reduce((acc, b) => acc + (b.rating ?? 0), 0) / businesses.length).toFixed(1)
    : null

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `IV Therapy Clinics in ${city.city_name}, ${stateName}`,
    description: `Find IV therapy clinics and mobile IV services in ${city.city_name}, ${stateName}`,
    numberOfItems: businesses.length,
    itemListElement: businesses.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LocalBusiness',
        name: b.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: b.address,
          addressLocality: city.city_name,
          addressRegion: stateSlug.toUpperCase(),
          addressCountry: 'US',
        },
        telephone: b.phone ?? undefined,
        url: b.website ?? undefined,
        aggregateRating: b.rating
          ? { '@type': 'AggregateRating', ratingValue: b.rating, reviewCount: b.review_count }
          : undefined,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: stateName, href: `/iv-therapy/${stateSlug}` },
            { label: city.city_name },
          ]} />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                IV Therapy in {city.city_name}, {stateName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {city.county}
                  {city.metro_area ? ` · ${city.metro_area} Metro` : ''}
                </span>
                {city.population > 0 && (
                  <span>Population: {formatNumber(city.population)}</span>
                )}
                {businesses.length > 0 && (
                  <span>{businesses.length} providers listed</span>
                )}
                {avgRating && (
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {avgRating} avg rating
                  </span>
                )}
              </div>
            </div>
            <Link
              href="#quote"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700 transition"
            >
              <Droplets className="h-5 w-5" /> Find IV Providers
            </Link>
          </div>

          <p className="mt-5 max-w-3xl text-gray-600 leading-relaxed">
            {city.intro
              ? city.intro
              : `Looking for IV therapy in ${city.city_name}? Whether you need hangover recovery, a Myers' Cocktail, NAD+ infusion, or a basic hydration drip in ${city.county}, our directory connects you with trusted local IV clinics and mobile IV services. Compare prices, read reviews, and book your session.`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="xl:col-span-2 space-y-12">

            {/* Pricing Table */}
            <DripPricingTable cityPricing={pricing} cityName={city.city_name} />

            {/* Business Listings */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  IV Therapy Providers in {city.city_name}
                </h2>
                <span className="text-sm text-gray-500">{businesses.length} listed</span>
              </div>

              {businesses.length > 0 ? (
                <div className="space-y-4">
                  {businesses.map((b) => (
                    <BusinessCard
                      key={b.id}
                      business={b}
                      stateSlug={stateSlug}
                      citySlug={citySlug}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
                  <Droplets className="mx-auto mb-3 h-10 w-10 text-gray-300" />
                  <p className="text-gray-500 font-medium">No listings yet for {city.city_name}</p>
                  <p className="text-sm text-gray-400 mt-1">Fill out the form below and we&apos;ll find local IV therapy providers for you.</p>
                </div>
              )}
            </div>

            {/* Benefits infographic */}
            <BenefitsInfographic />

            {/* FAQ */}
            <FAQ items={faqs} title={`Frequently Asked Questions — IV Therapy in ${city.city_name}`} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick CTA */}
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Find IV Providers</h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare {city.city_name} IV therapy clinics and mobile services. Fast, free, no obligation.
              </p>
              <Link href="#quote"
                className="block w-full rounded-lg bg-sky-600 py-3 text-center font-bold text-white hover:bg-sky-700 transition">
                Get Matched Now
              </Link>
            </div>

            {/* Mobile IV */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Mobile IV Available</h3>
              <p className="text-sm text-gray-600 mb-3">
                Don&apos;t want to leave home? Mobile IV services come to you in {city.city_name}.
              </p>
              <Link
                href="/mobile-iv-therapy"
                className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                Learn about mobile IV <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Drip types — link to city-specific drip pages */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Browse Drips in {city.city_name}</h3>
              <div className="space-y-2">
                {[
                  { label: 'IV Hydration', slug: 'hydration' },
                  { label: "Myers' Cocktail", slug: 'myers-cocktail' },
                  { label: 'NAD+', slug: 'nad-plus' },
                  { label: 'Immunity Boost', slug: 'immunity' },
                  { label: 'Hangover Recovery', slug: 'hangover' },
                  { label: 'Athletic Performance', slug: 'athletic' },
                ].map((drip) => (
                  <Link key={drip.slug}
                    href={`/iv-therapy/${stateSlug}/${citySlug}/${drip.slug}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition">
                    <span>{drip.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
                <Link href="/iv-therapy-drip-recommender"
                  className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700 mt-2">
                  Take the drip quiz <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Nearby cities */}
            {nearby.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
                <div className="space-y-2">
                  {nearby.slice(0, 5).map((c: { id: number; state_slug: string; city_slug: string; city_name: string }) => (
                    <Link key={c.id}
                      href={`/iv-therapy/${c.state_slug}/${c.city_slug}`}
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-sky-600 transition">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      {c.city_name} IV Therapy
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Lead Form */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm cityId={city.id} cityName={city.city_name} stateAbbr={stateAbbr} />
        </div>
      </div>
    </>
  )
}

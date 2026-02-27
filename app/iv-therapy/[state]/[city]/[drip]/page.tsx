import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Droplets, ArrowRight, Clock, DollarSign } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import BusinessCard from '@/components/BusinessCard'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'

import { titleCase, formatPrice, STATE_NAMES } from '@/lib/utils'
import {
  getCityBySlug,
  getCityPricing,
  getBusinessesByCity,
  getBusinessesByCityAndDrip,
  getNearbyCities,
  getTopCitySlugsByPopulation,
} from '@/lib/supabase'
import { DRIP_TYPE_DATA } from '@/data/drip-types'

export const dynamicParams = true
export const revalidate = false // generated once on first visit, cached forever

const DRIP_SLUGS = Object.keys(DRIP_TYPE_DATA)

const EXTRA_PRICING: Record<string, { low: number; high: number; duration: number }> = {
  b12:          { low: 99,  high: 175, duration: 30 },
  'vitamin-d':  { low: 99,  high: 175, duration: 30 },
  ozone:        { low: 150, high: 350, duration: 60 },
  detox:        { low: 150, high: 300, duration: 60 },
}

function dripSlugToDbKey(slug: string) {
  return slug.replace(/-/g, '_')
}

async function getPageData(stateSlug: string, citySlug: string, dripSlug: string) {
  if (!DRIP_SLUGS.includes(dripSlug)) return null
  const city = await getCityBySlug(stateSlug, citySlug)
  if (!city) return null

  const drip = DRIP_TYPE_DATA[dripSlug]
  const dbKey = dripSlugToDbKey(dripSlug)

  const [pricing, allBusinesses, dripBusinesses, nearby] = await Promise.all([
    getCityPricing(city.id),
    getBusinessesByCity(city.id),
    getBusinessesByCityAndDrip(city.id, dripSlug),
    getNearbyCities(city.id, city.latitude, city.longitude, 5),
  ])

  const dripPricing = pricing.find((p: { drip_type: string }) => p.drip_type === dbKey)
  const businesses = dripBusinesses.length > 0 ? dripBusinesses : allBusinesses

  return { city, drip, dripPricing, businesses, nearby }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string; drip: string }>
}): Promise<Metadata> {
  const { state, city, drip } = await params
  const data = await getPageData(state, city, drip)
  if (!data) return { title: 'Not Found' }

  const { city: c, drip: d } = data
  const stateName = STATE_NAMES[state] ?? titleCase(state)
  const title = `${d.label} IV Therapy in ${c.city_name}, ${stateName} (2026) | Clinics & Pricing`
  const description = `Find ${d.label} IV therapy in ${c.city_name}, ${stateName}. Compare local clinic pricing, session duration (${d.duration} min), and book mobile or in-clinic services near you.`

  return {
    title,
    description,
    alternates: { canonical: `/iv-therapy/${state}/${city}/${drip}` },
    openGraph: { title, description, url: `/iv-therapy/${state}/${city}/${drip}` },
  }
}

// Returns empty — uses dynamicParams=true for on-demand ISR rendering.
export async function generateStaticParams() {
  return []
}

export default async function CityDripPage({
  params,
}: {
  params: Promise<{ state: string; city: string; drip: string }>
}) {
  const { state: stateSlug, city: citySlug, drip: dripSlug } = await params
  const data = await getPageData(stateSlug, citySlug, dripSlug)
  if (!data) notFound()

  const { city, drip, dripPricing, businesses, nearby } = data
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  const stateAbbr =
    Object.entries(STATE_NAMES).find(([, v]) => v === stateName)?.[0]?.toUpperCase() ?? ''

  const priceLow  = dripPricing?.price_low  ?? EXTRA_PRICING[dripSlug]?.low  ?? drip.price_low
  const priceHigh = dripPricing?.price_high ?? EXTRA_PRICING[dripSlug]?.high ?? drip.price_high
  const duration  = dripPricing?.session_minutes ?? EXTRA_PRICING[dripSlug]?.duration ?? drip.duration

  const faqs = [
    {
      question: `How much does ${drip.label} IV therapy cost in ${city.city_name}?`,
      answer: `${drip.label} IV therapy in ${city.city_name} typically costs between ${formatPrice(priceLow)} and ${formatPrice(priceHigh)} per session. Mobile IV services may charge an additional travel fee of $25–$50. Prices vary based on add-ons, clinic vs. mobile delivery, and provider.`,
    },
    {
      question: `How long does a ${drip.label} session take in ${city.city_name}?`,
      answer: `A ${drip.label} IV session typically takes ${duration} minutes from start to finish. Mobile services arrive within 30–60 minutes of booking in most ${city.city_name} locations. You can relax at home, in a hotel, or at the clinic during the infusion.`,
    },
    {
      question: `What is ${drip.label} IV therapy good for?`,
      answer: `${drip.label} is best for: ${drip.best_for.join(', ')}. ${drip.description.split('.')[0]}.`,
    },
    {
      question: `Is ${drip.label} IV therapy safe in ${city.city_name}?`,
      answer: `${drip.label} IV therapy is generally safe when administered by a licensed medical professional (RN or NP) at a reputable ${city.city_name} provider.${drip.contraindications.length > 0 ? ` It may not be appropriate for people with: ${drip.contraindications.slice(0, 3).join(', ')}. Always consult your provider before your first session.` : ' Always consult your provider to confirm it is appropriate for your health history.'}`,
    },
    {
      question: `Can I get ${drip.label} IV delivered to my home in ${city.city_name}?`,
      answer: `Yes — many IV therapy providers in ${city.city_name} offer mobile ${drip.label} services that come to your home, hotel, or office. Book online and a licensed nurse will arrive with everything needed, typically within 45–90 minutes.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${drip.label} IV Therapy in ${city.city_name}, ${stateName}`,
    description: `Find ${drip.label} IV therapy clinics and mobile services in ${city.city_name}, ${stateName}. Compare pricing, session duration, and book today.`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ivlist.com/iv-therapy/${stateSlug}/${citySlug}/${dripSlug}`,
    },
  }

  const otherDrips = Object.values(DRIP_TYPE_DATA).filter((d) => d.slug !== dripSlug).slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: stateName, href: `/iv-therapy/${stateSlug}` },
            { label: city.city_name, href: `/iv-therapy/${stateSlug}/${citySlug}` },
            { label: drip.label },
          ]} />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                {drip.label} IV Therapy in {city.city_name}, {stateName}
              </h1>
              <p className="mt-2 text-sky-600 font-medium text-lg italic">{drip.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                  {formatPrice(priceLow)} – {formatPrice(priceHigh)} per session
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-sky-500" />
                  ~{duration} minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  {city.city_name}, {stateAbbr}
                </span>
              </div>
            </div>
            <Link
              href="#quote"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700 transition"
            >
              <Droplets className="h-5 w-5" /> Book in {city.city_name}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="xl:col-span-2 space-y-12">

            {/* What is this drip */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {drip.label} IV Therapy?</h2>
              <p className="text-gray-700 leading-relaxed">{drip.description}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                  <ul className="space-y-1.5">
                    {drip.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best For</h3>
                  <ul className="space-y-1.5">
                    {drip.best_for.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {drip.label} Pricing in {city.city_name}
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Local pricing estimates based on market data for {city.city_name}, {stateName}.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white border border-emerald-200 p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">Starting From</p>
                  <p className="text-2xl font-extrabold text-emerald-600">{formatPrice(priceLow)}</p>
                </div>
                <div className="rounded-xl bg-white border border-sky-200 p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">Typical High</p>
                  <p className="text-2xl font-extrabold text-sky-600">{formatPrice(priceHigh)}</p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">Session Length</p>
                  <p className="text-2xl font-extrabold text-gray-700">{duration} min</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Prices vary by provider, add-ons, and mobile vs. clinic delivery. Mobile services may add a $25–$50 travel fee.
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What&apos;s in a {drip.label} IV Drip?
              </h2>
              <div className="flex flex-wrap gap-2">
                {drip.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Listings */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  {drip.label} IV Providers in {city.city_name}
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
                  <p className="text-gray-500 font-medium">
                    No {drip.label} listings yet in {city.city_name}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Fill out the form below and we&apos;ll connect you with local providers.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ */}
            <FAQ items={faqs} title={`FAQ — ${drip.label} IV Therapy in ${city.city_name}`} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Book {drip.label} in {city.city_name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get matched with licensed IV therapy providers offering {drip.label} near you.
              </p>
              <Link
                href="#quote"
                className="block w-full rounded-lg bg-sky-600 py-3 text-center font-bold text-white hover:bg-sky-700 transition"
              >
                Find Providers Now
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">All IV Services in {city.city_name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Browse all IV therapy options and providers in {city.city_name}.
              </p>
              <Link
                href={`/iv-therapy/${stateSlug}/${citySlug}`}
                className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                View all {city.city_name} providers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Other Drip Types in {city.city_name}</h3>
              <div className="space-y-2">
                {otherDrips.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/iv-therapy/${stateSlug}/${citySlug}/${d.slug}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition"
                  >
                    <span>{d.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
                <Link
                  href={`/iv-therapy/${stateSlug}/${citySlug}`}
                  className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700 mt-2"
                >
                  All drips in {city.city_name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">About {drip.label}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn everything about {drip.label} — ingredients, benefits, who it&apos;s for, and how it works.
              </p>
              <Link
                href={`/iv-drip-types/${dripSlug}`}
                className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                {drip.label} complete guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {nearby.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
                <div className="space-y-2">
                  {nearby
                    .slice(0, 5)
                    .map((c: { id: number; state_slug: string; city_slug: string; city_name: string }) => (
                      <Link
                        key={c.id}
                        href={`/iv-therapy/${c.state_slug}/${c.city_slug}/${dripSlug}`}
                        className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-sky-600 transition"
                      >
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        {drip.label} in {c.city_name}
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

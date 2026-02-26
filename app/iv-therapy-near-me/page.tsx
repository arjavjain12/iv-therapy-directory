import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Search } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'IV Therapy Near Me — Find Local IV Clinics & Mobile IV Services',
  description: 'Find IV therapy clinics and mobile IV services near you. Compare hangover recovery drips, Myers\' Cocktail, NAD+, and more. Browse by city or state.',
  alternates: { canonical: '/iv-therapy-near-me' },
}

const FAQS = [
  { question: 'How do I find IV therapy near me?', answer: 'Use our directory to search by state and city. Select your state, then your city to see listed IV therapy clinics and mobile IV services in your area. You can also use our lead form to get matched with local providers.' },
  { question: 'How quickly can I get IV therapy near me?', answer: 'Most IV clinics offer same-day or next-day appointments. Mobile IV services typically have response times of 45 minutes to 2 hours. Booking in advance (especially on weekends) ensures faster access.' },
  { question: 'Is there mobile IV therapy near me?', answer: 'Mobile IV services are available in most major US cities and many suburban areas. Search your city in our directory and filter for providers offering mobile service. Mobile IVs typically add a $20–50 travel fee.' },
  { question: 'How much does IV therapy near me cost?', answer: 'IV therapy pricing in your area typically ranges from $99 (basic hydration) to $500 (NAD+ therapy). Use our city pages to see estimated pricing for your specific location. Prices vary by clinic and drip type.' },
  { question: 'What should I look for in an IV therapy provider near me?', answer: 'Look for clinics that employ licensed RNs, operate under a physician medical director, use pharmaceutical-grade IV solutions, have verifiable reviews, and conduct health intake screening before treatment.' },
]

const stateEntries = Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1]))

export default function IVTherapyNearMePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy Near Me',
    description: 'Find IV therapy clinics and mobile IV services near you. Compare hangover recovery drips, Myers\' Cocktail, NAD+, and more. Browse by city or state.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivlist.com/iv-therapy-near-me' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Near Me' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Near Me
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Find IV therapy clinics, IV bars, and mobile IV services in your city. Compare providers,
            read reviews, and book hangover recovery, Myers&apos; Cocktail, NAD+, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* How to find */}
        <div className="mb-12 rounded-xl border border-sky-200 bg-sky-50 p-8 text-center">
          <Search className="h-10 w-10 text-sky-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Find IV Therapy in Your City</h2>
          <p className="text-gray-600 mb-6">Select your state below, then choose your city to see local IV therapy providers and pricing.</p>
          <Link href="/iv-therapy"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition">
            <MapPin className="h-5 w-5" /> Browse All Cities
          </Link>
        </div>

        {/* State grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by State</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-12">
          {stateEntries.map(([abbr, name]) => {
            const slug = name.toLowerCase().replace(/\s+/g, '-')
            return (
              <Link
                key={abbr}
                href={`/iv-therapy/${slug}`}
                className="rounded-md px-2 py-1.5 text-sm text-gray-600 transition hover:bg-sky-50 hover:text-sky-700"
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="IV Therapy Near Me — Frequently Asked Questions" />

        <div className="max-w-4xl mx-auto mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'IV Therapy Directory', href: '/iv-therapy' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'Mobile IV Therapy', href: '/mobile-iv-therapy' },
              { label: 'IV Drip Recommender', href: '/iv-therapy-drip-recommender' },
              { label: 'IV Drip Types', href: '/iv-drip-types' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition">
                <span>→</span> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

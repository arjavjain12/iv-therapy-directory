import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'IV Therapy Directory — Find Clinics by State & City',
  description: 'Browse IV therapy clinics and mobile IV services across all 50 US states. Find hangover recovery, Myers\' Cocktail, NAD+, and more near you.',
  alternates: { canonical: '/iv-therapy' },
}

const stateEntries = Object.entries(STATE_NAMES).sort((a, b) =>
  a[1].localeCompare(b[1])
)

export default function IVTherapyDirectoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy Directory — Find by State',
    description: 'Browse IV therapy clinics and mobile IV services across all 50 US states. Find hangover recovery, Myers\' Cocktail, NAD+, and more near you.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivlist.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivlist.com/iv-therapy' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Directory' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Directory — Find by State
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Browse IV therapy clinics, IV bars, and mobile IV services across the United States.
            Select your state to find providers in your city.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by State</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {stateEntries.map(([abbr, name]) => {
            const slug = name.toLowerCase().replace(/\s+/g, '-')
            return (
              <Link
                key={abbr}
                href={`/iv-therapy/${slug}`}
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 hover:border-sky-400 hover:shadow-sm transition"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 group-hover:text-sky-500 transition" />
                  <span className="font-medium text-gray-900 group-hover:text-sky-700 transition">{name}</span>
                </div>
                <span className="text-xs text-gray-400 font-mono">{abbr.toUpperCase()}</span>
              </Link>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'IV Therapy Near Me', href: '/iv-therapy-near-me' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'All Drip Types', href: '/iv-drip-types' },
              { label: 'IV Drip Recommender', href: '/iv-therapy-drip-recommender' },
              { label: 'Mobile IV Therapy', href: '/mobile-iv-therapy' },
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

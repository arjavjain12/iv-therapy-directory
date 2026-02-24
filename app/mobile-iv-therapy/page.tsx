import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { CATEGORY_DATA } from '@/lib/category-data'

export const metadata: Metadata = {
  title: 'Mobile IV Therapy — IV Drips Delivered to Your Door (2026)',
  description: 'Find mobile IV therapy services that come to you. Compare prices, response times, and available drips. Book a mobile IV for hangover recovery, hydration, and more.',
  alternates: { canonical: '/mobile-iv-therapy' },
}

const data = CATEGORY_DATA.mobile

export default function MobileIVTherapyPage() {
  const faqs = data.faqs.map((f) => ({ question: f.q, answer: f.a }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mobile IV Therapy — IV Drips Delivered to You',
    description: 'Find mobile IV therapy services that come to you. Compare prices, response times, and available drips. Book a mobile IV for hangover recovery, hydration, and more.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/mobile-iv-therapy' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Mobile IV Therapy' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mobile IV Therapy — IV Drips Delivered to You
          </h1>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <p className="text-gray-600 leading-relaxed text-lg">{data.intro}</p>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Mobile IV?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.why.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Find Mobile IV Near You</h2>
          <p className="text-gray-600 mb-4">Search our directory for mobile IV services in your city.</p>
          <Link href="/iv-therapy"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3 font-bold text-white hover:bg-sky-700 transition">
            Find by City
          </Link>
        </div>

        <FAQ items={faqs} title="Mobile IV Therapy — Frequently Asked Questions" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Mobile IV vs. IV Clinic', href: '/mobile-iv-therapy-vs-iv-clinic' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
              { label: 'Mobile IV Therapy Category', href: '/iv-therapy/mobile' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'Hangover IV Therapy', href: '/iv-therapy/hangover' },
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

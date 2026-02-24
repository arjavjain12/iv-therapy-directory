import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import type { CategoryData } from '@/lib/category-data'

interface CategoryPageLayoutProps {
  data: CategoryData
}

export default function CategoryPageLayout({ data }: CategoryPageLayoutProps) {
  const faqs = data.faqs.map((f) => ({ question: f.q, answer: f.a }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.metaDescription,
    serviceType: 'IV Therapy',
    provider: {
      '@type': 'Organization',
      name: 'IVTherapyListing',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: data.h1 },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            {data.h1}
          </h1>

          {/* Stats bar */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="xl:col-span-2 space-y-10">
            {/* Intro */}
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">{data.intro}</p>
            </div>

            {/* Why section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose {data.h1}?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.why.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended drips */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Recommended IV Drips</h2>
              <div className="space-y-3">
                {data.drips.map((drip) => (
                  <div key={drip.slug} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
                    <div>
                      <Link href={`/iv-drip-types/${drip.slug}`} className="font-semibold text-gray-900 hover:text-sky-600 transition">
                        {drip.label}
                      </Link>
                      <p className="text-sm text-gray-500 mt-0.5">{drip.reason}</p>
                    </div>
                    <Link href={`/iv-drip-types/${drip.slug}`} className="shrink-0 ml-4">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro tips */}
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Pro Tips</h2>
              <ul className="space-y-2">
                {data.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <FAQ items={faqs} title={`Frequently Asked Questions — ${data.h1}`} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Find Local Providers</h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare IV therapy clinics and mobile services in your area.
              </p>
              <Link href="/iv-therapy-near-me"
                className="block w-full rounded-lg bg-sky-600 py-3 text-center font-bold text-white hover:bg-sky-700 transition">
                Find Near Me
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">All Drip Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'IV Hydration', slug: 'hydration' },
                  { label: "Myers' Cocktail", slug: 'myers-cocktail' },
                  { label: 'NAD+', slug: 'nad-plus' },
                  { label: 'Vitamin C', slug: 'vitamin-c' },
                  { label: 'Immunity Boost', slug: 'immunity' },
                  { label: 'Hangover Recovery', slug: 'hangover' },
                  { label: 'Beauty & Glow', slug: 'beauty' },
                  { label: 'Athletic Performance', slug: 'athletic' },
                  { label: 'Vitamin B12', slug: 'b12' },
                  { label: 'Vitamin D', slug: 'vitamin-d' },
                  { label: 'Ozone Therapy', slug: 'ozone' },
                  { label: 'Detox & Liver', slug: 'detox' },
                ].map((drip) => (
                  <Link key={drip.slug}
                    href={`/iv-drip-types/${drip.slug}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition">
                    <span>{drip.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Cost Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn what affects IV therapy pricing in your area.
              </p>
              <Link href="/iv-therapy-cost"
                className="flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700">
                View Cost Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

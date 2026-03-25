import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA['immune-boost']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/iv-therapy/immune-boost' },
}

const TOP_CITIES = [
  { href: '/iv-therapy/california/los-angeles', label: 'Los Angeles' },
  { href: '/iv-therapy/florida/miami', label: 'Miami' },
  { href: '/iv-therapy/texas/austin', label: 'Austin' },
  { href: '/iv-therapy/texas/houston', label: 'Houston' },
  { href: '/iv-therapy/nevada/las-vegas', label: 'Las Vegas' },
  { href: '/iv-therapy/new-york/new-york-city', label: 'New York City' },
  { href: '/iv-therapy/arizona/scottsdale', label: 'Scottsdale' },
  { href: '/iv-therapy/illinois/chicago', label: 'Chicago' },
  { href: '/iv-therapy/colorado/denver', label: 'Denver' },
  { href: '/iv-therapy/georgia/atlanta', label: 'Atlanta' },
]

export default function ImmuneBoostIVPage() {
  return (
    <>
      <CategoryPageLayout data={data} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Immune Boost IV by City</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {TOP_CITIES.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:border-sky-300 hover:text-sky-600 transition"
            >
              <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
              {city.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

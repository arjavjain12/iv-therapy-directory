import Link from 'next/link'
import { Droplets } from 'lucide-react'

const TOP_STATES = [
  { name: 'Texas', slug: 'texas' },
  { name: 'California', slug: 'california' },
  { name: 'Florida', slug: 'florida' },
  { name: 'New York', slug: 'new-york' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'Arizona', slug: 'arizona' },
]

const TOP_CITIES = [
  { name: 'New York, NY', state: 'new-york', city: 'new-york-city' },
  { name: 'Los Angeles, CA', state: 'california', city: 'los-angeles' },
  { name: 'Miami, FL', state: 'florida', city: 'miami' },
  { name: 'Houston, TX', state: 'texas', city: 'houston' },
  { name: 'Phoenix, AZ', state: 'arizona', city: 'phoenix' },
  { name: 'Las Vegas, NV', state: 'nevada', city: 'las-vegas' },
  { name: 'Dallas, TX', state: 'texas', city: 'dallas' },
  { name: 'Austin, TX', state: 'texas', city: 'austin' },
  { name: 'Chicago, IL', state: 'illinois', city: 'chicago' },
  { name: 'Scottsdale, AZ', state: 'arizona', city: 'scottsdale' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="bg-sky-600 rounded-lg p-1.5">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                IVTherapy<span className="text-sky-400">Listing</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Find and compare IV therapy clinics, IV bars, and mobile IV services in your city. Free, no-obligation quotes.
            </p>
          </div>

          {/* Top States */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Browse by State</h3>
            <ul className="space-y-1.5">
              {TOP_STATES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/iv-therapy/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/iv-therapy" className="text-sm text-sky-500 hover:text-sky-400 transition-colors">
                  All states →
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Popular Cities</h3>
            <ul className="space-y-1.5">
              {TOP_CITIES.map((c) => (
                <li key={c.city}>
                  <Link
                    href={`/iv-therapy/${c.state}/${c.city}`}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-1.5">
              {[
                { label: 'IV Drip Types Guide', href: '/iv-drip-types' },
                { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
                { label: 'How Much Does IV Cost?', href: '/how-much-does-iv-therapy-cost' },
                { label: 'IV Therapy Near Me', href: '/iv-therapy-near-me' },
                { label: 'Mobile IV Therapy', href: '/mobile-iv-therapy' },
                { label: 'Cheap IV Therapy', href: '/cheap-iv-therapy' },
                { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
                { label: 'Is IV Therapy Safe?', href: '/is-iv-therapy-safe' },
                { label: 'How Long Does IV Take?', href: '/how-long-does-iv-therapy-take' },
                { label: "What's in a Myers' Cocktail?", href: '/what-is-in-a-myers-cocktail' },
                { label: 'IV Therapy for Hangover', href: '/iv-therapy-for-hangover' },
                { label: 'Mobile IV vs IV Clinic', href: '/mobile-iv-therapy-vs-iv-clinic' },
                { label: 'IV vs Oral Hydration', href: '/iv-hydration-vs-oral-hydration' },
                { label: 'IV Drip Recommender', href: '/iv-therapy-drip-recommender' },
                { label: 'Hangover IV Therapy', href: '/iv-therapy/hangover' },
                { label: 'Athletic Recovery IV', href: '/iv-therapy/athletic-recovery' },
                { label: 'Immune Boost IV', href: '/iv-therapy/immune-boost' },
                { label: 'Anti-Aging IV (NAD+)', href: '/iv-therapy/anti-aging' },
                { label: 'Beauty IV (Glutathione)', href: '/iv-therapy/beauty' },
                { label: 'IV Hydration', href: '/iv-therapy/hydration' },
                { label: 'List Your Business', href: '/list-your-business' },
                { label: 'About Us', href: '/about' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} IVList. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

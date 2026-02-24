import Link from 'next/link'
import Image from 'next/image'
import { Search, Shield, Clock, MapPin, ArrowRight, CheckCircle, Droplets } from 'lucide-react'
import { STATE_NAMES } from '@/lib/utils'
import { getPopularCities } from '@/lib/supabase'
import HowIVWorksInfographic from '@/components/infographics/HowIVWorksInfographic'
import DripTypesInfographic from '@/components/infographics/DripTypesInfographic'

export default async function Home() {
  let popularCities: Array<{ id: number; city_name: string; state: string; state_slug: string; city_slug: string }> = []
  try {
    popularCities = await getPopularCities(10)
  } catch {
    // DB not configured yet — show empty list
  }

  const stateEntries = Object.entries(STATE_NAMES).sort((a, b) =>
    a[1].localeCompare(b[1])
  )

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(8,145,178,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                <Droplets className="h-3.5 w-3.5" />
                The #1 IV therapy directory
              </span>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Find IV Therapy Clinics{' '}
                <span className="text-sky-600">Near You</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Compare IV therapy clinics, IV bars, and mobile IV services in your city.
                Hangover recovery, Myers&apos; Cocktail, NAD+, immunity drips, and more.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/iv-therapy"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <Search className="h-5 w-5" />
                  Find by City
                </Link>
                <Link
                  href="/iv-drip-types"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 px-8 py-3.5 text-base font-semibold text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <Droplets className="h-5 w-5" />
                  View Drip Types
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
                {[
                  '31,000+ cities covered',
                  'Licensed RN administered',
                  'Free quotes',
                  'Mobile IV available',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-sky-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/hero-homepage.png"
                alt="Person relaxing comfortably in a modern IV therapy lounge"
                width={620}
                height={415}
                className="rounded-2xl shadow-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How It Works ───────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <HowIVWorksInfographic />
        </div>
      </section>

      {/* ───────── Drip Types ───────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <DripTypesInfographic />
          <div className="mt-8 text-center">
            <Link
              href="/iv-drip-types"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
            >
              Compare all 8 drip types in detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Popular Cities ───────── */}
      {popularCities.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Cities
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
              Browse IV therapy providers in these top cities.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {popularCities.map((city) => (
                <Link
                  key={city.id}
                  href={`/iv-therapy/${city.state_slug}/${city.city_slug}`}
                  className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
                >
                  <MapPin className="h-6 w-6 text-sky-600 transition group-hover:scale-110" />
                  <span className="mt-3 text-sm font-semibold text-gray-900">
                    {city.city_name}
                  </span>
                  <span className="mt-0.5 text-xs text-gray-400">
                    {city.state}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/iv-therapy"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                View all cities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ───────── Browse by State ───────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Browse by State
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Find IV therapy providers in every US state.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
        </div>
      </section>

      {/* ───────── Why Use Us ───────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Use IVTherapyListing?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            We make it simple to find the right IV therapy provider at the right price.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Search,
                title: 'Free Comparison Service',
                desc: 'Compare IV therapy clinics and mobile services in your area at no cost. No hidden fees, no credit card required.',
              },
              {
                icon: Shield,
                title: 'Licensed Providers Only',
                desc: 'Every provider in our directory employs licensed RNs and operates under a physician medical director — so you can book with confidence.',
              },
              {
                icon: Clock,
                title: 'Get Quotes in Minutes',
                desc: 'Submit one request and receive competitive quotes from local IV therapy providers, often within minutes.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Bottom CTA ───────── */}
      <section className="bg-sky-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find an IV Therapy Provider?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-sky-100">
            Search thousands of IV clinics and mobile services across the US. Free quotes, no hassle.
          </p>
          <Link
            href="/iv-therapy"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-sky-700 shadow transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
          >
            <Search className="h-5 w-5" />
            Find IV Therapy Near Me
          </Link>
        </div>
      </section>
    </>
  )
}

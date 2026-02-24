import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { DRIP_TYPE_DATA, DRIP_TYPE_LIST } from '@/data/drip-types'
import { formatPrice } from '@/lib/utils'

const DRIP_IMAGES: Record<string, string> = {
  'hydration': 'drip-hydration.png',
  'myers-cocktail': 'drip-myers.png',
  'nad-plus': 'drip-nad.png',
  'vitamin-c': 'drip-vitaminc.png',
  'immunity': 'drip-immunity.png',
  'hangover': 'drip-hangover.png',
  'beauty': 'drip-beauty.png',
  'athletic': 'drip-athletic.png',
  'b12': 'drip-b12.png',
  'vitamin-d': 'drip-vitamind.png',
  'ozone': 'drip-ozone.png',
  'detox': 'drip-detox.png',
}

export async function generateStaticParams() {
  return DRIP_TYPE_LIST.map((d) => ({ type: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>
}): Promise<Metadata> {
  const { type } = await params
  const drip = DRIP_TYPE_DATA[type]
  if (!drip) return { title: 'Not Found' }

  const title = `${drip.label} IV Therapy (2026) — Benefits, Ingredients & Pricing`
  const description = drip.description.slice(0, 155) + '...'

  return {
    title,
    description,
    alternates: { canonical: `/iv-drip-types/${type}` },
  }
}

export default async function DripTypePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const drip = DRIP_TYPE_DATA[type]
  if (!drip) notFound()

  const otherDrips = DRIP_TYPE_LIST.filter((d) => d.slug !== drip.slug)

  const faqs = [
    { question: `What is ${drip.label} IV therapy?`, answer: drip.description },
    { question: `How much does ${drip.label} IV therapy cost?`, answer: `${drip.label} IV therapy typically costs ${formatPrice(drip.price_low)}–${formatPrice(drip.price_high)} per session, depending on your location and provider. Some clinics offer package pricing for multiple sessions.` },
    { question: `How long does a ${drip.label} IV session take?`, answer: `A ${drip.label} IV session takes approximately ${drip.duration} minutes. Add 10–15 minutes for setup and intake at your first visit.` },
    { question: `Who should get ${drip.label} IV therapy?`, answer: `${drip.label} IV therapy is best for: ${drip.best_for.join(', ')}. Consult with the clinical staff if you have existing health conditions.` },
    { question: `Are there any contraindications for ${drip.label} IV therapy?`, answer: `The following conditions may contraindicate ${drip.label}: ${drip.contraindications.join(', ')}. Always complete the health intake form and disclose all medications and conditions before your session.` },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: `${drip.label} IV Therapy`,
    description: drip.description,
    procedureType: 'Therapeutic',
    howPerformed: 'Intravenous infusion administered by licensed RN under medical director oversight',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Drip Types', href: '/iv-drip-types' },
            { label: drip.label },
          ]} />

          <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {drip.label} IV Therapy
            </h1>
            <p className="mt-2 text-lg text-sky-600 font-medium">{drip.tagline}</p>
          </div>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
              <DollarSign className="h-5 w-5 text-sky-600 mx-auto mb-1" />
              <p className="text-lg font-bold text-gray-900">{formatPrice(drip.price_low)}–{formatPrice(drip.price_high)}</p>
              <p className="text-xs text-gray-500">Per session</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
              <Clock className="h-5 w-5 text-sky-600 mx-auto mb-1" />
              <p className="text-lg font-bold text-gray-900">{drip.duration} min</p>
              <p className="text-xs text-gray-500">Session duration</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
              <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-gray-900">{drip.benefits.length} Benefits</p>
              <p className="text-xs text-gray-500">Documented effects</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
              <p className="text-lg font-bold text-gray-900">{drip.ingredients.length}</p>
              <p className="text-xs text-gray-500">Active ingredients</p>
            </div>
          </div>

          {/* Drip image */}
          {DRIP_IMAGES[type] && (
            <div className="mt-6 relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src={`/images/${DRIP_IMAGES[type]}`}
                alt={`${drip.label} IV Therapy`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="xl:col-span-2 space-y-10">

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {drip.label} IV Therapy?</h2>
              <p className="text-gray-600 leading-relaxed">{drip.description}</p>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s in a {drip.label} Drip?</h2>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <ul className="space-y-2">
                  {drip.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of {drip.label}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {drip.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-4">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best for */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who is {drip.label} Best For?</h2>
              <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {drip.best_for.map((use) => (
                    <li key={use} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contraindications */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Important Considerations
              </h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm text-gray-700 mb-3">Always disclose the following conditions to your provider before receiving {drip.label} therapy:</p>
                <ul className="space-y-1">
                  {drip.contraindications.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <FAQ items={faqs} title={`${drip.label} IV Therapy — FAQs`} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Book {drip.label} Near You</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find local clinics and mobile services offering {drip.label} in your city.
              </p>
              <Link href="/iv-therapy-near-me"
                className="block w-full rounded-lg bg-sky-600 py-3 text-center font-bold text-white hover:bg-sky-700 transition">
                Find Near Me
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price range</span>
                  <span className="font-semibold text-gray-900">{formatPrice(drip.price_low)}–{formatPrice(drip.price_high)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Session duration</span>
                  <span className="font-semibold text-gray-900">{drip.duration} min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mobile available</span>
                  <span className="font-semibold text-gray-900">Yes (+ $20–50)</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Other Drip Types</h3>
              <div className="space-y-2">
                {otherDrips.slice(0, 6).map((d) => (
                  <Link key={d.slug}
                    href={`/iv-drip-types/${d.slug}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition">
                    <span>{d.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cost Guide</h3>
              <p className="text-sm text-gray-600 mb-3">Learn what affects IV therapy pricing.</p>
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

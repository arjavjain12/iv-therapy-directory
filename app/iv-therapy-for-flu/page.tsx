import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import ReviewedBy from '@/components/ReviewedBy'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import KeyTakeaways from '@/components/KeyTakeaways'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Cold & Flu — Immune IV Drips, Recovery & Cost (2026)',
  description:
    'IV therapy for cold and flu delivers high-dose vitamin C (5,000–10,000mg), zinc, and B vitamins to boost immune response and speed recovery. Learn about immune IV drips, costs ($149–$250), and find providers.',
  alternates: { canonical: '/iv-therapy-for-flu' },
  openGraph: {
    title: 'IV Therapy for Cold & Flu — Immune IV Drips, Recovery & Cost (2026)',
    description:
      'High-dose IV vitamin C and immune drips can reduce cold and flu duration. Cost $149–$250 per session.',
    url: `${BASE_URL}/iv-therapy-for-flu`,
  },
}

const faqs = [
  {
    question: 'Can IV therapy help you get over a cold or flu faster?',
    answer:
      'IV therapy can support your immune system during a cold or flu by delivering high-dose vitamin C, zinc, and B vitamins directly to the bloodstream at concentrations impossible to achieve orally. High-dose IV vitamin C (5,000–10,000mg) has been studied for its immune-boosting and antiviral properties — it supports white blood cell function, enhances neutrophil activity, and acts as a powerful antioxidant. Many patients report reduced symptom severity and shorter illness duration when they receive an immune IV drip early in the course of a cold or flu. IV therapy is supportive care — it does not replace antiviral medications (like Tamiflu) for influenza.',
  },
  {
    question: 'Why is IV vitamin C better than oral vitamin C for colds?',
    answer:
      'Oral vitamin C absorption is severely limited by intestinal transport capacity. The maximum your gut can absorb from a single oral dose is approximately 200mg — anything above that is excreted. At high oral doses (2,000mg+), vitamin C causes diarrhea and GI distress. IV vitamin C bypasses these limitations entirely, delivering 5,000–10,000mg or more directly to the bloodstream. This achieves plasma concentrations 50–100x higher than any oral dose could, reaching levels that have demonstrated antiviral and immune-stimulating properties in clinical research.',
  },
  {
    question: 'What is in an immune IV drip?',
    answer:
      'A standard Immunity Boost IV drip typically contains: high-dose vitamin C (2,500–10,000mg), zinc (5–10mg IV), B-complex vitamins (B1, B2, B3, B5, B6), vitamin B12, glutathione (antioxidant support), and 1 liter of saline for hydration. Some providers add selenium, vitamin D, or lysine for enhanced antiviral support. The combination addresses multiple immune pathways simultaneously — vitamin C and zinc support innate immune function, B vitamins fuel immune cell energy metabolism, and glutathione protects immune cells from oxidative damage.',
  },
  {
    question: 'When should I get an IV drip for a cold or flu?',
    answer:
      'The earlier the better. The ideal window is at the first sign of symptoms — the scratchy throat, initial fatigue, or body aches that signal the onset of illness. Getting an immune IV drip within the first 24–48 hours gives your immune system the maximum nutrient support during the critical early immune response. Many patients also use immune IV drips preventively during flu season or before travel. If you are already several days into a cold or flu, IV therapy can still help with hydration and nutrient replenishment to support recovery.',
  },
  {
    question: 'How much does an immune IV drip cost?',
    answer:
      'An Immunity Boost or cold/flu IV drip typically costs $149–$250 depending on the provider, location, and specific formula. Basic immune drips with standard-dose vitamin C and zinc start around $149. Premium immune drips with high-dose vitamin C (10,000mg+), glutathione, and additional nutrients run $200–$250. Mobile IV services that come to your home when you are sick may add a $25–$50 travel fee. Many providers offer package pricing for flu-season preventive protocols.',
  },
]

const drips = [
  {
    slug: 'immunity',
    label: 'Immunity Boost',
    reason: 'The standard cold/flu drip — high-dose vitamin C, zinc, B vitamins, and glutathione for comprehensive immune support.',
  },
  {
    slug: 'vitamin-c',
    label: 'Vitamin C IV',
    reason: 'High-dose IV vitamin C (5,000–10,000mg) achieves plasma levels 50–100x higher than oral — with demonstrated antiviral properties.',
  },
  {
    slug: 'hydration',
    label: 'IV Hydration',
    reason: 'Fever, sweating, and reduced fluid intake during illness cause significant dehydration. Rapid IV rehydration restores fluid balance.',
  },
]

export default function IVTherapyForFluPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy for Cold & Flu — Immune IV Drips, Recovery & Cost',
    description: metadata.description as string,
    datePublished: '2026-03-01',
    dateModified: '2026-03-26',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-flu` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: 'IV Therapy for Cold & Flu' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Cold &amp; Flu
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            When a cold or flu hits, your immune system burns through vitamin C, zinc, and B vitamins at an accelerated rate — right when your gut is least able to absorb them orally. Immune IV drips deliver high-dose nutrients directly to the bloodstream, giving your immune system the fuel it needs to fight back faster.
          </p>
          <ReviewedBy date="March 2026" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <KeyTakeaways items={[
          'IV vitamin C delivers 5,000–10,000mg — 50–100x higher plasma levels than any oral dose',
          'Oral vitamin C absorption maxes out at ~200mg per dose; excess causes GI distress',
          'Immunity Boost drips combine vitamin C, zinc, B vitamins, and glutathione',
          'Best results when administered within the first 24–48 hours of symptom onset',
          'Cost ranges from $149–$250 per session at most providers',
        ]} />

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind Immune IV Therapy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            During an acute infection, your body&apos;s demand for vitamin C increases dramatically. White blood cells accumulate vitamin C at concentrations 50–100x higher than plasma levels — they need it to generate the reactive oxygen species that kill pathogens. Studies show that vitamin C levels in the blood drop significantly during acute infections as the immune system consumes it. This creates a paradox: your body needs more vitamin C precisely when illness-related GI symptoms (nausea, reduced appetite) make it hardest to absorb orally.
          </p>
          <p className="text-gray-600 leading-relaxed">
            IV vitamin C resolves this completely. A single IV infusion of 5,000–10,000mg achieves plasma concentrations that are pharmacologically impossible with oral dosing. At these concentrations, vitamin C has demonstrated antiviral activity in vitro, enhanced neutrophil and lymphocyte function, and reduced duration of cold symptoms in clinical studies. Zinc IV further supports immune cell signaling and has direct antiviral properties. B vitamins fuel the rapid immune cell proliferation that is the hallmark of an effective immune response.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best IV Drips for Cold &amp; Flu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {drips.map((drip) => (
              <Link
                key={drip.slug}
                href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-sky-200 bg-sky-50 p-4 hover:border-sky-400 transition"
              >
                <p className="font-bold text-sky-700 mb-1">{drip.label}</p>
                <p className="text-sm text-gray-600">{drip.reason}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During an Immune IV Session</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An Immunity Boost IV session takes 30–60 minutes. The infusion is generally comfortable — some patients notice a mild warming sensation from the B vitamins and a slight metallic taste, both of which are normal and brief. Most patients report feeling noticeably better by the end of the session: improved energy, reduced body aches, and clearer thinking.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Mobile IV therapy is especially popular for cold and flu treatment since it eliminates the need to leave home while sick. A licensed nurse or paramedic comes to your home and administers the drip in the comfort of your couch or bed. For preventive use during flu season, many patients schedule monthly immune IV drips from October through March.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IV vs. Oral: Immune Nutrient Absorption Compared</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Nutrient</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Oral Max</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">IV Dose</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { nutrient: 'Vitamin C', oral: '~200mg absorbed', iv: '5,000–10,000mg', advantage: '25–50x higher dose' },
                  { nutrient: 'Zinc', oral: '15–30mg (GI upset)', iv: '5–10mg IV', advantage: '100% bioavailability' },
                  { nutrient: 'B Vitamins', oral: 'Variable absorption', iv: 'Therapeutic dose', advantage: 'Bypasses gut entirely' },
                  { nutrient: 'Glutathione', oral: 'Poorly absorbed', iv: '600–1200mg', advantage: 'Direct cellular delivery' },
                ].map((row) => (
                  <tr key={row.nutrient} className="bg-white">
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.nutrient}</td>
                    <td className="px-4 py-3 text-gray-600">{row.oral}</td>
                    <td className="px-4 py-3 text-gray-600">{row.iv}</td>
                    <td className="px-4 py-3 text-gray-600">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQ items={faqs} />

        <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/iv-drip-types/immunity', label: 'Immunity Boost IV Guide' },
              { href: '/iv-drip-types/vitamin-c', label: 'Vitamin C IV Guide' },
              { href: '/iv-therapy-near-me', label: 'Find IV Therapy Near You' },
              { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
              { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-sky-600 hover:text-sky-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Find Providers CTA */}
        <section className="rounded-2xl bg-sky-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find Providers Near You</h2>
          <p className="text-sky-100 mb-6 max-w-xl mx-auto">
            Find IV therapy clinics and mobile providers in your area that offer immune boost drips — including same-day home visits when you&apos;re too sick to leave.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iv-therapy-near-me"
              className="inline-block rounded-xl bg-white px-8 py-3 font-bold text-sky-700 hover:bg-sky-50 transition">
              Find Providers Near Me
            </Link>
            <Link href="/iv-therapy"
              className="inline-block rounded-xl border-2 border-white px-8 py-3 font-bold text-white hover:bg-sky-500 transition">
              Browse All Providers
            </Link>
          </div>
        </section>

        <MedicalDisclaimer />
      </div>
    </>
  )
}

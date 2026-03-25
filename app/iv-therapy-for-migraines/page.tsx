import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import ReviewedBy from '@/components/ReviewedBy'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import KeyTakeaways from '@/components/KeyTakeaways'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Migraines — How It Works, Best Drips & Cost (2026)',
  description:
    "IV therapy for migraines uses magnesium and Myers' Cocktail to deliver fast relief. Learn how migraine IV drips work, what they cost ($149–$275), and find providers near you.",
  alternates: { canonical: '/iv-therapy-for-migraines' },
  openGraph: {
    title: 'IV Therapy for Migraines — How It Works, Best Drips & Cost (2026)',
    description:
      "IV magnesium and Myers' Cocktail deliver fast migraine relief with 100% absorption. Cost $149–$275 per session.",
    url: `${BASE_URL}/iv-therapy-for-migraines`,
  },
}

const faqs = [
  {
    question: 'Can IV therapy help with migraines?',
    answer:
      "Yes — IV magnesium is one of the most evidence-backed treatments for acute migraines. The American Headache Society recognizes IV magnesium sulfate as an effective treatment for migraine with aura. Magnesium regulates neurotransmitter release, prevents cortical spreading depression (the wave of brain activity that causes aura), and relaxes blood vessels. IV delivery achieves therapeutic blood levels within minutes — far faster than oral magnesium, which takes weeks and is limited by its laxative effect at higher doses.",
  },
  {
    question: "Why is Myers' Cocktail used for migraines?",
    answer:
      "Myers' Cocktail combines magnesium with B vitamins (B2, B6, B12), vitamin C, and hydration — all of which address migraine triggers. Riboflavin (B2) is a proven migraine preventive recommended by the American Academy of Neurology. Magnesium calms hyperexcitable neurons. B6 supports serotonin synthesis (low serotonin is implicated in migraines). The IV hydration component addresses dehydration, one of the most common migraine triggers. Together, these nutrients target multiple migraine mechanisms simultaneously.",
  },
  {
    question: 'How quickly does IV therapy relieve a migraine?',
    answer:
      'Many patients report significant relief within 30–60 minutes of starting an IV magnesium infusion. Some emergency departments use IV magnesium as a first-line treatment for acute migraine with aura. For preventive protocols, a series of 4–8 weekly infusions builds cumulative benefit, with many patients reporting reduced migraine frequency and intensity after the initial loading series. Monthly maintenance infusions help sustain the preventive effect.',
  },
  {
    question: 'How much does IV therapy for migraines cost?',
    answer:
      "A migraine-focused IV session typically costs $149–$275 depending on the provider, location, and specific drip formula. A basic magnesium IV runs $149–$199. A full Myers' Cocktail with enhanced magnesium costs $199–$275. Mobile IV services that come to your home during a migraine attack may charge an additional $25–$50 travel fee. Package pricing (4–8 sessions) is commonly available at a 10–20% discount for preventive protocols.",
  },
  {
    question: 'Is IV magnesium better than oral magnesium for migraines?',
    answer:
      'For acute migraine relief, IV magnesium is significantly more effective than oral. IV delivery achieves 100% bioavailability and therapeutic blood levels within minutes, while oral magnesium has only 30–40% absorption and takes weeks to raise serum levels. Oral magnesium at migraine-preventive doses (400–600mg daily) frequently causes diarrhea, limiting the dose patients can tolerate. IV magnesium bypasses the GI tract entirely, allowing therapeutic doses without GI side effects. For ongoing prevention, many neurologists recommend both: regular IV sessions plus a tolerable daily oral dose.',
  },
]

const drips = [
  {
    slug: 'magnesium',
    label: 'Magnesium IV',
    reason: 'The cornerstone of migraine IV therapy — calms hyperexcitable neurons, prevents cortical spreading depression, and relaxes blood vessels.',
  },
  {
    slug: 'myers-cocktail',
    label: "Myers' Cocktail",
    reason: 'Combines magnesium with B2, B6, B12, and vitamin C — targeting multiple migraine mechanisms in a single infusion.',
  },
  {
    slug: 'hydration',
    label: 'IV Hydration',
    reason: 'Dehydration is one of the most common migraine triggers. Rapid IV rehydration can abort dehydration-triggered migraines.',
  },
]

export default function IVTherapyForMigrainesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy for Migraines — How It Works, Best Drips & Cost',
    description: metadata.description as string,
    datePublished: '2026-03-01',
    dateModified: '2026-03-26',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-migraines` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: 'IV Therapy for Migraines' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Migraines
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Migraine IV drips — primarily magnesium and Myers&apos; Cocktail — deliver fast, targeted relief by addressing the neurological and nutritional triggers behind migraines. IV magnesium is recognized by the American Headache Society as an effective acute migraine treatment, and many patients report relief within 30–60 minutes.
          </p>
          <ReviewedBy date="March 2026" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <KeyTakeaways items={[
          'IV magnesium is a proven migraine treatment recognized by the American Headache Society',
          "Myers' Cocktail targets multiple migraine mechanisms: magnesium, B vitamins, hydration",
          'IV delivers 100% absorption vs. 30–40% for oral magnesium — with no GI side effects',
          'Many patients report significant relief within 30–60 minutes of infusion',
          'Cost ranges from $149–$275 per session, with package discounts available',
        ]} />

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Magnesium Is Central to Migraine IV Therapy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Magnesium plays a critical role in migraine pathophysiology. It regulates NMDA receptors (which control pain signaling), prevents cortical spreading depression (the wave of neuronal activity that causes migraine aura), stabilizes blood vessel tone, and modulates serotonin receptor function. Research shows that up to 50% of migraine patients have low magnesium levels during acute attacks, and magnesium deficiency is significantly more common in migraine sufferers than the general population.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The challenge with oral magnesium is bioavailability. Oral magnesium supplements have only 30–40% absorption, and higher doses cause diarrhea before reaching therapeutic blood levels. IV magnesium bypasses the GI tract entirely, delivering 100% of the dose directly to the bloodstream and achieving therapeutic concentrations within minutes. This is why emergency departments use IV magnesium as a first-line treatment for acute migraine with aura.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best IV Drips for Migraines</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During a Migraine IV Session</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A migraine IV session typically takes 30–45 minutes. For acute migraine treatment, the infusion starts slowly to gauge tolerance — magnesium can cause a warm, flushed sensation and a slight drop in blood pressure, both of which are normal and transient. Many patients begin feeling relief during the infusion itself as magnesium levels normalize.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For preventive protocols, providers typically recommend a loading series of 4–8 weekly sessions to build and maintain optimal magnesium levels, followed by monthly maintenance infusions. Mobile IV therapy services can administer the infusion at home during an acute attack — particularly valuable since driving to a clinic during a severe migraine is often impractical.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of IV Therapy for Migraines</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">IV Drip</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Price Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Magnesium IV', price: '$149–$199', duration: '30–45 min' },
                  { name: "Myers' Cocktail", price: '$199–$275', duration: '30–45 min' },
                  { name: 'IV Hydration', price: '$99–$149', duration: '30–45 min' },
                  { name: 'Mobile IV (at-home)', price: '+$25–$50 travel fee', duration: '30–60 min' },
                ].map((row) => (
                  <tr key={row.name} className="bg-white">
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            See our full <Link href="/iv-therapy-cost" className="text-sky-600 hover:underline">IV therapy cost guide</Link> for detailed pricing by location and provider type.
          </p>
        </section>

        <FAQ items={faqs} />

        <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/iv-drip-types/myers-cocktail', label: "Myers' Cocktail Guide" },
              { href: '/iv-drip-types/magnesium', label: 'Magnesium IV Guide' },
              { href: '/iv-therapy-near-me', label: 'Find IV Therapy Near You' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
              { href: '/how-often-should-you-get-iv-therapy', label: 'How Often to Get IV Therapy?' },
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
            Search our directory for IV therapy clinics and mobile providers in your area that offer migraine-focused drips with magnesium and Myers&apos; Cocktail.
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

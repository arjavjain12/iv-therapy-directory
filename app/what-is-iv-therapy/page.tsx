import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'What Is IV Therapy? How It Works, Benefits & Types (2026)',
  description:
    'IV therapy delivers vitamins, minerals, and fluids directly into your bloodstream via an intravenous drip. Learn how it works, what the drip types do, costs, and whether it\'s right for you.',
  alternates: { canonical: '/what-is-iv-therapy' },
  openGraph: {
    title: 'What Is IV Therapy? How It Works, Benefits & Types (2026)',
    description: 'A complete guide to IV therapy — how it works, types of drips, costs, benefits, and what to expect.',
    url: `${BASE_URL}/what-is-iv-therapy`,
  },
}

const faqs = [
  {
    question: 'What is IV therapy?',
    answer:
      'IV therapy (intravenous therapy) is the administration of fluids, vitamins, minerals, or medications directly into a vein via an IV catheter. In a wellness context, IV therapy delivers high concentrations of nutrients — saline, electrolytes, B vitamins, vitamin C, magnesium, NAD+, and others — directly into the bloodstream, bypassing the digestive system for 100% bioavailability. Sessions are administered by licensed registered nurses and typically take 30–90 minutes.',
  },
  {
    question: 'What is IV therapy used for?',
    answer:
      'Wellness IV therapy is used for: rapid rehydration (hangover, dehydration, illness), energy and fatigue recovery, immune support, athletic performance and recovery, anti-aging and cellular health (NAD+), skin brightening (glutathione), migraine relief, and general micronutrient replenishment. It is distinct from medical IV therapy used in hospitals for serious conditions.',
  },
  {
    question: 'What is in an IV therapy drip?',
    answer:
      'The base of most IV drips is Normal Saline (0.9% NaCl) or Lactated Ringer\'s solution. To this base, providers add nutrients based on the drip type: B-complex vitamins, vitamin B12, vitamin C, magnesium, calcium, zinc, glutathione, NAD+, amino acids, or medications like Zofran (anti-nausea) or Toradol (anti-inflammatory). The exact composition depends on the drip you choose.',
  },
  {
    question: 'Is IV therapy the same as a drip?',
    answer:
      'Yes. "IV drip," "IV therapy," "vitamin drip," "drip therapy," and "infusion therapy" are all terms for the same general treatment. The "drip" refers to the IV bag dripping solution through tubing into a vein via a small catheter needle.',
  },
  {
    question: 'How long does IV therapy take?',
    answer:
      'Most IV therapy sessions take 30–90 minutes depending on the drip type and volume. Basic hydration takes 30–45 minutes. Myers\' Cocktail and most vitamin drips take 45–60 minutes. NAD+ therapy requires 90 minutes to 4 hours due to the slow infusion rate required for comfort.',
  },
  {
    question: 'Is IV therapy safe?',
    answer:
      'IV therapy administered by licensed medical professionals using pharmaceutical-grade solutions is generally very safe. All reputable IV clinics and mobile services employ RNs and operate under a physician medical director. The most common side effect is minor bruising at the IV site. Serious complications are rare but can include infection or air embolism if protocols aren\'t followed — which is why professional administration matters.',
  },
  {
    question: 'How much does IV therapy cost?',
    answer:
      'IV therapy costs $99–$500 per session depending on the drip type. Basic hydration starts around $99–$175. Myers\' Cocktail and most specialty drips run $149–$275. NAD+ therapy is the most expensive at $250–$500 per session. Mobile IV services add $25–$75 for the at-home convenience.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is IV Therapy? How It Works, Benefits & Types',
  description: metadata.description as string,
  datePublished: '2026-01-01',
  dateModified: '2026-02-26',
  author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/what-is-iv-therapy` },
}

const DRIP_OVERVIEW = [
  { slug: 'hydration', label: 'IV Hydration', price: '$99–$175', summary: 'The foundation. Saline + electrolytes for rapid rehydration. Fastest and most affordable.' },
  { slug: 'myers-cocktail', label: "Myers' Cocktail", price: '$149–$275', summary: 'The gold standard wellness drip. B vitamins, magnesium, calcium, and vitamin C.' },
  { slug: 'nad-plus', label: 'NAD+', price: '$250–$500', summary: 'Cellular energy and anti-aging. Supports mitochondrial function and DNA repair.' },
  { slug: 'hangover', label: 'Hangover Recovery', price: '$125–$250', summary: 'Rehydration + anti-nausea + anti-inflammatory. Back to normal in under an hour.' },
  { slug: 'immunity', label: 'Immunity Boost', price: '$149–$250', summary: 'High-dose vitamin C, zinc, and glutathione for immune support.' },
  { slug: 'beauty', label: 'Beauty (Glutathione)', price: '$150–$275', summary: 'Glutathione master antioxidant for skin brightening and cellular protection.' },
]

export default function WhatIsIVTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Is IV Therapy?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            IV therapy (intravenous therapy) delivers vitamins, minerals, fluids, and medications directly into your bloodstream through a small catheter in your vein. Unlike supplements you swallow, IV nutrients bypass your digestive system entirely — achieving 100% bioavailability immediately. A nurse places the IV, and you relax for 30–90 minutes while the drip runs.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does IV Therapy Work?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A licensed registered nurse (RN) cleans a small area on your arm and inserts a thin plastic catheter into a vein — typically in the forearm or the back of the hand. The catheter connects to tubing that runs to an IV bag containing your chosen solution. Gravity (or an IV pump) delivers the fluid at a controlled rate over 30–90 minutes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Because the nutrients go directly into your bloodstream, they bypass the gut absorption bottleneck. Oral vitamin C maxes out at around 200mg absorption before the kidneys excrete the rest — an IV delivers 5,000–25,000mg at full bioavailability. Oral magnesium bioavailability is 30–40%; IV magnesium is 100%.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sessions take place at IV clinics, medspa wellness centers, or at your location via mobile IV services where a nurse travels to you.
          </p>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Types of IV Therapy Drips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DRIP_OVERVIEW.map((drip) => (
              <Link
                key={drip.slug}
                href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-sky-400 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between mb-1">
                  <p className="font-bold text-gray-900">{drip.label}</p>
                  <span className="text-sm font-semibold text-sky-600 shrink-0 ml-2">{drip.price}</span>
                </div>
                <p className="text-sm text-gray-600">{drip.summary}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/iv-drip-types" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
              → View all 12 drip types with full ingredient lists
            </Link>
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of IV Therapy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: '100% bioavailability', desc: 'Nutrients enter your bloodstream directly — nothing lost to digestion or gut absorption limits.' },
              { title: 'Faster than oral supplements', desc: 'Feel effects in 15–30 minutes vs. hours or days with oral vitamins.' },
              { title: 'Higher therapeutic doses', desc: 'IV allows dosing 10–100x higher than oral supplements before side effects occur.' },
              { title: 'Works when gut doesn\'t', desc: 'Nausea, vomiting, or gut issues don\'t affect IV absorption at all.' },
              { title: 'Customizable', desc: 'Add medications, adjust concentrations, combine nutrients for your specific needs.' },
              { title: 'Medically supervised', desc: 'All sessions administered by licensed RNs with physician oversight.' },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900 mb-1">{b.title}</p>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to expect */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect at Your First IV Therapy Session</h2>
          <ol className="space-y-3">
            {[
              'Arrive at the clinic (or a nurse arrives at your location for mobile IV).',
              'Complete a brief health intake — medical history, allergies, current medications.',
              'The nurse selects a vein, cleans the area, and places a small catheter. This feels like a brief pinch.',
              'The IV bag is connected and begins dripping. Most people feel nothing during the infusion.',
              'You relax for 30–90 minutes — many people watch TV, work on a laptop, or rest.',
              'The nurse removes the catheter, applies a small bandage, and you\'re done. No downtime.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-xl bg-sky-50 border border-sky-200 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to Try IV Therapy?</h2>
          <p className="text-gray-600 mb-5">Find clinics and mobile IV services in your city. Compare prices and book same-day.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/iv-therapy-near-me" className="rounded-xl bg-sky-600 px-8 py-3 font-bold text-white hover:bg-sky-700 transition">
              Find IV Therapy Near Me
            </Link>
            <Link href="/iv-therapy-drip-recommender" className="rounded-xl border border-sky-300 px-8 py-3 font-bold text-sky-700 hover:bg-sky-100 transition">
              Take the Drip Quiz →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/iv-drip-types', label: 'All IV Drip Types' },
              { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/is-iv-therapy-safe', label: 'Is IV Therapy Safe?' },
              { href: '/how-long-does-iv-therapy-take', label: 'How Long Does IV Therapy Take?' },
              { href: '/iv-therapy-drip-recommender', label: 'Find Your Drip (Quiz)' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-sky-600 hover:text-sky-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

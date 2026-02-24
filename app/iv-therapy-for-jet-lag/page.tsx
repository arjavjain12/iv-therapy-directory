import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivtherapylisting.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Jet Lag | Hydration, B12 & Immunity IV Drips for Travel',
  description:
    'Beat jet lag fast with IV therapy. Learn how hydration, B12, and immunity IV drips restore energy after long-haul flights — and find mobile IV services that come to your hotel.',
  alternates: { canonical: '/iv-therapy-for-jet-lag' },
  openGraph: {
    title: 'IV Therapy for Jet Lag | Hydration, B12 & Immunity IV Drips for Travel',
    description:
      'Beat jet lag fast with IV therapy. Learn how hydration, B12, and immunity IV drips restore energy after long-haul flights.',
    url: `${BASE_URL}/iv-therapy-for-jet-lag`,
  },
}

export default function IVTherapyForJetLagPage() {
  const faqs = [
    {
      question: 'How quickly does IV therapy help jet lag?',
      answer:
        'Most travelers feel significantly better within 1–2 hours of an IV hydration or recovery drip. The rapid rehydration addresses the most immediate cause of jet lag symptoms — dehydration from hours of pressurized cabin air. Energy, cognitive clarity, and mood typically improve within the same session, making IV therapy popular among business travelers and those needing to perform immediately after landing.',
    },
    {
      question: 'When is the best time to get IV therapy for jet lag?',
      answer:
        'The most effective timing is within the first few hours of landing at your destination — ideally before going to sleep or attending any important meetings. Mobile IV services make this easy: book on your phone during the flight or right after landing and have a nurse arrive at your hotel within 45–90 minutes. Some frequent flyers get IV therapy the night before a long-haul flight as a pre-hydration strategy.',
    },
    {
      question: 'How much fluid do you lose on a long-haul flight?',
      answer:
        'Airplane cabin air has humidity levels of just 10–20% — significantly drier than the Sahara Desert (25%). This causes the body to lose approximately 1–1.5 liters of fluid on a 10-hour flight through respiration and skin evaporation alone, contributing directly to headache, fatigue, dry eyes, and cognitive fog. A 1-liter IV saline infusion with electrolytes restores this fluid deficit in 30 minutes.',
    },
    {
      question: 'Does B12 IV help with jet lag?',
      answer:
        'Vitamin B12 supports circadian rhythm regulation through its role in melatonin synthesis and neurological function. Studies suggest B12 supplementation may help reset disrupted sleep-wake cycles. IV B12 achieves blood levels far above what oral supplements can provide, making it a useful add-on to a jet lag recovery drip — particularly for travelers crossing 5+ time zones.',
    },
    {
      question: 'Can I get IV therapy for jet lag at my hotel?',
      answer:
        'Yes — mobile IV therapy services operate in most major cities and can come directly to your hotel room, Airbnb, or office. This is the most convenient option for travelers: book online, receive treatment in your room, and be ready for your next meeting or activity. Look for providers using the search directory above.',
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
    headline: 'IV Therapy for Jet Lag',
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-jet-lag` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Jet Lag
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Long-haul flights cause significant dehydration, circadian rhythm disruption, and nutrient depletion — the perfect recipe for jet lag. IV therapy delivers fast rehydration, B vitamins, and immune support directly to your bloodstream, helping you recover hours faster than oral hydration alone. Mobile services come straight to your hotel.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Flights Cause Jet Lag and Dehydration</h2>
            <p className="text-gray-700 leading-relaxed">
              Jet lag is caused by two overlapping problems: circadian rhythm disruption from crossing time zones, and the physiological stress of air travel itself. Aircraft cabin air is pressurized at the equivalent of 6,000–8,000 feet altitude with humidity levels of just 10–20% — significantly drier than most deserts. A 10-hour flight causes the average passenger to lose 1–1.5 liters of fluid through respiration and skin evaporation without feeling thirsty. This dehydration directly causes the headache, fatigue, brain fog, and irritability associated with long-haul travel. Additionally, air travel stresses the immune system — recirculated cabin air, crowded spaces, and disrupted sleep all increase susceptibility to illness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How IV Therapy Beats Jet Lag</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IV therapy addresses the two main physiological components of jet lag simultaneously. A 1-liter saline infusion with electrolytes restores the fluid deficit from the flight within 30 minutes — far faster than drinking water, which takes 45–60 minutes to absorb and doesn&apos;t replace electrolytes as effectively. B12 supports circadian rhythm resetting through its role in melatonin synthesis. An immunity boost drip with high-dose vitamin C and zinc provides proactive immune protection against the post-travel immune suppression window when travelers are most susceptible to illness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mobile IV services make this particularly practical: book during your flight or immediately after landing, and a licensed nurse arrives at your hotel within 45–90 minutes. Most travelers are ready for their evening plans or next-morning meetings the same day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Jet Lag</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  slug: 'hydration',
                  label: 'IV Hydration',
                  reason: 'Replaces 1–1.5L of flight-induced fluid loss in 30 minutes. Electrolytes restore mineral balance immediately.',
                },
                {
                  slug: 'b12',
                  label: 'Vitamin B12',
                  reason: "Supports circadian rhythm resetting via melatonin pathway. B12 IV achieves 100x the blood level of oral supplements.",
                },
                {
                  slug: 'immunity',
                  label: 'Immunity Boost',
                  reason: 'High-dose vitamin C + zinc combat the immune suppression window after long flights and exposure to recirculated cabin air.',
                },
              ].map((drip) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What to Expect</h2>
            <p className="text-gray-700 leading-relaxed">
              A jet lag recovery IV session takes 30–45 minutes. You&apos;ll receive 1 liter of saline with electrolytes, B12, and optionally vitamin C and zinc. Mobile services can administer the infusion in your hotel room — simply book via the mobile IV company&apos;s app or website, and a nurse arrives with all equipment. The infusion is comfortable and most travelers relax on the hotel bed or couch during the session. Energy and mental clarity typically return within 1–2 hours, and sleep quality that night is often significantly improved.
            </p>
          </section>

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

          <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '/iv-drip-types/hydration', label: 'IV Hydration Guide' },
                { href: '/iv-drip-types/b12', label: 'Vitamin B12 IV Guide' },
                { href: '/iv-drip-types/immunity', label: 'Immunity Boost IV Guide' },
                { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
                { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
                { href: '/iv-therapy-near-me', label: 'IV Therapy Near Me' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-sky-600 hover:text-sky-700 hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

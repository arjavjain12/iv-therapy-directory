import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Dehydration — Fastest Rehydration Treatment (2026)',
  description:
    'IV therapy for dehydration delivers fluids directly to your bloodstream — 3x faster than drinking water. Find dehydration IV drips near you, compare pricing, and book same-day.',
  alternates: { canonical: '/iv-therapy-for-dehydration' },
  openGraph: {
    title: 'IV Therapy for Dehydration — Fastest Rehydration Treatment (2026)',
    description:
      'IV fluids for dehydration absorb instantly — no waiting for your gut. Find clinics and mobile IV services near you.',
    url: `${BASE_URL}/iv-therapy-for-dehydration`,
  },
}

const faqs = [
  {
    question: 'Is IV therapy good for dehydration?',
    answer:
      'IV therapy is the fastest and most effective treatment for dehydration. IV fluids bypass the digestive system and enter your bloodstream directly, achieving full absorption in minutes. Drinking water takes 45–120 minutes to begin absorbing through the gut, and significantly less is absorbed when you\'re already dehydrated or nauseous. A 1-liter IV saline bag delivers the hydration equivalent of drinking 2–3 liters of water in 30 minutes.',
  },
  {
    question: 'How much does IV therapy for dehydration cost?',
    answer:
      'Basic IV hydration therapy typically costs $99–$175 for a 1-liter saline or Lactated Ringer\'s bag. More comprehensive dehydration drips with electrolytes, B vitamins, and anti-nausea medication cost $125–$250. Mobile IV services that come to your home or hotel add $20–$50 for the convenience. Most clinics offer package pricing for multiple sessions.',
  },
  {
    question: 'How long does IV therapy for dehydration take?',
    answer:
      'A standard 1-liter IV hydration session takes 30–45 minutes. You\'ll feel results beginning within 15–20 minutes as fluids enter your bloodstream. For severe dehydration, providers may administer 2 liters over 60–90 minutes. There\'s no downtime — most people return to normal activity immediately after.',
  },
  {
    question: 'What is in an IV bag for dehydration?',
    answer:
      'The most common IV fluids for dehydration are Normal Saline (0.9% sodium chloride) and Lactated Ringer\'s solution. Both closely match the body\'s natural fluid composition. Most dehydration drips also include electrolytes (potassium, magnesium), and many add B vitamins, vitamin C, or anti-nausea medication (Zofran) as optional add-ons.',
  },
  {
    question: 'Can I get IV fluids for dehydration at home?',
    answer:
      'Yes. Mobile IV therapy services send a licensed nurse to your home, hotel, or office. This is particularly useful for dehydration caused by illness, hangover, or heat exhaustion when you feel too unwell to travel. Most mobile services in major cities have response times of 45 minutes to 2 hours.',
  },
  {
    question: 'When should I go to the ER vs. an IV bar for dehydration?',
    answer:
      'IV bars and mobile IV services are appropriate for mild-to-moderate dehydration from hangover, exercise, heat, travel, or illness. Go to the ER immediately if you experience: severe dizziness or fainting, confusion or altered mental status, no urination for 8+ hours, rapid heart rate over 120 bpm, or dehydration in an infant or elderly person. IV therapy clinics are not equipped to treat severe or medical-emergency dehydration.',
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
  headline: 'IV Therapy for Dehydration — Fastest Rehydration Treatment',
  description: metadata.description as string,
  datePublished: '2026-01-01',
  dateModified: '2026-02-26',
  author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-dehydration` },
}

const CAUSES = [
  { label: 'Hangover', icon: '🍺', desc: 'Alcohol is a diuretic — a night of drinking can cause loss of 1–2 liters of fluid. IV hydration restores what was lost overnight.' },
  { label: 'Exercise & Sports', icon: '🏃', desc: 'Athletes lose 1–2.5 liters per hour during intense training. IV fluids replenish faster than sports drinks allow.' },
  { label: 'Illness & Fever', icon: '🤒', desc: 'Vomiting, diarrhea, and fever dramatically increase fluid loss. IV hydration works even when you can\'t keep water down.' },
  { label: 'Heat Exhaustion', icon: '☀️', desc: 'Heat exposure causes rapid fluid and electrolyte loss. IV therapy treats heat exhaustion before it becomes heat stroke.' },
  { label: 'Travel & Jet Lag', icon: '✈️', desc: 'Airplane cabin air is extremely dry (10–20% humidity). Long-haul flights can cause mild dehydration that disrupts your first days at a destination.' },
  { label: 'Morning Sickness', icon: '🤰', desc: 'Severe nausea during pregnancy (hyperemesis gravidarum) can cause dangerous dehydration. IV fluids restore electrolytes safely.' },
]

export default function IVTherapyForDehydrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Dehydration
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            IV fluids for dehydration deliver saline, electrolytes, and vitamins directly into your bloodstream — achieving full hydration in 30 minutes. Drinking water takes 45–120 minutes to absorb, and far less is absorbed when you&apos;re already dehydrated or nauseous. IV rehydration is used by athletes, medical professionals, and anyone who needs to recover fast.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Recovery time', value: '30–45 min' },
            { label: 'Typical price', value: '$99–$175' },
            { label: 'vs. oral hydration', value: '3× faster' },
            { label: 'Mobile available', value: 'Yes' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-extrabold text-sky-600">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Why IV beats drinking water */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why IV Fluids Work Faster Than Drinking Water</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you drink water, it must pass through your stomach and small intestine before it can be absorbed into the bloodstream — a process that takes 45 minutes to 2 hours under normal circumstances. When you&apos;re dehydrated, ill, or nauseous, gut motility slows further, and the fluid may not absorb efficiently at all.
          </p>
          <p className="text-gray-700 leading-relaxed">
            IV fluids go directly into a vein, bypassing the digestive system entirely. A 1-liter bag of Normal Saline delivers 1,000ml of fluid that is 100% bioavailable — directly into your circulation — within 30–45 minutes. There is no more efficient way to rehydrate the human body outside of a hospital setting.
          </p>
        </section>

        {/* Common causes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Common Causes of Dehydration IV Treats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAUSES.map((c) => (
              <div key={c.label} className="rounded-xl border border-gray-200 bg-white p-4 flex gap-3">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900">{c.label}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drip options */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Dehydration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                slug: 'hydration',
                label: 'IV Hydration',
                price: '$99–$175',
                reason: 'The simplest and most affordable option. 1 liter of Normal Saline or Lactated Ringer\'s — pure, fast rehydration.',
              },
              {
                slug: 'myers-cocktail',
                label: "Myers' Cocktail",
                price: '$149–$275',
                reason: 'Adds B vitamins, magnesium, and vitamin C to hydration. Best for dehydration caused by illness, stress, or poor nutrition.',
              },
              {
                slug: 'hangover',
                label: 'Hangover Recovery',
                price: '$125–$250',
                reason: 'Purpose-built for alcohol-induced dehydration. Includes anti-nausea medication and anti-inflammatory add-ons.',
              },
            ].map((drip) => (
              <Link
                key={drip.slug}
                href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-sky-200 bg-sky-50 p-5 hover:border-sky-400 transition"
              >
                <p className="font-bold text-sky-700 text-lg">{drip.label}</p>
                <p className="text-sm font-semibold text-gray-500 mb-2">{drip.price}</p>
                <p className="text-sm text-gray-600">{drip.reason}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Oral vs IV */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IV Fluids vs. Oral Hydration — Which Is Better?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Factor</th>
                  <th className="text-left p-4 font-semibold text-sky-700">IV Hydration</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Drinking Water / Sports Drinks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Absorption speed', '100% immediate', '45–120 min via gut'],
                  ['Bioavailability', '100%', '50–80% (varies)'],
                  ['Works when nauseous', 'Yes', 'Often not'],
                  ['Electrolyte precision', 'Exact medical dosing', 'Approximate'],
                  ['Add-ons possible', 'Vitamins, anti-nausea meds', 'No'],
                  ['Cost', '$99–$175', 'Near $0'],
                  ['Convenience', 'Clinic or mobile to you', 'Anytime, anywhere'],
                ].map(([factor, iv, oral]) => (
                  <tr key={factor} className="even:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">{factor}</td>
                    <td className="p-4 text-sky-700 font-medium">{iv}</td>
                    <td className="p-4 text-gray-600">{oral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Find near me CTA */}
        <section className="rounded-xl bg-sky-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find IV Hydration Near You</h2>
          <p className="text-sky-100 mb-6">Search clinics and mobile IV services in your city. Same-day appointments available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/iv-therapy-near-me" className="rounded-xl bg-white px-8 py-3 font-bold text-sky-700 hover:bg-sky-50 transition">
              Find IV Near Me
            </Link>
            <Link href="/mobile-iv-therapy" className="rounded-xl border border-white/40 px-8 py-3 font-bold text-white hover:bg-sky-700 transition">
              Mobile IV Options
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
          <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/iv-drip-types/hydration', label: 'IV Hydration Drip Guide' },
              { href: '/iv-hydration-vs-oral-hydration', label: 'IV vs. Oral Hydration' },
              { href: '/iv-therapy-for-hangover', label: 'IV Therapy for Hangover' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
              { href: '/iv-therapy-near-me', label: 'IV Therapy Near Me' },
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

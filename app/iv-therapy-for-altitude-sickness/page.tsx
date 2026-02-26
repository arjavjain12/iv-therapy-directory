import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Altitude Sickness | AMS Treatment & Prevention',
  description:
    'IV therapy for altitude sickness delivers fast rehydration and antioxidants to combat AMS symptoms. Learn which drips help at altitude, when to use them, and find providers in mountain cities.',
  alternates: { canonical: '/iv-therapy-for-altitude-sickness' },
  openGraph: {
    title: 'IV Therapy for Altitude Sickness | AMS Treatment & Prevention',
    description:
      'IV therapy for altitude sickness delivers fast rehydration and antioxidants to combat AMS symptoms. Find providers in mountain cities.',
    url: `${BASE_URL}/iv-therapy-for-altitude-sickness`,
  },
}

export default function IVTherapyForAltitudeSicknessPage() {
  const faqs = [
    {
      question: 'Does IV therapy help altitude sickness?',
      answer:
        'Yes — IV therapy addresses the two primary mechanisms of acute mountain sickness (AMS): dehydration and oxidative stress from hypoxia. At high altitude, gut absorption slows significantly due to reduced blood flow to the digestive system, making oral hydration less effective. IV fluids bypass this limitation entirely, rapidly restoring blood volume and electrolyte balance. High-dose IV vitamin C provides antioxidant protection against altitude-induced free radical production.',
    },
    {
      question: 'What altitude causes sickness, and who is at risk?',
      answer:
        'Acute mountain sickness (AMS) commonly begins at altitudes above 8,000 feet (2,400m) and affects approximately 25% of people traveling to Denver (5,280 ft), 50% at 11,500 feet, and up to 75% above 14,000 feet. There is no reliable predictor of who will develop AMS — fitness level does not protect you. The best prevention is slow ascent, adequate hydration, and acclimatization time.',
    },
    {
      question: 'When should I get IV therapy for altitude sickness?',
      answer:
        'For treatment: as soon as symptoms appear — headache, nausea, fatigue, dizziness. The sooner you receive IV rehydration, the faster symptoms resolve. For prevention: some travelers get a proactive hydration IV before ascending to high altitude (e.g., before skiing at 12,000 feet or hiking to altitude). IV therapy does not cure altitude sickness caused by severe hypoxia — descent is always required for HACE (high-altitude cerebral edema) or HAPE (pulmonary edema).',
    },
    {
      question: 'Is IV therapy available in mountain resort towns?',
      answer:
        'Yes — IV therapy is well-established in high-altitude resort towns including Denver, Colorado Springs, Aspen, Breckenridge, Jackson Hole, Park City, and Telluride. Mobile IV services are popular in ski towns because they come directly to your hotel or vacation rental. Many ski resort towns have IV clinics specifically catering to altitude-related symptoms.',
    },
    {
      question: 'What IV drip is best for altitude sickness?',
      answer:
        'A combination of IV hydration (1L saline with electrolytes) and IV vitamin C (5,000–10,000mg) is the most commonly used protocol for AMS. The saline rapidly restores blood volume affected by altitude-related diuresis, while vitamin C acts as a potent antioxidant against the free radical production triggered by high-altitude hypoxia. Anti-nausea medication (Zofran) can be added for nausea symptoms.',
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
    headline: 'IV Therapy for Altitude Sickness',
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-altitude-sickness` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Altitude Sickness
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Altitude sickness (acute mountain sickness/AMS) affects millions of travelers visiting high-altitude destinations each year. IV therapy provides rapid rehydration and antioxidant support to address the dehydration and oxidative stress that drive AMS symptoms — and at altitude, IV delivery is particularly advantageous because gut absorption slows significantly due to reduced blood flow.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Altitude Makes You Sick</h2>
            <p className="text-gray-700 leading-relaxed">
              At high altitude, lower atmospheric oxygen partial pressure reduces the oxygen available to tissues (hypoxia). The body responds with increased respiration (which causes more fluid loss), increased heart rate, and a diuretic hormone response that causes the kidneys to excrete more fluid. The combination of increased respiratory fluid loss, diuresis, and reduced oxygen delivery to tissues causes the classic AMS symptoms: headache, nausea, fatigue, dizziness, and sleep disturbance. Additionally, hypoxia triggers significant free radical production as cells struggle with reduced oxygen availability — contributing to the inflammatory component of AMS. At altitude, oral rehydration is also less effective because blood flow is preferentially directed to vital organs, reducing gut absorption capacity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How IV Therapy Addresses Altitude Sickness</h2>
            <p className="text-gray-700 leading-relaxed">
              IV hydration bypasses the gut entirely, directly restoring blood volume and electrolytes without relying on intestinal absorption. A 1-liter saline infusion with electrolytes can restore the fluid deficit of altitude in 30 minutes — far faster than the 2–3 hours it takes for equivalent oral rehydration to be absorbed and distributed. High-dose IV vitamin C (5,000–10,000mg) provides powerful antioxidant protection against altitude-induced oxidative stress. IV anti-nausea medication (Zofran) can be added to address nausea, allowing patients to rest and recover more comfortably. Mobile IV services in mountain resort towns can reach your hotel or ski lodge within 45–90 minutes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Altitude Sickness</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  slug: 'hydration',
                  label: 'IV Hydration',
                  reason: 'Directly restores blood volume bypassing impaired gut absorption at altitude. 1L saline + electrolytes in 30 minutes.',
                },
                {
                  slug: 'vitamin-c',
                  label: 'Vitamin C',
                  reason: 'High-dose antioxidant protection against altitude-induced free radical production and hypoxic oxidative stress.',
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
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              <strong>Important:</strong> IV therapy treats mild-to-moderate AMS symptoms (headache, nausea, fatigue). If you experience severe symptoms — extreme disorientation, inability to walk, persistent vomiting, or shortness of breath at rest — descend immediately and seek emergency care. These may indicate HACE or HAPE, which are medical emergencies.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What to Expect</h2>
            <p className="text-gray-700 leading-relaxed">
              A standard altitude sickness IV session takes 30–45 minutes. For mountain resort towns, mobile IV services typically arrive within 45–90 minutes of booking. The nurse will assess your symptoms and administer the infusion at a comfortable rate. Many patients feel headache relief within 20–30 minutes of starting the infusion. Most feel well enough to resume light activity by the end of the session, though rest is recommended. IV therapy is not a substitute for acclimatization — allow extra time to acclimate if planning high-altitude activities.
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
                { href: '/iv-drip-types/vitamin-c', label: 'Vitamin C IV Guide' },
                { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
                { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
                { href: '/is-iv-therapy-safe', label: 'Is IV Therapy Safe?' },
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

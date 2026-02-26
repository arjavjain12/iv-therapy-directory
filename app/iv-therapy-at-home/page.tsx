import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Clock, CheckCircle, MapPin } from 'lucide-react'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy at Home — In-Home IV Drips & Mobile IV Services (2026)',
  description:
    'Get IV therapy at home — a licensed nurse comes to you. Compare at-home IV options, costs, and same-day availability in your city. Hangover, hydration, NAD+, Myers\' Cocktail delivered to your door.',
  alternates: { canonical: '/iv-therapy-at-home' },
  openGraph: {
    title: 'IV Therapy at Home — In-Home IV Drips (2026)',
    description: 'A licensed nurse brings IV therapy to your home, hotel, or office. Same-day available in most major cities.',
    url: `${BASE_URL}/iv-therapy-at-home`,
  },
}

const faqs = [
  {
    question: 'How does IV therapy at home work?',
    answer:
      'You book an appointment online or by phone with a mobile IV company. A licensed registered nurse (RN) arrives at your location — home, hotel, office, or event venue — with all equipment: IV bags, needles, tubing, gloves, and any medications. The nurse performs a brief health intake, places the IV, and administers the drip. The entire process takes 45–90 minutes from start to finish. You relax while the IV runs.',
  },
  {
    question: 'How much does home IV therapy cost?',
    answer:
      'At-home IV therapy typically costs $149–$350 per session, including the nurse travel fee. Basic hydration drips start around $149–$199. Myers\' Cocktail at home runs $175–$299. NAD+ therapy at home is $350–$600+ due to the longer session time. Most mobile IV companies charge a flat travel fee of $25–$75, often waived for larger orders or memberships. NYC and LA tend to have the highest prices; smaller markets are often cheaper.',
  },
  {
    question: 'Is IV therapy at home safe?',
    answer:
      'Yes, when administered by licensed registered nurses. Reputable mobile IV companies employ RNs and operate under a licensed physician medical director who oversees protocols. All solutions are pharmaceutical-grade, prepared in sterile conditions. The nurse performs health screening before treatment and monitors you throughout. Risks are minimal and the same as any IV placement — minor bruising or discomfort at the injection site.',
  },
  {
    question: 'How quickly can I get IV therapy at home?',
    answer:
      'Most mobile IV services in major cities offer same-day appointments, with response times of 60–120 minutes. Some services in dense urban areas (NYC, LA, Miami, Las Vegas) can arrive within 45 minutes. For the fastest service, book before you need it — weekend mornings (peak hangover time) fill up fast. Many services also offer scheduled next-day appointments.',
  },
  {
    question: 'What is the difference between at-home IV therapy and mobile IV therapy?',
    answer:
      'They\'re the same thing. "Mobile IV therapy," "at-home IV therapy," and "concierge IV therapy" all refer to a service where a licensed nurse travels to your location to administer IV treatment. Some services operate out of vans or cars; others simply dispatch nurses. The term "mobile IV" is more common in the industry, but the service is identical to what\'s called "at-home IV."',
  },
  {
    question: 'Can I get IV therapy at home for a hangover?',
    answer:
      'Yes — hangover recovery is the #1 reason people book at-home IV therapy. A nurse brings a Hangover Recovery drip or Myers\' Cocktail directly to your bed or couch. Many mobile IV companies operate early mornings on weekends specifically for this. You can often get a nurse to arrive within 60–90 minutes of booking.',
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'At-Home IV Therapy',
  description: 'Mobile IV therapy service where a licensed nurse administers IV drips at your home, hotel, or office.',
  provider: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Mobile IV Therapy',
}

const STEPS = [
  { step: '1', title: 'Book online or call', desc: 'Choose your drip, select a time, and provide your address. Most services confirm within minutes.' },
  { step: '2', title: 'Nurse arrives', desc: 'A licensed RN arrives at your door with all equipment. Typical response time: 60–120 minutes.' },
  { step: '3', title: 'Quick health intake', desc: 'Your nurse reviews your health history and any current medications before placing the IV.' },
  { step: '4', title: 'Relax while you drip', desc: 'The IV runs for 30–90 minutes. Watch TV, work, or rest — whatever you need.' },
  { step: '5', title: 'Nurse cleans up and leaves', desc: 'Everything is removed and disposed of properly. You stay comfortable the whole time.' },
]

const DRIPS = [
  { slug: 'hydration', label: 'IV Hydration', price: '$149–$199', best: 'General dehydration, travel, heat exposure' },
  { slug: 'hangover', label: 'Hangover Recovery', price: '$175–$275', best: 'Post-drinking recovery at home in bed' },
  { slug: 'myers-cocktail', label: "Myers' Cocktail", price: '$175–$299', best: 'Fatigue, illness, general wellness' },
  { slug: 'nad-plus', label: 'NAD+', price: '$350–$600', best: 'Anti-aging, energy, cognitive performance' },
  { slug: 'immunity', label: 'Immunity Boost', price: '$175–$275', best: 'Fighting illness or immune support' },
  { slug: 'beauty', label: 'Beauty (Glutathione)', price: '$175–$275', best: 'Skin brightening, antioxidant therapy' },
]

export default function IVTherapyAtHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy at Home
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A licensed nurse brings your IV drip to you — no clinic, no waiting room, no driving. At-home IV therapy is available in most major US cities with same-day appointments and response times as fast as 45 minutes. Book online, stay on your couch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iv-therapy-near-me" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700 transition">
              <MapPin className="h-5 w-5" /> Find Mobile IV Near Me
            </Link>
            <Link href="/mobile-iv-therapy" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">
              Learn About Mobile IV
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How At-Home IV Therapy Works</h2>
          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why at home */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose IV Therapy at Home?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Home className="h-5 w-5 text-sky-600" />, title: 'Maximum comfort', desc: 'Receive treatment in your own bed or couch. No waiting room, no driving while dehydrated or hungover.' },
              { icon: <Clock className="h-5 w-5 text-sky-600" />, title: 'Same-day availability', desc: 'Most mobile IV services confirm within minutes and arrive within 60–120 minutes of booking.' },
              { icon: <CheckCircle className="h-5 w-5 text-sky-600" />, title: 'Licensed RN care', desc: 'All treatments administered by registered nurses operating under physician supervision. Same quality as a clinic.' },
              { icon: <MapPin className="h-5 w-5 text-sky-600" />, title: 'Any location', desc: 'Home, hotel room, office, Airbnb, event venue — anywhere in the service area.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5 flex gap-3">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Available drips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IV Drips Available at Home</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DRIPS.map((drip) => (
              <Link
                key={drip.slug}
                href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-4 hover:border-sky-400 hover:shadow-sm transition"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-gray-900">{drip.label}</p>
                  <p className="text-sm font-semibold text-sky-600">{drip.price}</p>
                </div>
                <p className="text-sm text-gray-500">Best for: {drip.best}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Cost breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At-Home IV Therapy Cost Breakdown</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At-home IV therapy costs more than visiting a clinic in person due to the travel and nurse dispatch fee. Expect to pay $25–$75 more than the clinic price for the at-home convenience. Here&apos;s a typical cost breakdown:
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Drip Type</th>
                  <th className="text-left p-4 font-semibold text-gray-700">At-Home Price</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Clinic Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Basic Hydration', '$149–$199', '$99–$175'],
                  ["Myers' Cocktail", '$199–$299', '$149–$275'],
                  ['Hangover Recovery', '$199–$275', '$125–$250'],
                  ['Immunity Boost', '$199–$275', '$149–$250'],
                  ['NAD+ (90 min)', '$400–$600', '$250–$500'],
                ].map(([drip, home, clinic]) => (
                  <tr key={drip} className="even:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">{drip}</td>
                    <td className="p-4 text-sky-700 font-semibold">{home}</td>
                    <td className="p-4 text-gray-600">{clinic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy Guide' },
              { href: '/mobile-iv-therapy-vs-iv-clinic', label: 'Mobile IV vs. IV Clinic' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/iv-therapy-near-me', label: 'Find IV Therapy Near Me' },
              { href: '/iv-drip-types/hangover', label: 'Hangover Recovery Drip' },
              { href: '/iv-therapy-for-dehydration', label: 'IV Therapy for Dehydration' },
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import ReviewedBy from '@/components/ReviewedBy'
import MedicalDisclaimer from '@/components/MedicalDisclaimer'
import KeyTakeaways from '@/components/KeyTakeaways'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Athletes — Performance, Recovery & Competition Prep (2026)',
  description:
    'IV therapy for athletes delivers rapid rehydration, electrolytes, and amino acids to accelerate recovery, reduce DOMS, and support competition prep. Cost $149–$299. WADA rules explained.',
  alternates: { canonical: '/iv-therapy-for-athletes' },
  openGraph: {
    title: 'IV Therapy for Athletes — Performance, Recovery & Competition Prep (2026)',
    description:
      'Athletic recovery IV drips: rapid rehydration, electrolytes, amino acids, and B vitamins. Cost $149–$299 per session.',
    url: `${BASE_URL}/iv-therapy-for-athletes`,
  },
}

const faqs = [
  {
    question: 'How does IV therapy help athletes recover faster?',
    answer:
      'IV therapy accelerates athletic recovery through three primary mechanisms: (1) Rapid rehydration — athletes can lose 1–3 liters of fluid per hour during intense exercise; IV delivers 1 liter of electrolyte-balanced saline directly to the bloodstream in 30–45 minutes, far faster than oral rehydration. (2) Nutrient replenishment — exercise depletes B vitamins, magnesium, zinc, and amino acids needed for muscle repair; IV delivery achieves 100% bioavailability. (3) Inflammation reduction — high-dose vitamin C and glutathione at IV concentrations reduce exercise-induced oxidative stress and DOMS (delayed onset muscle soreness). Many elite athletes report significantly faster return to training after IV recovery sessions.',
  },
  {
    question: 'Is IV therapy allowed in competitive sports?',
    answer:
      'This depends on your sport and governing body. WADA (World Anti-Doping Agency) prohibits IV infusions and/or injections of more than 100mL per 12-hour period unless received in the course of hospital treatment, surgical procedures, or clinical diagnostic investigations. This means competitive athletes subject to WADA rules need a Therapeutic Use Exemption (TUE) for standard IV therapy volumes (typically 500–1000mL). Non-WADA-governed recreational athletes, amateur competitors, and most fitness enthusiasts have no such restriction. Always verify your sport\'s specific anti-doping rules before receiving IV therapy.',
  },
  {
    question: 'What is in an Athletic Performance IV drip?',
    answer:
      'A standard Athletic Performance or Recovery IV drip typically contains: 1 liter of lactated Ringer\'s or normal saline (electrolyte rehydration), B-complex vitamins (energy metabolism and muscle function), vitamin B12 (neurological function and endurance), magnesium (muscle relaxation, cramp prevention), amino acids such as taurine, L-carnitine, and glutamine (muscle repair and recovery), vitamin C (antioxidant and collagen synthesis for connective tissue), and zinc (immune support and testosterone production). Some providers add glutathione for enhanced antioxidant protection.',
  },
  {
    question: 'When should athletes get IV therapy — before or after competition?',
    answer:
      'Both timing strategies serve different purposes. Pre-competition (24–48 hours before): Hydration loading and nutrient optimization ensures you start fully fueled. Popular with marathon runners, triathletes, and fighters making weight. Post-competition (within 2–6 hours after): Rapid recovery, rehydration, and inflammation management. The most common use case — accelerates the recovery window from 48–72 hours to 24–36 hours for many athletes. During training blocks: Weekly IV sessions during high-volume training phases maintain hydration and nutrient status when training load exceeds oral replenishment capacity.',
  },
  {
    question: 'How much does athletic IV therapy cost?',
    answer:
      'Athletic Performance and Recovery IV drips typically cost $149–$299 per session. Basic hydration + electrolyte IVs start at $149. Full Athletic Performance drips with amino acids, B vitamins, magnesium, and vitamin C run $199–$299. NAD+ add-ons for endurance support cost an additional $150–$300. Many providers offer athlete packages (4–8 sessions) at 15–20% discounts. Mobile IV services are popular with athletes and teams — they can administer drips at gyms, competition venues, or hotels for an additional $25–$75 travel fee.',
  },
]

const drips = [
  {
    slug: 'athletic',
    label: 'Athletic Performance',
    reason: 'The go-to drip for athletes — amino acids, B vitamins, magnesium, and electrolytes for recovery and performance.',
  },
  {
    slug: 'hydration',
    label: 'IV Hydration',
    reason: 'Rapid rehydration with 1L electrolyte-balanced saline — restores fluid balance faster than any oral method.',
  },
  {
    slug: 'myers-cocktail',
    label: "Myers' Cocktail",
    reason: 'Broad-spectrum micronutrient support: magnesium for cramps, B vitamins for energy, vitamin C for antioxidant protection.',
  },
]

export default function IVTherapyForAthletesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy for Athletes — Performance, Recovery & Competition Prep',
    description: metadata.description as string,
    datePublished: '2026-03-01',
    dateModified: '2026-03-26',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-athletes` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy', href: '/iv-therapy' },
            { label: 'IV Therapy for Athletes' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Athletes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From marathon runners to CrossFit competitors, athletes are using IV therapy to accelerate recovery, maintain hydration during high-volume training, and optimize performance on competition day. Here&apos;s what the science says, which drips work best, and what competitive athletes need to know about anti-doping rules.
          </p>
          <ReviewedBy date="March 2026" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <KeyTakeaways items={[
          'IV rehydration restores fluid balance in 30–45 min — far faster than oral rehydration',
          'Amino acids, magnesium, and B vitamins reduce DOMS and accelerate muscle recovery',
          'Popular with marathon runners, CrossFit athletes, MMA fighters, and team sports',
          'WADA prohibits IV volumes >100mL per 12 hours without a TUE — check your sport\'s rules',
          'Athletic Performance drips cost $149–$299 per session, with team/package discounts available',
        ]} />

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Athletes Are Turning to IV Therapy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            High-intensity training creates a recovery demand that oral hydration and supplementation often cannot keep up with. Athletes lose 1–3 liters of fluid per hour during intense exercise, along with critical electrolytes (sodium, potassium, magnesium). Muscle damage from training depletes amino acid pools. Oxidative stress from exercise produces free radicals that contribute to delayed onset muscle soreness (DOMS) and prolonged recovery times.
          </p>
          <p className="text-gray-600 leading-relaxed">
            IV therapy addresses all of these simultaneously. A single Athletic Performance drip delivers rapid rehydration, electrolyte replacement, amino acids for muscle repair, B vitamins for energy metabolism, magnesium for muscle relaxation, and antioxidants to neutralize exercise-induced oxidative stress. The 100% bioavailability of IV delivery means athletes receive the full therapeutic dose — unlike oral supplements where absorption varies from 10–60% depending on the nutrient and gut conditions during/after exercise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best IV Drips for Athletes</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Use Cases by Sport</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sport: 'Marathon / Triathlon', use: 'Pre-race hydration loading 24–48 hours before event. Post-race rapid rehydration and electrolyte replenishment to offset massive fluid loss.' },
              { sport: 'CrossFit / HIIT', use: 'Post-WOD recovery sessions to reduce DOMS and accelerate muscle repair between high-frequency training days.' },
              { sport: 'MMA / Boxing', use: 'Rehydration after weight cutting. Recovery drips between training camps. Pre-fight nutrient optimization.' },
              { sport: 'Team Sports (Football, Basketball, Soccer)', use: 'Mid-season recovery maintenance. Post-game rehydration. Some teams offer IV stations in locker rooms during heavy schedules.' },
            ].map((item) => (
              <div key={item.sport} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold text-gray-900 mb-1">{item.sport}</p>
                <p className="text-sm text-gray-600">{item.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WADA Rules &amp; Anti-Doping Compliance</h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-4">
            <p className="text-sm text-amber-800">
              <strong>Important for competitive athletes:</strong> WADA (World Anti-Doping Agency) prohibits IV infusions and/or injections of more than 100mL per 12-hour period, unless received in the course of hospital treatment, surgical procedures, or clinical diagnostic investigations. Athletes subject to WADA testing who want IV therapy must obtain a Therapeutic Use Exemption (TUE).
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This rule applies to athletes subject to USADA, WADA, NCAA, and similar anti-doping programs. Recreational athletes, amateur competitors, and fitness enthusiasts not subject to anti-doping testing have no such restriction. If you compete in a sanctioned sport, verify your governing body&apos;s specific rules before receiving IV therapy. Note that the substances in athletic IV drips (vitamins, minerals, amino acids, saline) are not banned — only the IV method of delivery above 100mL is restricted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Athletic IV Therapy</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">IV Drip</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Price Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'IV Hydration + Electrolytes', price: '$149–$199', use: 'Basic rehydration, post-workout' },
                  { name: 'Athletic Performance Drip', price: '$199–$299', use: 'Full recovery: amino acids + vitamins' },
                  { name: "Myers' Cocktail", price: '$175–$275', use: 'General micronutrient support' },
                  { name: 'NAD+ Add-On', price: '+$150–$300', use: 'Endurance and cellular energy' },
                  { name: 'Mobile IV (at venue/hotel)', price: '+$25–$75 travel fee', use: 'On-location convenience' },
                ].map((row) => (
                  <tr key={row.name} className="bg-white">
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.use}</td>
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
              { href: '/iv-drip-types/athletic', label: 'Athletic Performance IV Guide' },
              { href: '/iv-drip-types/hydration', label: 'IV Hydration Guide' },
              { href: '/iv-therapy-near-me', label: 'Find IV Therapy Near You' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
              { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
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
            Search our directory for IV therapy clinics and mobile providers that specialize in athletic recovery and performance drips.
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

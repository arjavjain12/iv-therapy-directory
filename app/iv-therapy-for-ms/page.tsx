import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Multiple Sclerosis (MS) — Symptom Support & Wellness (2026)',
  description:
    'IV therapy for MS can help manage fatigue, inflammation, and nutrient deficiencies common in multiple sclerosis. Learn which IV drips are used, costs, and how to find providers near you.',
  alternates: { canonical: '/iv-therapy-for-ms' },
  openGraph: {
    title: 'IV Therapy for Multiple Sclerosis (MS) — Symptom Support & Wellness (2026)',
    description: 'IV drips used in MS management: high-dose vitamin C, glutathione, NAD+, and Myers\' Cocktail. Find local providers.',
    url: `${BASE_URL}/iv-therapy-for-ms`,
  },
}

const faqs = [
  {
    question: 'Can IV therapy help with multiple sclerosis?',
    answer:
      'IV therapy is not a treatment or cure for MS, but it is used as a supportive wellness therapy to address common secondary issues in MS patients — including chronic fatigue, vitamin D deficiency, B12 deficiency, oxidative stress, and inflammation. High-dose vitamin C, glutathione, NAD+, and Myers\' Cocktail IVs are the most commonly used by MS patients seeking symptom support. Many patients report improved energy levels and reduced fatigue following regular IV infusion protocols, though individual results vary and IV therapy should complement, not replace, your neurologist\'s treatment plan.',
  },
  {
    question: 'Which IV drips are most commonly used by MS patients?',
    answer:
      'The most commonly used IV therapies in MS wellness protocols include: (1) High-Dose Vitamin C — powerful antioxidant support to reduce oxidative stress; (2) Glutathione — the master antioxidant, often used for neuroprotection and detoxification; (3) NAD+ — cellular energy support that may support neurological function; (4) Myers\' Cocktail — broad-spectrum micronutrient replenishment including B vitamins, magnesium, and vitamin C; (5) Vitamin D IV — highly deficient in MS patients with strong evidence for immune modulation; and (6) Alpha-Lipoic Acid — studied for its antioxidant and neuroprotective effects in MS.',
  },
  {
    question: 'Is IV therapy safe for people with MS?',
    answer:
      'IV therapy is generally considered safe for most MS patients when administered by licensed medical professionals. However, it is essential to consult your neurologist before starting any IV therapy protocol, as some ingredients may interact with MS medications (particularly immunomodulating drugs). Patients on disease-modifying therapies (DMTs) like interferons, natalizumab, or ocrelizumab should specifically discuss IV therapy with their neurologist. High-dose vitamin C requires G6PD screening. Always disclose your complete medication list to your IV therapy provider.',
  },
  {
    question: 'How much does IV therapy for MS cost?',
    answer:
      'IV therapy costs for MS-supportive protocols typically range from $150 to $600 per session depending on the drip type. Basic Myers\' Cocktail or vitamin infusions run $150–$300. NAD+ infusions (commonly 2–4 hours) cost $300–$600. High-dose vitamin C runs $200–$500. Many MS patients receive IV therapy on a regular schedule (weekly or monthly) as part of a wellness protocol, with package pricing often available to reduce per-session cost.',
  },
  {
    question: 'Can IV therapy help MS fatigue specifically?',
    answer:
      'MS-related fatigue (Uhthoff\'s phenomenon and central fatigue) is one of the most debilitating and common MS symptoms, affecting 80% of patients. IV therapy most directly targeting fatigue includes: NAD+ (supports cellular ATP energy production), B12 and B-Complex (essential for neurological function and energy metabolism), Magnesium (muscle and nerve function), and Myers\' Cocktail (comprehensive nutrient support). Many MS patients report meaningful improvements in fatigue levels following IV therapy sessions, though this is not a permanent fix and sessions need to be repeated.',
  },
  {
    question: 'How do I find IV therapy providers experienced with MS patients?',
    answer:
      'Look for IV therapy providers with a functional medicine, integrative medicine, or naturopathic orientation — these practitioners are most familiar with IV protocols for neurological conditions. Ask specifically whether they have experience working with MS patients and whether they can coordinate with your neurologist. You can use our directory to find IV therapy providers near you and contact them directly to ask about their experience with MS-related protocols.',
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

const drips = [
  { name: 'High-Dose Vitamin C', slug: 'high-dose-vitamin-c', desc: 'Potent antioxidant support, studied in neuroinflammation' },
  { name: 'Glutathione', slug: 'glutathione', desc: 'Master antioxidant, neuroprotective at IV doses' },
  { name: 'NAD+', slug: 'nad-plus', desc: 'Cellular energy and neurological function support' },
  { name: "Myers' Cocktail", slug: 'myers-cocktail', desc: 'Broad-spectrum B vitamins, magnesium, and vitamin C' },
  { name: 'Vitamin D', slug: 'vitamin-d', desc: 'Immune modulation — highly deficient in most MS patients' },
  { name: 'Vitamin B12', slug: 'b12', desc: 'Myelin sheath support and neurological function' },
]

export default function IVTherapyForMSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <Link href="/iv-therapy" className="hover:text-sky-600">IV Therapy</Link>
            <span>/</span>
            <span>IV Therapy for MS</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Multiple Sclerosis (MS)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            IV therapy is not a cure for MS, but it is increasingly used as a supportive protocol to address the fatigue, inflammation, oxidative stress, and nutrient deficiencies that commonly accompany the disease. Here&apos;s what the evidence shows and which drips MS patients use most.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Disclaimer */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> IV therapy for MS is a supportive wellness intervention — it is not a treatment for MS itself and does not modify the disease course. Always consult your neurologist before starting any IV therapy protocol, especially if you are on disease-modifying therapies.
          </p>
        </div>

        {/* How it helps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How IV Therapy Supports MS Patients</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Multiple sclerosis creates a cascade of secondary health challenges that IV therapy can directly address. Chronic neuroinflammation depletes antioxidant reserves — particularly glutathione. Mitochondrial dysfunction in neurons reduces cellular energy production, contributing to MS fatigue. Many MS patients have profound deficiencies in vitamin D, B12, and magnesium due to the disease process, medications, or reduced gut absorption.
          </p>
          <p className="text-gray-600 leading-relaxed">
            IV therapy bypasses the gut entirely and delivers therapeutic concentrations of these nutrients and antioxidants directly to the bloodstream, achieving levels impossible with oral supplementation. This is particularly meaningful for MS patients whose gut absorption may be compromised or who take medications that deplete key nutrients.
          </p>
        </section>

        {/* Recommended drips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">IV Drips Most Used by MS Patients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drips.map((drip) => (
              <Link key={drip.slug} href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-sky-300 hover:shadow-sm transition">
                <div className="font-bold text-gray-900 mb-1">{drip.name}</div>
                <div className="text-sm text-gray-500">{drip.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cost */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of IV Therapy for MS</h2>
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
                  { name: "Myers' Cocktail", price: '$150–$300', duration: '45 min' },
                  { name: 'Glutathione Push', price: '$100–$200', duration: '15–30 min' },
                  { name: 'High-Dose Vitamin C', price: '$200–$500', duration: '60–90 min' },
                  { name: 'NAD+', price: '$300–$600', duration: '90–240 min' },
                  { name: 'Vitamin D IV', price: '$99–$175', duration: '30 min' },
                  { name: 'Vitamin B12', price: '$99–$150', duration: '30 min' },
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
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-sky-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find IV Therapy Providers Near You</h2>
          <p className="text-sky-100 mb-6 max-w-xl mx-auto">
            Use our directory to find IV therapy clinics and mobile IV services in your city that can support your MS wellness protocol.
          </p>
          <Link href="/iv-therapy-near-me"
            className="inline-block rounded-xl bg-white px-8 py-3 font-bold text-sky-700 hover:bg-sky-50 transition">
            Find Providers Near Me
          </Link>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Cancer Patients — Integrative Support During Treatment (2026)',
  description:
    'IV therapy is used in integrative oncology to support cancer patients during and after treatment. Learn about high-dose vitamin C, glutathione, NAD+, and hydration IVs for cancer care.',
  alternates: { canonical: '/iv-therapy-for-cancer' },
  openGraph: {
    title: 'IV Therapy for Cancer Patients — Integrative Support During Treatment (2026)',
    description: 'How IV therapy supports cancer patients: high-dose vitamin C, hydration, glutathione, and nutrient replenishment during chemotherapy and recovery.',
    url: `${BASE_URL}/iv-therapy-for-cancer`,
  },
}

const faqs = [
  {
    question: 'Can cancer patients receive IV therapy?',
    answer:
      'Yes, many cancer patients receive IV therapy as part of an integrative oncology protocol to support their overall health, manage treatment side effects, and maintain nutritional status. IV therapy is not a cancer treatment and does not replace chemotherapy, radiation, immunotherapy, or surgery. However, it can meaningfully address specific challenges cancer patients face: severe dehydration from chemo, nutrient depletion, fatigue, nausea, and compromised gut absorption. Always obtain written approval from your oncologist before starting any IV therapy protocol during active cancer treatment.',
  },
  {
    question: 'What is high-dose vitamin C IV therapy for cancer?',
    answer:
      'High-dose IV vitamin C (HDIVC) at doses of 25,000–100,000mg is one of the most studied complementary IV therapies in oncology. At these concentrations, vitamin C acts as a pro-oxidant in the tumor microenvironment, generating hydrogen peroxide that is selectively toxic to cancer cells while sparing normal cells (which have catalase enzyme to neutralize it). Multiple clinical trials, including studies at NIH, have shown that HDIVC is safe, well-tolerated alongside conventional chemotherapy, and may improve quality of life, reduce inflammation markers, and support immune function in cancer patients. Requires G6PD screening before initiation.',
  },
  {
    question: 'Is IV therapy safe during chemotherapy?',
    answer:
      'Safety depends entirely on the specific IV therapy and chemotherapy protocol. Some IV nutrients are contraindicated during certain chemo regimens — for example, antioxidants like vitamin C and glutathione are controversial during oxidative chemotherapy agents (like platinum-based drugs) because they may theoretically reduce efficacy. However, growing evidence suggests high-dose IV vitamin C may actually enhance some chemotherapy protocols. Hydration IVs, electrolyte replacement, and anti-nausea medications are routinely used alongside chemo. ALWAYS consult your oncologist — show them the specific IV protocol ingredients — before receiving any IV therapy during active chemotherapy.',
  },
  {
    question: 'Which IV drips are most commonly used in integrative oncology?',
    answer:
      'The most commonly used IV therapies in integrative oncology settings include: (1) High-Dose Vitamin C (25–100g) — the most studied complementary IV in cancer care; (2) Glutathione — used post-chemo for neuropathy protection and detoxification; (3) IV Hydration — critical during chemo-induced nausea and vomiting; (4) Myers\' Cocktail — broad micronutrient support for depleted cancer patients; (5) NAD+ — cellular energy support, particularly for fatigue; and (6) Mistletoe (Iscador) — an injectable botanical used in European integrative oncology, available at select US integrative cancer centers.',
  },
  {
    question: 'Can IV therapy help with chemotherapy side effects?',
    answer:
      'IV therapy can address several chemotherapy side effects: (1) Dehydration and nausea — IV saline with anti-nausea medication (Zofran) provides rapid relief; (2) Peripheral neuropathy — glutathione IV has evidence for reducing chemotherapy-induced neuropathy, particularly from platinum agents; (3) Fatigue — NAD+, B12, and Myers\' Cocktail address the nutrient depletion contributing to cancer-related fatigue; (4) Immune suppression — high-dose vitamin C supports immune function during chemo-related immunosuppression; (5) Mouth sores and GI damage — hydration and vitamin C support mucosal recovery.',
  },
  {
    question: 'How do I find an IV therapy provider experienced with cancer patients?',
    answer:
      'Look for integrative oncology centers, naturopathic oncologists (FABNO-certified), or functional medicine practices with specific experience in cancer care. These providers understand drug-nutrient interactions, appropriate timing relative to chemotherapy cycles, and which protocols are evidence-based. Avoid IV "wellness bars" or spas that lack medical oversight for cancer-related IV therapy — the stakes are too high for unsupervised administration. Ask specifically about their experience with your cancer type and current treatment protocol.',
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
  { name: 'High-Dose Vitamin C', slug: 'high-dose-vitamin-c', desc: 'Most studied complementary IV in oncology — 25–100g doses' },
  { name: 'Glutathione', slug: 'glutathione', desc: 'Neuroprotection and detox support post-chemotherapy' },
  { name: 'IV Hydration', slug: 'hydration', desc: 'Critical during chemo-induced nausea and vomiting' },
  { name: "Myers' Cocktail", slug: 'myers-cocktail', desc: 'Broad micronutrient support for depleted patients' },
  { name: 'NAD+', slug: 'nad-plus', desc: 'Cellular energy for cancer-related fatigue' },
  { name: 'Vitamin B12', slug: 'b12', desc: 'Neurological support and energy during treatment' },
]

export default function IVTherapyForCancerPage() {
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
            <span>IV Therapy for Cancer</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Cancer Patients
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Integrative oncology uses IV therapy to support cancer patients through treatment — managing side effects, replenishing depleted nutrients, and maintaining quality of life. Here&apos;s what the evidence shows and what to know before starting.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Critical disclaimer */}
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm text-red-800">
            <strong>Critical:</strong> IV therapy for cancer is a supportive intervention only — it does not treat, cure, or prevent cancer. Always obtain written approval from your oncologist before starting any IV therapy protocol during active cancer treatment. Some IV nutrients interact with chemotherapy drugs.
          </p>
        </div>

        {/* Role in integrative oncology */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IV Therapy&apos;s Role in Integrative Oncology</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Integrative oncology combines conventional cancer treatment with evidence-based complementary therapies to improve patient outcomes, quality of life, and treatment tolerance. IV therapy plays a specific role in this approach by delivering therapeutic concentrations of nutrients, antioxidants, and hydration that oral supplementation cannot achieve.
          </p>
          <p className="text-gray-600 leading-relaxed">
            High-dose IV vitamin C has been studied at the NIH and in multiple clinical trials as an adjunct to chemotherapy. Glutathione IV is used to prevent chemotherapy-induced peripheral neuropathy. IV hydration is a standard component of many chemotherapy protocols. When properly supervised by medical professionals familiar with oncology, IV therapy can be a meaningful component of comprehensive cancer care.
          </p>
        </section>

        {/* Recommended drips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">IV Drips Used in Integrative Cancer Care</h2>
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

        {/* Timing guidance */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Timing IV Therapy Around Chemotherapy</h2>
          <div className="space-y-3">
            {[
              { phase: 'Before chemotherapy', guidance: 'IV hydration and nutrient loading (Myers\' Cocktail, vitamin C) may support treatment tolerance. Discuss timing with oncologist — typically 24–48 hours before infusion.' },
              { phase: 'During chemotherapy cycle', guidance: 'IV hydration and anti-nausea IVs are often administered at the chemo infusion center. High-dose vitamin C timing relative to oxidative agents requires oncologist guidance.' },
              { phase: 'After chemotherapy (recovery days)', guidance: 'Glutathione, B12, NAD+, and hydration IVs are most commonly used 48–72 hours post-chemo for recovery support and neuroprotection.' },
              { phase: 'Between cycles', guidance: 'The inter-cycle period is generally considered the safest window for supplemental IV therapy including high-dose vitamin C and Myers\' Cocktail.' },
            ].map((item) => (
              <div key={item.phase} className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.phase}</div>
                <div className="text-sm text-gray-600">{item.guidance}</div>
              </div>
            ))}
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
          <h2 className="text-2xl font-bold mb-2">Find an Integrative IV Therapy Provider</h2>
          <p className="text-sky-100 mb-6 max-w-xl mx-auto">
            Find IV therapy clinics and integrative medicine providers in your area who have experience working with cancer patients.
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

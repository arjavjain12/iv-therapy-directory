import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivtherapylisting.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Long COVID | NAD+, Myers Cocktail & Vitamin C for Post-COVID',
  description:
    'IV therapy for long COVID uses NAD+, Myers\' Cocktail, and high-dose vitamin C to address post-COVID fatigue, brain fog, and mitochondrial damage. Find integrative providers near you.',
  alternates: { canonical: '/iv-therapy-for-long-covid' },
  openGraph: {
    title: 'IV Therapy for Long COVID | NAD+, Myers Cocktail & Vitamin C for Post-COVID',
    description:
      "IV therapy for long COVID uses NAD+, Myers' Cocktail, and vitamin C to address post-COVID fatigue, brain fog, and mitochondrial damage.",
    url: `${BASE_URL}/iv-therapy-for-long-covid`,
  },
}

export default function IVTherapyForLongCovidPage() {
  const faqs = [
    {
      question: 'Can IV therapy help long COVID symptoms?',
      answer:
        'IV therapy is used in integrative medicine clinics as a supportive treatment for long COVID (post-acute sequelae of COVID-19 / PASC). The most relevant drips — NAD+, Myers\' Cocktail, and high-dose vitamin C — address the leading biochemical mechanisms of long COVID: mitochondrial dysfunction, oxidative stress, neuroinflammation, and micronutrient depletion from the viral illness. While large randomized controlled trials specific to long COVID and IV therapy are still underway, mechanistic evidence and patient reports from integrative clinics are promising. Always work with a physician familiar with long COVID management.',
    },
    {
      question: 'Why is NAD+ IV therapy used for long COVID?',
      answer:
        "COVID-19 appears to cause significant mitochondrial dysfunction — SARS-CoV-2 hijacks cellular mitochondria for viral replication, leaving them damaged and depleted. This mitochondrial injury is believed to underlie the profound fatigue, exertional intolerance, and cognitive symptoms of long COVID. NAD+ is essential for mitochondrial ATP production and DNA repair. IV NAD+ delivers this coenzyme directly to cells at concentrations that oral supplements cannot achieve, directly addressing the mitochondrial deficit. Many integrative long COVID clinics are now including NAD+ IV as a core component of their protocols.",
    },
    {
      question: 'How many IV therapy sessions does long COVID recovery take?',
      answer:
        'Most integrative long COVID IV protocols involve an initial loading series (6–12 sessions over 2–6 weeks) followed by maintenance infusions every 2–4 weeks. NAD+ protocols often begin with 3–5 consecutive-day infusions for initial cellular loading. Improvement in fatigue and cognitive symptoms is typically gradual — most patients notice meaningful improvement after 4–8 sessions, with continued gains over 3–6 months of consistent treatment.',
    },
    {
      question: 'What long COVID symptoms does IV therapy target?',
      answer:
        "IV therapy most directly addresses the nutrient-depletion and mitochondrial components of long COVID: fatigue and post-exertional malaise (NAD+ + B vitamins), brain fog and cognitive symptoms (NAD+ + B12), immune dysregulation (high-dose vitamin C + zinc), oxidative stress (vitamin C + glutathione), and muscle weakness (Myers' Cocktail with amino acids). It is less likely to directly address autonomic dysfunction (POTS), clotting issues, or structural lung damage.",
    },
    {
      question: 'Is IV therapy for long COVID covered by insurance?',
      answer:
        'Currently, IV vitamin therapy for long COVID is typically not covered by standard health insurance and is considered an experimental or complementary treatment. Costs range from $150–$500+ per session depending on the drip type, with NAD+ sessions being the most expensive ($250–$500). Some HSA/FSA accounts may be eligible with a physician prescription. Costs are expected to be better covered as more long COVID research is published and clinical guidelines develop.',
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
    headline: 'IV Therapy for Long COVID (Post-COVID Syndrome)',
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-long-covid` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Long COVID
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Long COVID — post-acute sequelae of COVID-19 (PASC) — affects an estimated 10–30% of COVID-19 survivors, causing persistent fatigue, brain fog, breathlessness, and post-exertional malaise. Emerging evidence points to mitochondrial dysfunction, viral-induced NAD+ depletion, and chronic oxidative stress as key drivers. IV therapy with NAD+, Myers&apos; Cocktail, and high-dose vitamin C is increasingly used by integrative medicine practitioners as a supportive long COVID protocol.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Biochemistry of Long COVID</h2>
            <p className="text-gray-700 leading-relaxed">
              Research into long COVID&apos;s mechanisms has identified several overlapping pathologies. SARS-CoV-2 directly impairs mitochondrial function by hijacking mitochondria during viral replication and triggering mitophagy (cellular mitochondria destruction). This results in reduced ATP production — cellular energy deficiency — that manifests as profound fatigue and post-exertional malaise. The virus also massively consumes NAD+, a coenzyme essential for energy metabolism, DNA repair, and immune function, leaving NAD+ levels severely depleted. Neuroinflammation (microglial activation) contributes to brain fog and cognitive symptoms. Chronic oxidative stress from the immune response damages cell membranes, proteins, and DNA. Many long COVID patients also have significant micronutrient depletion from the acute illness: vitamin C, B vitamins, zinc, and magnesium are all commonly depleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How IV Therapy Addresses Long COVID</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NAD+ IV therapy directly replenishes the NAD+ depleted by SARS-CoV-2, restoring mitochondrial function and cellular energy production. IV NAD+ achieves intracellular concentrations far above what oral precursors (NR, NMN) can deliver — relevant because long COVID appears to involve impaired NAD+ biosynthesis pathways that may reduce conversion from oral precursors. High-dose IV vitamin C addresses the massive oxidative stress burden of long COVID, reducing inflammatory cytokines and supporting mitochondrial membrane integrity. Myers&apos; Cocktail replenishes the B vitamins, magnesium, and vitamin C depleted by the acute illness and provides the cofactors needed for energy metabolism recovery.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Integrative long COVID clinics typically combine IV therapy with other interventions: low-dose naltrexone (for neuroinflammation), methylene blue, hyperbaric oxygen therapy, and tailored supplementation protocols. IV therapy addresses the nutrient depletion and mitochondrial components while other modalities target different aspects of the syndrome.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Long COVID</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  slug: 'nad-plus',
                  label: 'NAD+',
                  reason: "Replenishes virus-depleted NAD+ and directly restores mitochondrial ATP production. The most targeted long COVID IV intervention.",
                },
                {
                  slug: 'myers-cocktail',
                  label: "Myers' Cocktail",
                  reason: 'Systemic B vitamin + magnesium + vitamin C repletion. Addresses the micronutrient depletion from the acute illness.',
                },
                {
                  slug: 'vitamin-c',
                  label: 'Vitamin C',
                  reason: 'High-dose antioxidant reduces chronic oxidative stress and neuroinflammatory cytokines driving brain fog and fatigue.',
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
              Long COVID IV protocols are typically supervised by integrative medicine or functional medicine physicians. Initial NAD+ sessions for long COVID often begin at lower doses (250–500mg) and increase over 3–5 consecutive days during the loading phase — sessions run 2–4 hours. Some patients experience a mild detox-like reaction (fatigue, mild nausea) in the first 1–2 sessions as cells upregulate energy production. Myers&apos; Cocktail and vitamin C sessions run 30–60 minutes and are generally well-tolerated. Improvements in energy and cognitive function are typically gradual — most patients report meaningful change after 4–8 sessions, with further gains over 3–6 months.
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
                { href: '/iv-drip-types/nad-plus', label: 'NAD+ IV Therapy Guide' },
                { href: '/nad-iv-therapy', label: 'NAD+ IV Complete Overview' },
                { href: '/iv-drip-types/myers-cocktail', label: "Myers' Cocktail Guide" },
                { href: '/iv-therapy-for-chronic-fatigue', label: 'IV Therapy for Chronic Fatigue' },
                { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
                { href: '/how-often-should-you-get-iv-therapy', label: 'How Often to Get IV Therapy?' },
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

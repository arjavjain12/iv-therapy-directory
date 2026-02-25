import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: "IV Therapy for Fibromyalgia | Myers' Cocktail & NAD+ for Fibro Pain",
  description:
    "Myers' Cocktail IV was originally developed partly for fibromyalgia. Learn the evidence behind IV therapy for fibromyalgia pain, which drips help most, and find local providers.",
  alternates: { canonical: '/iv-therapy-for-fibromyalgia' },
  openGraph: {
    title: "IV Therapy for Fibromyalgia | Myers' Cocktail & NAD+ for Fibro Pain",
    description:
      "Myers' Cocktail IV therapy has clinical evidence for fibromyalgia pain reduction. Learn which drips help most and find local providers.",
    url: `${BASE_URL}/iv-therapy-for-fibromyalgia`,
  },
}

export default function IVTherapyForFibromyalgiaPage() {
  const faqs = [
    {
      question: "Is there evidence that Myers' Cocktail helps fibromyalgia?",
      answer:
        "Yes — there is clinical evidence. A 2009 randomized controlled trial published in the Journal of Alternative and Complementary Medicine found that 8 weekly Myers' Cocktail infusions produced significant reductions in tender point pain, depression scores, and overall quality of life in fibromyalgia patients compared to placebo. Dr. John Myers originally developed the cocktail partly for fibromyalgia and chronic fatigue patients in the 1950s–70s. Many integrative rheumatologists and functional medicine practitioners include IV Myers' Cocktail as a supportive component of fibromyalgia treatment.",
    },
    {
      question: 'Why might IV magnesium help fibromyalgia pain?',
      answer:
        'Magnesium deficiency is consistently found in fibromyalgia patients, and magnesium plays a critical role in pain regulation. It is a natural NMDA receptor antagonist — blocking the same receptors involved in central pain sensitization (the key mechanism in fibromyalgia). IV magnesium achieves therapeutic serum levels within minutes, immediately acting on NMDA receptors to reduce central pain amplification. Oral magnesium supplements are often insufficient due to gastrointestinal limits on absorption and the lower bioavailability of many oral forms.',
    },
    {
      question: 'How many IV therapy sessions are needed for fibromyalgia?',
      answer:
        "The 2009 JACM study used 8 weekly sessions as the treatment protocol. Most integrative practitioners recommend a similar initial series: 6–10 weekly infusions followed by monthly maintenance. Patients who respond well to Myers' Cocktail typically notice improvement in pain scores, sleep quality, and fatigue within 3–4 sessions. NAD+ therapy for fibromyalgia may use a more intensive initial protocol with 3–5 consecutive-day infusions.",
    },
    {
      question: 'Can IV therapy replace fibromyalgia medications?',
      answer:
        'No — IV therapy is a complementary supportive treatment, not a replacement for prescribed fibromyalgia medications (duloxetine, pregabalin, milnacipran) or other evidence-based approaches like CBT, graduated exercise therapy, and sleep hygiene. It addresses specific nutritional deficiencies and biochemical imbalances that may amplify fibromyalgia symptoms. Any changes to prescribed medications should be discussed with your rheumatologist or pain management physician.',
    },
    {
      question: 'Is mobile IV therapy appropriate for fibromyalgia patients?',
      answer:
        'Yes — mobile IV therapy is often preferable for fibromyalgia patients because traveling to a clinic on high-pain days can be difficult. Mobile services administer IV infusions at home in a familiar, comfortable environment. The reduction in physical exertion and stress compared to clinic visits may also reduce post-exertional symptom flares that some fibromyalgia patients experience after any strenuous activity.',
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
    headline: "IV Therapy for Fibromyalgia — Myers' Cocktail & NAD+",
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-fibromyalgia` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Fibromyalgia
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Fibromyalgia is characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive fog — driven by central pain sensitization, magnesium deficiency, and mitochondrial dysfunction. Myers&apos; Cocktail IV therapy has clinical trial evidence for fibromyalgia pain reduction, making it one of the few IV therapies with published RCT data for a specific condition.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Fibromyalgia and Nutritional Deficiencies</h2>
            <p className="text-gray-700 leading-relaxed">
              Fibromyalgia involves central sensitization — a dysregulation of pain processing in the central nervous system that amplifies pain signals. Multiple nutritional deficiencies are consistently found in fibromyalgia patients: magnesium (present in 68–80% of fibromyalgia patients in some studies), B vitamins (particularly B1, B6, B12), vitamin C, and NAD+. These deficiencies are not incidental — they directly impair the biochemical pathways needed for normal pain regulation, energy production, and sleep quality. Magnesium deficiency is particularly significant because magnesium is the body&apos;s primary natural NMDA antagonist, and NMDA receptor hyperactivation is a central mechanism of fibromyalgia pain amplification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Clinical Evidence for IV Therapy in Fibromyalgia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A 2009 randomized controlled trial published in the Journal of Alternative and Complementary Medicine (Massey et al.) compared 8 weekly Myers&apos; Cocktail infusions to placebo (saline) in fibromyalgia patients. The Myers&apos; Cocktail group showed significantly greater reductions in tender point pain, depression, and overall quality of life measures. Dr. John Myers — who developed the cocktail in Baltimore in the 1950s–70s — originally treated fibromyalgia and chronic fatigue patients as a core part of his practice. His formulation (magnesium chloride, calcium gluconate, B vitamins, vitamin C in saline) was specifically designed to address the nutritional deficiencies he observed in these patients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              More recent research on NAD+ IV therapy suggests it may also benefit fibromyalgia through its role in mitochondrial function, anti-inflammatory pathways, and sirtuin-mediated pain regulation — though RCT data specific to fibromyalgia is still emerging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Fibromyalgia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  slug: 'myers-cocktail',
                  label: "Myers' Cocktail",
                  reason: 'RCT-supported for fibromyalgia. IV magnesium blocks NMDA pain receptors; B vitamins + vitamin C address core nutritional deficiencies.',
                },
                {
                  slug: 'nad-plus',
                  label: 'NAD+',
                  reason: 'Addresses mitochondrial dysfunction underlying fibromyalgia fatigue. Emerging evidence for pain modulation via sirtuin pathways.',
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
              A Myers&apos; Cocktail session for fibromyalgia takes 30–45 minutes. The initial push of magnesium may cause a brief warm, flushed sensation — this is normal and indicates therapeutic levels are being reached. Most fibromyalgia patients report that the first 1–3 sessions produce modest improvement, with more significant changes appearing after sessions 4–6 as nutritional deficiencies are corrected. Mobile IV therapy is recommended for fibromyalgia patients who have difficulty traveling on high-pain or high-fatigue days. An initial series of 8 weekly infusions, followed by monthly maintenance, is the most commonly used protocol.
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
                { href: '/iv-drip-types/myers-cocktail', label: "Myers' Cocktail Guide" },
                { href: '/iv-drip-types/nad-plus', label: 'NAD+ IV Therapy Guide' },
                { href: '/what-is-in-a-myers-cocktail', label: "What's in a Myers' Cocktail?" },
                { href: '/iv-therapy-for-chronic-fatigue', label: 'IV Therapy for Chronic Fatigue' },
                { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
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

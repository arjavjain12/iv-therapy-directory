import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Morning Sickness | Hyperemesis Gravidarum Treatment',
  description:
    'IV therapy for morning sickness and hyperemesis gravidarum rehydrates rapidly and stops nausea fast. Learn how hydration + B12 + Zofran IV works for pregnancy nausea — and when to seek it.',
  alternates: { canonical: '/iv-therapy-for-morning-sickness' },
  openGraph: {
    title: 'IV Therapy for Morning Sickness | Hyperemesis Gravidarum Treatment',
    description:
      'IV therapy for morning sickness and hyperemesis gravidarum rehydrates rapidly and stops nausea fast during pregnancy.',
    url: `${BASE_URL}/iv-therapy-for-morning-sickness`,
  },
}

export default function IVTherapyForMorningSicknessPage() {
  const faqs = [
    {
      question: 'Is IV therapy safe during pregnancy for morning sickness?',
      answer:
        "IV hydration during pregnancy is a well-established, safe intervention when administered by a qualified medical provider. It requires physician authorization and should only be administered by a licensed RN or NP familiar with obstetric care. Standard saline with electrolytes and B vitamins is safe for most pregnancies. Zofran (ondansetron) can be added for nausea but should only be used when prescribed by your OB/GYN, as its use in the first trimester requires careful physician judgment. Always obtain clearance from your obstetrician before scheduling IV therapy during pregnancy.",
    },
    {
      question: 'What is the difference between morning sickness and hyperemesis gravidarum?',
      answer:
        "Morning sickness (nausea and vomiting of pregnancy / NVP) affects 70–80% of pregnant women, typically in the first trimester. Hyperemesis gravidarum (HG) is a severe form affecting 0.5–2% of pregnancies, characterized by persistent vomiting, significant weight loss (>5% of pre-pregnancy weight), dehydration, and electrolyte imbalances requiring medical intervention. IV therapy is commonly used for HG when dehydration prevents adequate oral intake and outpatient IV rehydration can prevent or shorten hospitalizations.",
    },
    {
      question: 'How often do I need IV therapy for hyperemesis gravidarum?',
      answer:
        "The frequency depends on the severity of your HG. Some patients need IV hydration 2–3 times per week during the worst weeks (typically weeks 6–16), while others need daily infusions for severe dehydration. Mobile IV services allow treatment at home, which is often preferable for nauseated patients who cannot travel easily. Your OB/GYN should coordinate the IV therapy protocol.",
    },
    {
      question: 'What vitamins are in a pregnancy IV drip?',
      answer:
        "A pregnancy-appropriate IV drip typically contains: normal saline (0.9% NaCl) or Lactated Ringer's for hydration, electrolytes (sodium, potassium, magnesium), B12 (methylcobalamin) for energy and nausea support, and sometimes B6 (pyridoxine) which has evidence for reducing nausea in pregnancy. Zofran (ondansetron) or Phenergan (promethazine) for nausea require a prescription from your OB. High-dose vitamin C and other aggressive drips are generally avoided during pregnancy — always confirm with your OB what is appropriate.",
    },
    {
      question: 'Can mobile IV therapy come to my home for morning sickness?',
      answer:
        "Yes — mobile IV therapy is ideal for pregnant women with severe morning sickness because it eliminates the need to travel while nauseated. Many mobile IV providers specialize in prenatal care. When booking, confirm that the service has experience with pregnancy cases and that a licensed RN or NP will administer the infusion. Your OB should authorize the treatment and provide guidance on the appropriate drip composition.",
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
    headline: 'IV Therapy for Morning Sickness and Hyperemesis Gravidarum',
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-morning-sickness` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>Medical Note:</strong> IV therapy during pregnancy requires authorization from your OB/GYN or midwife. Always consult your healthcare provider before scheduling IV therapy while pregnant.
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Morning Sickness
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Severe morning sickness and hyperemesis gravidarum (HG) can cause dangerous dehydration and nutrient depletion that oral intake cannot correct when every sip causes vomiting. IV therapy provides rapid, direct rehydration and nausea relief — often preventing hospitalization — and mobile services can administer treatment at home.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What Causes Morning Sickness and HG</h2>
            <p className="text-gray-700 leading-relaxed">
              Nausea and vomiting of pregnancy (NVP) affects 70–80% of pregnant women and is driven by rising hCG and estrogen levels, slowed gastric motility, heightened sensory sensitivity, and B6/thiamine depletion. Hyperemesis gravidarum (HG) is the severe end of this spectrum — affecting 0.5–2% of pregnancies — characterized by persistent, uncontrollable vomiting that causes significant weight loss, severe dehydration, and electrolyte imbalances. HG typically peaks between weeks 8–12 and can persist well into the second trimester. The primary dangers are maternal dehydration, thiamine (B1) deficiency (which can cause neurological complications), and fetal growth restriction from inadequate nutrition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How IV Therapy Helps Morning Sickness</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When vomiting prevents adequate oral intake, IV therapy is the only reliable way to restore hydration and correct electrolyte imbalances. A 1-liter saline infusion with electrolytes restores the fluid and mineral balance that vomiting has depleted — directly addressing the dizziness, headaches, and weakness caused by dehydration. B6 IV has evidence for reducing nausea in pregnancy, and B12 supports energy. Zofran (ondansetron) or Phenergan (promethazine), when prescribed by the OB, can be added to the IV for rapid anti-nausea relief that oral medications cannot provide when the patient cannot keep pills down.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outpatient IV therapy — especially mobile IV at home — can prevent hospitalizations for HG patients who are dehydrated but not critically ill. For patients requiring daily infusions during severe HG, a PICC line placed in hospital provides ongoing IV access; for less severe cases, periodic outpatient or mobile IV sessions maintain hydration between episodes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">IV Drips for Morning Sickness</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  slug: 'hydration',
                  label: 'IV Hydration',
                  reason: 'Rapidly restores fluid and electrolytes when vomiting prevents oral intake. The primary intervention for HG dehydration.',
                },
                {
                  slug: 'b12',
                  label: 'Vitamin B12',
                  reason: 'Supports energy and nausea reduction. Combined with B6 (pyridoxine), has evidence for reducing NVP severity.',
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
              Your OB/GYN or midwife must authorize the IV therapy and specify which medications (if any) can be added. A mobile nurse will arrive with everything needed for the infusion — typically 1 liter of saline with electrolytes, B vitamins, and any prescribed anti-nausea medication. The infusion takes 30–60 minutes and can be administered in bed. Most patients feel significantly better within 30–60 minutes: reduced nausea, improved energy, and clearer thinking as dehydration resolves. Many find they can eat and drink a small amount after the infusion.
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
                { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
                { href: '/is-iv-therapy-safe', label: 'Is IV Therapy Safe?' },
                { href: '/what-to-expect-during-iv-therapy', label: 'What to Expect During IV Therapy' },
                { href: '/does-insurance-cover-iv-therapy', label: 'Does Insurance Cover IV Therapy?' },
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

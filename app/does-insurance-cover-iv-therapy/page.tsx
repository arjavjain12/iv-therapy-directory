import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Does Insurance Cover IV Therapy? (2026 Guide) — HSA, FSA & Medicaid',
  description:
    'Does insurance cover IV therapy? Learn when Blue Cross Blue Shield, Medicare, Medicaid, and other insurers pay for IV treatment — and when they don\'t. Includes HSA/FSA rules.',
  alternates: { canonical: '/does-insurance-cover-iv-therapy' },
}

const FAQS = [
  {
    question: 'Does insurance cover IV therapy?',
    answer:
      'It depends entirely on the reason for the IV. Wellness IV drips at concierge clinics are almost never covered by insurance because they are classified as elective. However, IV therapy prescribed by a physician for a diagnosed medical condition — such as severe dehydration, Crohn\'s disease, POTS, or chemotherapy-induced nausea — is frequently covered under standard medical benefits. Always get a Prior Authorization if your insurer requires it.',
  },
  {
    question: 'Does Blue Cross Blue Shield cover IV therapy?',
    answer:
      'Blue Cross Blue Shield plans vary by state and employer. BCBS generally covers medically necessary IV infusions ordered by a physician for documented conditions, including home infusion therapy for conditions like Crohn\'s disease, malabsorption syndromes, and severe nutritional deficiencies. Elective wellness IV drips are not covered. Contact your BCBS member services or check your Summary of Benefits and Coverage (SBC) for specifics.',
  },
  {
    question: 'Does Medicaid cover IV therapy?',
    answer:
      'Medicaid covers IV therapy when it is medically necessary and ordered by a participating physician. This includes IV antibiotics, IV hydration for severe dehydration, and IV nutrition for malabsorption conditions. Coverage and prior authorization requirements vary significantly by state. Medicaid does not cover elective wellness IV drips.',
  },
  {
    question: 'Can I use my HSA or FSA for IV therapy?',
    answer:
      'Yes — in many cases. HSA (Health Savings Account) and FSA (Flexible Spending Account) funds can be used for IV therapy when it is considered a medical expense. The strongest path is to obtain a Letter of Medical Necessity (LMN) from your physician. Without an LMN, wellness IV drips are unlikely to qualify as HSA/FSA-eligible expenses under IRS rules. IV therapy for a documented medical condition (e.g., severe dehydration, nutritional deficiency) is more straightforwardly eligible.',
  },
  {
    question: 'What is a Letter of Medical Necessity for IV therapy?',
    answer:
      'A Letter of Medical Necessity (LMN) is a document from your physician stating that IV therapy is medically necessary for your specific condition. It typically includes your diagnosis, why oral supplementation is insufficient, the recommended IV treatment, and expected duration of treatment. An LMN strengthens your case for insurance coverage and is often required for HSA/FSA reimbursement of IV therapy that might otherwise appear elective.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Does Insurance Cover IV Therapy? (2026 Guide)',
  description:
    'Comprehensive guide to insurance coverage for IV therapy including Blue Cross Blue Shield, Medicare, Medicaid, and HSA/FSA eligibility.',
  datePublished: '2026-01-01',
  dateModified: '2026-02-01',
  author: { '@type': 'Organization', name: 'IV Therapy Directory' },
  publisher: { '@type': 'Organization', name: 'IV Therapy Directory' },
}

export default function DoesInsuranceCoverIVTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'IV Therapy Cost', href: '/iv-therapy-cost' },
              { label: 'Does Insurance Cover IV Therapy?' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Does Insurance Cover IV Therapy? (2026 Guide)
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            The answer is nuanced: wellness IV drips are almost never covered, but medically
            prescribed IV therapy often is. Here is everything you need to know about insurance,
            HSA, and FSA coverage for IV therapy in 2026.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Quick Answer Box */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer</h2>
          <p className="text-gray-700 mb-2">
            <strong>Wellness IV clinics: typically NOT covered.</strong> Elective vitamin infusions, hangover drips, and concierge wellness IVs are almost universally denied by health insurers because they are classified as non-medically-necessary.
          </p>
          <p className="text-gray-700">
            <strong>Medically prescribed IV therapy: often IS covered.</strong> When a physician orders IV therapy for a documented medical condition — severe dehydration, Crohn&apos;s disease, POTS, chemotherapy side effects, or documented nutritional deficiencies — your insurance plan will frequently cover it under standard medical benefits.
          </p>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wellness IV vs. Medical IV — Coverage Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Factor</th>
                  <th className="px-5 py-3 text-left font-semibold text-red-700">Wellness IV Clinic</th>
                  <th className="px-5 py-3 text-left font-semibold text-green-700">Medically Prescribed IV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Insurance Coverage', 'Almost never', 'Frequently covered'],
                  ['Physician Order Required', 'No', 'Yes'],
                  ['Diagnosis Required', 'No', 'Yes'],
                  ['HSA/FSA Eligible', 'Unlikely without LMN', 'Yes, with physician order'],
                  ['Where Administered', 'Spa/clinic/mobile', 'Medical office, home infusion, hospital'],
                  ['Typical Out-of-Pocket', '$100–$300 per session', 'Co-pay or deductible only'],
                  ['Prior Authorization', 'N/A', 'Often required'],
                  ['Examples', 'Hangover IV, beauty drip', 'POTS saline, chemo hydration, TPN'],
                ].map(([factor, wellness, medical]) => (
                  <tr key={factor}>
                    <td className="px-5 py-3 font-medium text-gray-700">{factor}</td>
                    <td className="px-5 py-3 text-red-700">{wellness}</td>
                    <td className="px-5 py-3 text-green-700">{medical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* When Insurance DOES Cover */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When Insurance DOES Cover IV Therapy
          </h2>
          <p className="text-gray-600 mb-5">
            Insurance coverage for IV therapy hinges on medical necessity. Here are five scenarios where your health plan is likely to pay:
          </p>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Physician-Prescribed IV for a Diagnosed Condition',
                desc: 'If your doctor orders IV therapy for POTS, severe dehydration, inflammatory bowel disease (Crohn\'s or ulcerative colitis), cancer-related dehydration, or chemotherapy side effects, that care is billed as standard medical treatment. Most commercial insurance plans, Medicare, and Medicaid cover this under your medical benefits. You will typically pay your regular co-pay or coinsurance.',
              },
              {
                num: '2',
                title: 'Home Infusion Therapy Through a Licensed Pharmacy',
                desc: 'Home infusion therapy — where a licensed home infusion pharmacy delivers IV medications or nutrition to your home and a nurse administers them — is a recognized medical benefit covered by most major insurers. Conditions commonly covered include Crohn\'s disease, short bowel syndrome, parenteral nutrition (TPN), and IV antibiotics for serious infections.',
              },
              {
                num: '3',
                title: 'Hospital or Urgent Care IV Treatment',
                desc: 'IV fluids administered in an emergency room, hospital, or urgent care setting are covered as standard medical care. If you are admitted or treated for dehydration, a severe infection, or any acute condition requiring IV therapy, that treatment falls under your standard hospitalization or outpatient benefits.',
              },
              {
                num: '4',
                title: 'IV Therapy for Documented Nutritional Deficiencies',
                desc: 'Patients with documented B12 deficiency anemia, iron deficiency anemia (when oral iron is not tolerated), magnesium deficiency, or malabsorption syndromes can receive IV supplementation covered by insurance. Diagnosis codes and lab evidence are required. Your physician will need to document why oral supplementation is insufficient or contraindicated.',
              },
              {
                num: '5',
                title: 'POTS and Dysautonomia IV Saline Protocols',
                desc: 'Postural Orthostatic Tachycardia Syndrome (POTS) and other forms of dysautonomia are increasingly recognized as indications for regular IV saline infusions. Many patients with documented POTS have successfully obtained insurance coverage for weekly or bi-weekly saline infusions through their cardiologist or dysautonomia specialist. A prior authorization and detailed medical records are typically required.',
              },
            ].map((item) => (
              <div key={item.num} className="rounded-xl border border-gray-200 bg-white p-5 flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When Insurance Does NOT Cover */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When Insurance Does NOT Cover IV Therapy
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Elective Wellness Drips',
                desc: 'Vitamin infusions at concierge IV bars — including popular drips like the Myers\' Cocktail, immunity boosts, and energy IVs — are considered elective and non-medically-necessary by all major insurers. No major health plan covers these regardless of your deductible status.',
              },
              {
                title: 'Hangover IV Therapy',
                desc: 'Hangover recovery IVs, while effective for rapid symptom relief, are explicitly excluded from insurance coverage. They are classified as treatments for a self-induced condition with no approved diagnostic code that would support medical billing.',
              },
              {
                title: 'Aesthetic and Anti-Aging IV Drips',
                desc: 'Glutathione skin-brightening infusions, NAD+ anti-aging drips, and beauty-focused IV protocols are cosmetic treatments. Insurance does not cover cosmetic procedures, and these drips will not qualify for reimbursement without a separate medical indication.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HSA and FSA */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HSA and FSA Coverage for IV Therapy
          </h2>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-6 mb-5">
            <p className="text-gray-700">
              <strong>The good news:</strong> HSA (Health Savings Account) and FSA (Flexible Spending Account) funds can often be used for IV therapy — but the rules depend on the purpose of the treatment and whether you have documentation from a physician.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How to Qualify IV Therapy for HSA/FSA</h3>
              <p className="text-sm text-gray-600 mb-3">
                Under IRS Publication 502, medical expenses that diagnose, treat, or prevent disease qualify for HSA/FSA reimbursement. To use your HSA or FSA for IV therapy:
              </p>
              <ul className="space-y-2">
                {[
                  'Get a Letter of Medical Necessity (LMN) from your physician documenting your condition and why IV therapy is appropriate',
                  'Keep your receipt and the LMN together for your records',
                  'Submit for reimbursement through your HSA or FSA administrator with the LMN attached if required',
                  'Use your HSA debit card directly at clinics that accept it — many IV therapy providers do',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-sky-600 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-2">HSA vs. FSA — Key Differences</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-2 text-left font-semibold text-gray-700">Feature</th>
                      <th className="py-2 text-left font-semibold text-gray-700">HSA</th>
                      <th className="py-2 text-left font-semibold text-gray-700">FSA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Requires HDHP', 'Yes', 'No'],
                      ['Rolls over year to year', 'Yes (fully)', 'Limited ($640 in 2026)'],
                      ['2026 contribution limit', '$4,300 individual', '$3,300'],
                      ['IV therapy eligible', 'Yes, with LMN or medical order', 'Yes, with LMN or medical order'],
                    ].map(([feat, hsa, fsa]) => (
                      <tr key={feat}>
                        <td className="py-2 text-gray-700">{feat}</td>
                        <td className="py-2 text-gray-600">{hsa}</td>
                        <td className="py-2 text-gray-600">{fsa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Specific Insurer FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IV Therapy Coverage by Insurer
          </h2>
          <div className="space-y-3">
            {[
              {
                insurer: 'Blue Cross Blue Shield',
                detail:
                  'BCBS plans vary by state and employer. Most BCBS plans cover medically necessary IV infusions ordered by an in-network physician. Home infusion therapy is covered under most BCBS plans for qualifying conditions. Wellness IVs are excluded. Contact your BCBS member services line or log into your account to verify your specific plan\'s infusion therapy benefit. BCBS FEP (Federal Employee Program) has particularly strong infusion therapy benefits.',
              },
              {
                insurer: 'Medicare and Medicaid',
                detail:
                  'Medicare Part B covers medically necessary IV infusions administered in an outpatient setting, including infusion centers. Medicare covers home infusion therapy under Part B for certain conditions (anti-infective drugs, immunosuppressive drugs, certain biologicals). Medicaid coverage varies by state but generally covers medically necessary IV therapy ordered by a participating provider. Neither Medicare nor Medicaid covers elective wellness IVs.',
              },
              {
                insurer: 'United Healthcare',
                detail:
                  'United Healthcare covers infusion therapy for medically necessary conditions. UHC has a dedicated Infusion Therapy Clinical Coverage Policy. Home infusion is covered through UHC\'s Infusion Services network. Prior authorization is typically required. Wellness IVs are not covered. Check your UHC member portal or call the number on your insurance card to verify benefits.',
              },
              {
                insurer: 'Aetna',
                detail:
                  'Aetna covers IV therapy and infusion services when medically necessary and ordered by a physician. Aetna has a clinical policy bulletin specifically for home infusion therapy covering conditions like Crohn\'s disease, parenteral nutrition, and IV antibiotics. Like other major insurers, Aetna does not cover elective vitamin infusions. Aetna members should check the Aetna member website or call Aetna Member Services for infusion-specific coverage details.',
              },
            ].map((item) => (
              <details key={item.insurer} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition list-none">
                  <span className="font-semibold text-gray-900">{item.insurer}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 text-lg leading-none">&#8964;</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.detail}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Internal Links */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide — What to Expect to Pay' },
              { href: '/iv-therapy/pots', label: 'IV Therapy for POTS — Saline Protocols Explained' },
              { href: '/list-your-business', label: 'List Your IV Therapy Business on the Directory' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sky-600 hover:text-sky-700 text-sm font-medium hover:underline">
                  {link.label} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FAQ
          items={FAQS}
          title="Does Insurance Cover IV Therapy? — Frequently Asked Questions"
        />
      </div>
    </>
  )
}

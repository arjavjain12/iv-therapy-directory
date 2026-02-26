import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "IV Therapy Side Effects — What to Expect & When to Worry (2026)",
  description: "Complete guide to IV therapy side effects — from normal reactions (coolness, flushing) to rare risks. Know what's expected and what requires medical attention.",
  alternates: { canonical: '/iv-therapy-side-effects' },
}

const FAQS = [
  {
    question: 'Are IV therapy side effects common?',
    answer: 'Minor, transient side effects — such as coolness along the arm, a slight metallic taste from B vitamins, or mild flushing from magnesium — are common and completely normal. Serious adverse events are rare when IV therapy is administered by licensed registered nurses following proper protocols. The risk profile is very low for healthy adults receiving standard wellness drips.',
  },
  {
    question: 'What does NAD+ IV therapy side effects feel like?',
    answer: 'NAD+ is well-known for producing side effects during infusion, including flushing, a sensation of chest tightness (not dangerous), nausea, headache, and fatigue. These are not signs of danger — they are expected responses to NAD+ administered intravenously. They are managed by slowing the infusion rate, which is why NAD+ sessions run 90 minutes or longer rather than the 45 minutes of a typical drip.',
  },
  {
    question: 'Can IV therapy cause infection?',
    answer: 'Infection at the IV insertion site is extremely rare when proper sterile technique is used. Licensed RN providers follow strict aseptic protocols — gloves, alcohol swabs, sterile equipment, and single-use supplies. The risk increases significantly with unlicensed or improperly trained administrators, which is one of the most important reasons to choose accredited, licensed IV therapy providers.',
  },
  {
    question: 'Is IV therapy safe for people with kidney disease?',
    answer: 'Not necessarily without medical clearance. High-dose vitamin C is contraindicated in patients with kidney disease due to the risk of calcium oxalate kidney stone formation. Large-volume IV fluids can also stress the kidneys in patients with reduced kidney function. Anyone with kidney disease, heart failure, or significant cardiac conditions should consult their nephrologist or cardiologist before any IV therapy.',
  },
  {
    question: 'What should I do if I feel bad during IV therapy?',
    answer: 'Tell your nurse immediately — do not try to push through. Your nurse can slow the infusion rate (which resolves most discomfort), stop the drip entirely, adjust your chair position, or provide other interventions as needed. IV therapy nurses are trained in managing infusion reactions. Communication is the most important thing you can do during your session.',
  },
]

export default function IVTherapySideEffectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "IV Therapy Side Effects — What's Normal and What's Not",
    description: "Complete guide to IV therapy side effects — from normal reactions (coolness, flushing) to rare risks. Know what's expected and what requires medical attention.",
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivlist.com/iv-therapy-side-effects' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Is IV Therapy Safe', href: '/is-iv-therapy-safe' },
            { label: 'IV Therapy Side Effects' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Side Effects — What's Normal and What's Not
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            A complete guide to what you might experience during and after an IV therapy session — and when to take action.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Intro */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 text-base leading-relaxed">
            Most IV therapy side effects are minor, transient, and entirely predictable based on the components in your drip. When administered by a licensed registered nurse in a reputable clinical setting, serious adverse events are rare. Understanding what is normal — and what warrants concern — helps you go into your session informed and confident. This guide covers both common expected reactions and the rare but serious risks you should know about.
          </p>
        </div>

        {/* Common Side Effects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Common Side Effects (Normal)</h2>
          <p className="text-sm text-gray-500 mb-5">These reactions are expected and do not indicate a problem:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Cool sensation along the arm',
                body: 'IV fluid is delivered at room temperature, which feels cool as it enters your bloodstream. This is completely expected and passes quickly as your body equilibrates with the infusion temperature.',
              },
              {
                title: 'Slight metallic or vitamin taste',
                body: 'B vitamins — particularly B12 and B-complex — are commonly associated with a mild metallic, earthy, or vitamin-like taste during infusion. This is harmless and typically fades within minutes.',
              },
              {
                title: 'Warm flushing sensation',
                body: 'Magnesium, present in Myers\' Cocktail and many other drips, commonly produces a warm, flushing feeling through the chest and face. Your nurse can slow the drip rate to reduce this if it becomes uncomfortable.',
              },
              {
                title: 'Minor bruising at the insertion site',
                body: 'A small bruise around the IV insertion point is normal and resolves within a few days. Apply a cold compress if the area feels sore. This is more common if you have fragile or rolling veins.',
              },
              {
                title: 'Slight dizziness or light-headedness',
                body: 'Usually caused by not eating before the session or a mild blood pressure fluctuation. Tell your nurse immediately — they will slow the rate and offer a snack. Easily managed when caught early.',
              },
              {
                title: 'Frequent urination after the session',
                body: 'You just received 500ml to 1 liter of fluids intravenously. Your kidneys will process this over several hours, producing more frequent urination. This is entirely normal and a sign the treatment worked.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 ml-5">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side Effects by Drip Type */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side Effects by Specific Drip Type</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Common Side Effects</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    drip: 'NAD+',
                    effects: 'Flushing, chest tightness, nausea, headache, fatigue during infusion',
                    notes: 'Managed by slowing rate — very common, not dangerous',
                  },
                  {
                    drip: 'Magnesium (Myers\' Cocktail)',
                    effects: 'Warmth and flushing, brief low blood pressure',
                    notes: 'Slowing the drip rate resolves it — usually mild',
                  },
                  {
                    drip: 'High-Dose Vitamin C',
                    effects: 'Nausea at very high doses; kidney stone risk in G6PD deficiency',
                    notes: 'Screening required before high-dose — rare at standard doses',
                  },
                  {
                    drip: 'Glutathione',
                    effects: 'Mild asthma-like symptoms in sensitive patients',
                    notes: 'Disclose any asthma or respiratory conditions — rare overall',
                  },
                ].map((row) => (
                  <tr key={row.drip} className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.drip}</td>
                    <td className="px-4 py-3 text-gray-600">{row.effects}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rare but Serious Risks */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rare but Serious Risks</h2>
          <p className="text-sm text-gray-700 mb-4">
            These risks are rare when IV therapy is performed by licensed, trained professionals using proper equipment and technique. Understanding them is part of making an informed decision.
          </p>
          <ul className="space-y-3">
            {[
              { risk: 'Air embolism', detail: 'A very rare complication where air enters the bloodstream. Prevented by proper technique and equipment — trained nurses follow protocols that eliminate this risk.' },
              { risk: 'Phlebitis (vein inflammation)', detail: 'Inflammation of the vein at or near the insertion site. More common with poor technique, prolonged sessions, or irritating solutions. Signs include redness, warmth, and tenderness along the vein.' },
              { risk: 'Infection at the insertion site', detail: 'Rare with proper sterile technique, but possible if aseptic protocols are not followed. A primary reason to always use licensed, accredited providers.' },
              { risk: 'Electrolyte imbalance', detail: 'A risk for patients with underlying kidney disease, heart failure, or conditions affecting fluid regulation. Certain drip formulas can worsen these imbalances without appropriate screening.' },
            ].map((item) => (
              <li key={item.risk} className="flex items-start gap-3">
                <span className="text-amber-500 font-bold shrink-0 mt-0.5">!</span>
                <div>
                  <span className="font-semibold text-gray-900">{item.risk}: </span>
                  <span className="text-sm text-gray-700">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* When to Seek Medical Attention */}
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">When to Seek Medical Attention</h2>
          <p className="text-sm text-gray-700 mb-4">
            Contact your IV therapy provider or seek emergency care if you experience any of the following during or after your session:
          </p>
          <ul className="space-y-2">
            {[
              'Chest pain or chest pressure that does not resolve when the drip is slowed or stopped',
              'Difficulty breathing, shortness of breath, or wheezing',
              'Severe swelling, hardness, or significant redness at the IV insertion site',
              'High fever (above 101°F) developing within 24–48 hours after your session',
              'Signs of infection at the insertion site: increasing redness, warmth, pus, or red streaking',
              'Severe headache, vision changes, or neurological symptoms following a session',
            ].map((sign, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                {sign}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Minimize Side Effects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Minimize IV Therapy Side Effects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Eat before your session', desc: 'A light meal 1–2 hours before dramatically reduces the risk of light-headedness and nausea during infusion.' },
              { title: 'Hydrate beforehand', desc: 'Well-hydrated veins are easier to access and the infusion proceeds more smoothly with better baseline hydration.' },
              { title: 'Disclose all conditions and medications', desc: 'Your nurse uses this information to screen for contraindications and select the safest formula for your situation.' },
              { title: 'Choose licensed, reputable providers', desc: 'Always use providers with licensed RNs and proper clinical protocols. The most preventable side effects come from inadequate training or technique.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="IV Therapy Side Effects — Frequently Asked Questions" />

        {/* Related Guides */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Is IV Therapy Safe', href: '/is-iv-therapy-safe' },
              { label: 'How to Prepare for IV Therapy', href: '/how-to-prepare-for-iv-therapy' },
              { label: 'What to Expect During IV Therapy', href: '/what-to-expect-during-iv-therapy' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
              { label: 'NAD+ IV Therapy', href: '/nad-iv-therapy' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition">
                <span>→</span> {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

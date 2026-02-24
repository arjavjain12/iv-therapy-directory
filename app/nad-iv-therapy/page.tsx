import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'NAD+ IV Therapy — Complete Guide (2026) | Benefits, Cost & Side Effects',
  description:
    'NAD+ IV therapy guide: what it is, proven benefits (energy, anti-aging, cognitive clarity, addiction recovery), cost ($250–$500/session), side effects, and how many sessions you need.',
  alternates: { canonical: '/nad-iv-therapy' },
}

const FAQS = [
  {
    question: 'What is NAD+ IV therapy?',
    answer:
      'NAD+ (Nicotinamide Adenine Dinucleotide) IV therapy delivers this essential coenzyme directly into your bloodstream, bypassing the digestive system to achieve therapeutic blood concentrations that are impossible with oral supplements. NAD+ is required for hundreds of metabolic processes including ATP energy production, DNA repair, and sirtuin activation — the proteins responsible for cellular longevity.',
  },
  {
    question: 'How long does a NAD+ IV infusion take?',
    answer:
      'NAD+ infusions are among the slowest IV drips because infusing too quickly causes significant side effects (chest tightness, flushing, nausea). A typical NAD+ IV session takes 60–90 minutes for a standard 250–500 mg dose. Higher dose sessions (750 mg–1,000 mg) for anti-aging or addiction recovery protocols can take 2–4 hours. The drip rate is carefully managed by the administering nurse.',
  },
  {
    question: 'How many NAD+ IV sessions do you need?',
    answer:
      'For general wellness and anti-aging, a starter protocol of 4 sessions over 2–4 weeks is commonly recommended, followed by monthly maintenance. For addiction recovery (alcohol or opioid dependence), intensive protocols of 10 days of consecutive infusions are used in some specialized clinics. Athletic performance protocols typically involve 4–6 sessions before a major competition or training block.',
  },
  {
    question: 'What are the side effects of NAD+ IV therapy?',
    answer:
      'Side effects during infusion are common and manageable: flushing or warmth, chest tightness or pressure, nausea, light-headedness, and fatigue. These are not dangerous and are managed by slowing the infusion rate. Serious adverse effects are rare. After the infusion, most patients feel energized. Some experience fatigue the day of treatment. NAD+ is not recommended during pregnancy or for patients with active cancer without oncology consultation.',
  },
  {
    question: 'Can NAD+ IV therapy help with addiction recovery?',
    answer:
      'NAD+ IV therapy has been studied and used clinically in addiction recovery, particularly for alcohol and opioid dependence. Proponents suggest high-dose NAD+ infusions help replenish depleted NAD+ stores, reduce withdrawal symptoms, and restore neurological function. While research is promising, NAD+ therapy for addiction is not FDA-approved and should be used only as part of a comprehensive recovery program under medical supervision.',
  },
  {
    question: 'Is NAD+ IV therapy worth the cost?',
    answer:
      'NAD+ IV therapy is among the most expensive IV treatments ($250–$500 per session) because NAD+ is a costly pharmaceutical-grade ingredient. Many patients report significant subjective improvements in energy, mental clarity, and mood after a series of treatments. Whether it is "worth it" depends on your goals and baseline NAD+ status. Younger healthy individuals may notice less dramatic effects than those with chronic fatigue, age-related decline, or recovery from substance dependence.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NAD+ IV Therapy — Complete Guide (2026) | Benefits, Cost & Side Effects',
  description:
    'Comprehensive guide to NAD+ IV therapy including benefits, cost, side effects, protocols, and what to expect.',
  datePublished: '2026-01-01',
  dateModified: '2026-02-01',
  author: { '@type': 'Organization', name: 'IV Therapy Directory' },
  publisher: { '@type': 'Organization', name: 'IV Therapy Directory' },
}

export default function NADIVTherapyPage() {
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
              { label: 'IV Drip Types', href: '/iv-drip-types' },
              { label: 'NAD+ IV Therapy' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            NAD+ IV Therapy — Complete Guide to Benefits, Cost &amp; Side Effects
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            NAD+ IV therapy delivers the essential longevity coenzyme directly into your bloodstream for cellular energy, DNA repair, cognitive clarity, and anti-aging — at concentrations impossible to achieve orally.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Price Per Session', value: '$250–$500' },
            { label: 'Session Length', value: '60–90 min' },
            { label: 'NAD+ Decline by 50', value: '~50% lost' },
            { label: 'Starter Protocol', value: '4 sessions' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-center">
              <div className="text-2xl font-extrabold text-sky-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div className="prose prose-gray max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            NAD+ (Nicotinamide Adenine Dinucleotide) is one of the most important molecules in the human body. It acts as a coenzyme in hundreds of metabolic reactions, most critically in the production of ATP — your cells&apos; primary energy currency — and in the activation of sirtuins, the proteins scientists call the &quot;longevity regulators.&quot; NAD+ levels decline approximately 50% between age 20 and 50, a drop researchers believe is directly linked to the hallmarks of aging: fatigue, cognitive decline, metabolic slowdown, and reduced cellular repair capacity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The problem with oral NAD+ precursors (like NMN and NR supplements) is that they are converted to NAD+ through a multi-step enzymatic process, and absorption is limited. IV delivery bypasses the gut entirely, flooding cells with NAD+ at therapeutic concentrations within minutes. This is why IV NAD+ therapy produces effects that oral supplements simply cannot replicate — particularly for acute applications like addiction recovery and intensive anti-aging protocols.
          </p>
        </div>

        {/* What Is NAD+ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is NAD+?</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-3">
            <p className="text-gray-700 text-sm leading-relaxed">
              NAD+ is a coenzyme found in every cell of your body. It exists in two forms — NAD+ (oxidized) and NADH (reduced) — and shuttles electrons between these forms during cellular metabolism. This electron transfer is fundamental to:
            </p>
            <ul className="space-y-2">
              {[
                'Glycolysis and the citric acid cycle (how cells burn glucose for energy)',
                'The electron transport chain (mitochondrial ATP production)',
                'Sirtuin enzyme activation (SIRT1–SIRT7, which regulate aging, inflammation, and metabolism)',
                'PARP enzymes (DNA damage detection and repair)',
                'CD38 enzyme activity (immune cell regulation)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-sky-600 mt-0.5 flex-shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm leading-relaxed">
              By age 40–50, NAD+ levels in most adults are half what they were at age 20. This decline is accelerated by chronic stress, alcohol consumption, poor diet, and chronic illness. IV NAD+ therapy rapidly replenishes these depleted stores.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NAD+ IV Therapy Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Cellular Energy (ATP Production)',
                desc: 'NAD+ is the rate-limiting factor in mitochondrial energy production. Restoring NAD+ levels directly increases cellular ATP output, which patients experience as sustained energy — not the stimulant buzz of caffeine, but a cleaner, deeper vitality that improves over multiple sessions.',
              },
              {
                title: 'DNA Repair',
                desc: 'PARP enzymes that detect and repair DNA damage are completely dependent on NAD+ as a substrate. Higher NAD+ availability means faster, more efficient DNA repair — reducing the accumulation of DNA damage that underlies aging and cancer risk.',
              },
              {
                title: 'Anti-Aging via Sirtuin Activation',
                desc: 'Sirtuins are NAD+-dependent enzymes that regulate gene expression, inflammation, mitochondrial biogenesis, and metabolic homeostasis. Research by Dr. David Sinclair and others has established sirtuins as central regulators of aging. Raising NAD+ activates these longevity pathways.',
              },
              {
                title: 'Cognitive Clarity',
                desc: 'The brain consumes 20% of the body\'s energy despite being 2% of body mass. NAD+ supports neuronal mitochondrial function and is required for neurotransmitter synthesis. Many patients report significant improvements in mental sharpness, memory recall, and mood within days of their first NAD+ series.',
              },
              {
                title: 'Addiction Recovery Support',
                desc: 'High-dose NAD+ IV therapy has been used in specialized addiction treatment programs for alcohol and opioid dependence. It appears to reduce withdrawal symptoms, restore neurochemical balance, and reduce cravings. While not FDA-approved for this indication, clinical outcomes reported by specialized centers are promising.',
              },
              {
                title: 'Athletic Performance',
                desc: 'NAD+ supports muscle mitochondrial efficiency, reduces exercise-induced oxidative stress, and improves recovery time. Elite athletes use NAD+ IV protocols before competition cycles to maximize training adaptation and reduce recovery time between sessions.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-sky-700 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NAD+ IV Therapy Cost</h2>
          <p className="text-gray-600 mb-4 text-sm">
            NAD+ is one of the most expensive IV ingredients because pharmaceutical-grade NAD+ is costly to produce. Prices vary by location, dose, and provider. Expect to pay more than standard vitamin drips.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-sky-50 border-b border-sky-200">
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Protocol</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Sessions</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Cost Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Single Session', '1', '$250–$500'],
                  ['Starter Protocol', '4 sessions', '$800–$1,600'],
                  ['Full Protocol', '10 sessions', '$1,800–$3,500'],
                  ['Monthly Maintenance', '1/month', '$250–$500/mo'],
                  ['Addiction Recovery (intensive)', '10 consecutive days', '$3,000–$6,000'],
                ].map(([protocol, sessions, cost]) => (
                  <tr key={protocol}>
                    <td className="px-5 py-3 font-medium text-gray-800">{protocol}</td>
                    <td className="px-5 py-3 text-gray-600">{sessions}</td>
                    <td className="px-5 py-3 text-gray-800 font-semibold">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Prices are estimates based on national averages. Costs vary by location and provider. Insurance does not typically cover wellness NAD+ therapy, but HSA/FSA may apply with a Letter of Medical Necessity.
          </p>
        </div>

        {/* Side Effects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NAD+ IV Side Effects</h2>
          <p className="text-gray-600 mb-4 text-sm">
            NAD+ produces more during-infusion side effects than other IV drips. These are well-known, manageable, and temporary — but patients should be prepared for them. They are caused by rapid cellular metabolic activation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Common During-Infusion Effects</h3>
              <ul className="space-y-2">
                {[
                  'Flushing or warmth throughout the body',
                  'Chest tightness or mild pressure (not cardiac)',
                  'Nausea or stomach cramping',
                  'Light-headedness or dizziness',
                  'Muscle cramping',
                  'Fatigue or heaviness',
                ].map((effect) => (
                  <li key={effect} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">&#9888;</span>
                    {effect}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-600 mt-3 italic">
                All managed by slowing the infusion rate. Inform your nurse immediately if side effects are uncomfortable.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Rare but Serious Effects</h3>
              <ul className="space-y-2">
                {[
                  'Significant drop in blood pressure',
                  'Severe allergic reaction (anaphylaxis — extremely rare)',
                  'Phlebitis at IV site',
                  'Severe nausea requiring anti-nausea medication',
                ].map((effect) => (
                  <li key={effect} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">&#9679;</span>
                    {effect}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                NAD+ should always be administered by a licensed RN in a setting equipped to manage adverse reactions.
              </p>
            </div>
          </div>
        </div>

        {/* How Many Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Many NAD+ Sessions Do You Need?</h2>
          <div className="space-y-3">
            {[
              {
                goal: 'General Wellness &amp; Anti-Aging',
                protocol: '4-session starter series, then monthly maintenance',
                detail: 'For most adults seeking anti-aging, energy, and cognitive benefits, a 4-session series over 2–4 weeks is the typical starting point. Results compound over the series. Monthly maintenance keeps NAD+ levels elevated.',
              },
              {
                goal: 'Cognitive Enhancement',
                protocol: '4–6 sessions over 2–3 weeks',
                detail: 'Many executives, biohackers, and professionals seeking peak cognitive performance do a quarterly 4–6 session intensive followed by monthly single sessions.',
              },
              {
                goal: 'Athletic Performance',
                protocol: '4 sessions 2–3 weeks before peak training or competition',
                detail: 'Athletes typically time NAD+ protocols to precede major training blocks or competition cycles, then use single monthly maintenance sessions.',
              },
              {
                goal: 'Addiction Recovery',
                protocol: '10 consecutive daily infusions (intensive)',
                detail: 'Specialized addiction recovery programs using NAD+ typically administer high-dose infusions daily for 10 days, sometimes followed by a taper protocol. This is significantly different from wellness use and requires a full medical evaluation.',
              },
            ].map((item) => (
              <div key={item.goal} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: item.goal }} />
                  <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">
                    {item.protocol}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Get NAD+ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Get NAD+ IV Therapy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Good Candidates</h3>
              <ul className="space-y-2">
                {[
                  'Adults 35+ experiencing fatigue and cognitive decline',
                  'Professionals seeking peak cognitive performance',
                  'Athletes wanting to optimize recovery and endurance',
                  'Individuals in addiction recovery (under medical supervision)',
                  'People with chronic fatigue or mitochondrial dysfunction',
                  'Biohackers and longevity enthusiasts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-sky-600 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Consult Your Doctor First If You Have:</h3>
              <ul className="space-y-2">
                {[
                  'Active cancer (consult your oncologist)',
                  'Pregnancy or breastfeeding',
                  'Severe low blood pressure',
                  'Uncontrolled diabetes',
                  'Active liver or kidney disease',
                  'History of severe drug reactions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">&#9888;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              { href: '/iv-drip-types/nad-plus', label: 'NAD+ Drip Details — Ingredients, Dose & What to Expect' },
              { href: '/iv-therapy/anti-aging', label: 'IV Therapy for Anti-Aging — Protocols & Science' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide — Full Pricing Breakdown' },
              { href: '/iv-therapy-near-me', label: 'Find NAD+ IV Therapy Near You' },
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
          title="NAD+ IV Therapy — Frequently Asked Questions"
        />
      </div>
    </>
  )
}

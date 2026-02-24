import { ClipboardList, Syringe, Smile } from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Book & Consult',
    desc: 'Choose your drip online or by phone. Complete a health intake form. A clinician reviews and approves your session.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Syringe,
    title: 'Receive Your Drip',
    desc: 'A licensed RN inserts the IV and starts your infusion. Sit back and relax — most sessions take 30–90 minutes.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Smile,
    title: 'Feel the Difference',
    desc: 'Feel replenished, energized, and restored. Most patients notice results within 30–60 minutes of starting their drip.',
    color: 'bg-violet-100 text-violet-600',
  },
]

export default function HowIVWorksInfographic() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
        How IV Therapy Works
      </h2>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
        From booking to feeling great — here's what to expect from your IV therapy session.
      </p>

      <div className="relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0" style={{ left: '16.67%', right: '16.67%' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className={`relative flex items-center justify-center w-24 h-24 rounded-full ${step.color} mb-5`}>
                  <Icon className="w-10 h-10" />
                  <div className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 rounded-xl bg-sky-50 border border-sky-200 p-5 text-center">
        <p className="text-sm font-semibold text-sky-800">
          💧 All sessions administered by licensed RNs under physician oversight — safe, sterile, pharmaceutical-grade every time.
        </p>
      </div>
    </div>
  )
}

const BENEFITS = [
  { icon: '⚡', title: '100% Bioavailability', desc: 'IV delivery achieves complete absorption vs. 20–50% oral limits' },
  { icon: '⏱️', title: 'Near-Instant Results', desc: 'Nutrients enter your bloodstream within minutes — not hours' },
  { icon: '🧪', title: 'Pharmaceutical Grade', desc: 'Sterile, hospital-quality solutions prepared by licensed compounding pharmacies' },
  { icon: '👩‍⚕️', title: 'Medical Supervision', desc: 'Administered by licensed RNs under physician medical director oversight' },
  { icon: '🎯', title: 'Customizable Formula', desc: 'Add-ons tailored to your specific health goals and symptoms' },
  { icon: '🏠', title: 'At-Home Option', desc: 'Mobile services deliver professional IV therapy wherever you are' },
]

export default function BenefitsInfographic() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Why IV Therapy Works Better
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm">
        The key advantages of intravenous nutrient delivery over oral supplements
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <div className="text-2xl shrink-0 mt-0.5">{benefit.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">{benefit.title}</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-sky-50 border border-sky-200 p-4 text-center">
        <p className="text-sm text-sky-800">
          <strong>Oral vitamins</strong> absorb at 20–50% efficiency through the digestive system.
          IV delivers <strong>100% directly to your cells</strong> — the difference you feel.
        </p>
      </div>
    </div>
  )
}

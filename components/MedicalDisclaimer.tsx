import { AlertTriangle } from 'lucide-react'

export default function MedicalDisclaimer() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mt-8">
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-gray-900 text-sm">Medical Disclaimer</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            This content is for informational purposes only and does not constitute medical advice. IV therapy should only be administered by licensed medical professionals. Always consult a qualified healthcare provider before starting any IV therapy treatment.
          </p>
        </div>
      </div>
    </div>
  )
}

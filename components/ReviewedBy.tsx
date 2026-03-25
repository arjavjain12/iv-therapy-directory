import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

interface ReviewedByProps {
  date?: string
}

export default function ReviewedBy({ date }: ReviewedByProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 mt-3 mb-6">
      <ShieldCheck className="h-4 w-4 text-emerald-500" />
      <span>
        Medically reviewed by the{' '}
        <Link href="/about" className="text-sky-600 hover:text-sky-700 font-medium">
          IVList Medical Review Team
        </Link>
      </span>
      {date && (
        <>
          <span className="text-gray-300">|</span>
          <span>Updated {date}</span>
        </>
      )}
    </div>
  )
}

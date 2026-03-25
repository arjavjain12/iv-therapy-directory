import { Lightbulb } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="h-5 w-5 text-sky-600" />
        <h2 className="font-bold text-gray-900">Key Takeaways</h2>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

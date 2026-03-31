import type { Metadata } from 'next'
import Link from 'next/link'
import { Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'RSS Feed — IVList',
  description: 'Subscribe to IVList\'s RSS feed to get the latest IV therapy guides, drip type pages, and condition resources.',
}

const FEED_ITEMS = [
  { title: 'IV Therapy Guides', description: 'What is IV therapy, how it works, how to prepare, what to expect, and more.', count: 10 },
  { title: 'IV Drip Types', description: 'Myers\' Cocktail, NAD+, glutathione, vitamin C, iron, ketamine, and 12 more drip guides.', count: 18 },
  { title: 'Condition Pages', description: 'IV therapy for dehydration, migraines, anxiety, chronic fatigue, flu, hangovers, and more.', count: 15 },
  { title: 'Cost & Safety', description: 'IV therapy costs, insurance coverage, side effects, and safety guides.', count: 4 },
]

export default function RssPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-orange-500 rounded-lg p-2">
          <Rss className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">IVList RSS Feed</h1>
      </div>
      <p className="text-gray-600 text-lg mb-10">
        Subscribe to stay up to date with new IV therapy guides, drip type pages, and condition resources published on IVList.
      </p>

      {/* Feed URL box */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Feed URL</p>
        <div className="flex items-center gap-3 flex-wrap">
          <code className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-mono text-gray-800 flex-1 min-w-0 truncate">
            https://ivlist.com/rss.xml
          </code>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            <Rss className="w-4 h-4" />
            View Feed
          </a>
        </div>
      </div>

      {/* What's in the feed */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s in the feed</h2>
      <div className="grid gap-4 mb-10">
        {FEED_ITEMS.map((item) => (
          <div key={item.title} className="flex items-start justify-between bg-white border border-gray-200 rounded-xl p-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <span className="ml-4 text-sm font-semibold text-orange-500 whitespace-nowrap">{item.count} pages</span>
          </div>
        ))}
      </div>

      {/* How to subscribe */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">How to subscribe</h2>
      <ol className="space-y-3 text-gray-600 mb-10">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold flex items-center justify-center">1</span>
          Copy the feed URL above: <code className="mx-1 text-sm bg-gray-100 px-1.5 py-0.5 rounded">https://ivlist.com/rss.xml</code>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold flex items-center justify-center">2</span>
          Open your feed reader (Feedly, Inoreader, NetNewsWire, or any RSS app)
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold flex items-center justify-center">3</span>
          Paste the URL and subscribe
        </li>
      </ol>

      <div className="border-t border-gray-200 pt-8 text-sm text-gray-500">
        Looking for IV therapy providers near you?{' '}
        <Link href="/iv-therapy-near-me" className="text-sky-600 hover:underline">Find IV therapy near me →</Link>
      </div>
    </main>
  )
}

'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Building2, X } from 'lucide-react'

interface CityResult {
  city_name: string
  state: string
  state_slug: string
  city_slug: string
  population: number
}

interface BusinessResult {
  name: string
  slug: string
  city: { city_name: string; state: string; state_slug: string; city_slug: string }
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [cities, setCities] = useState<CityResult[]>([])
  const [businesses, setBusinesses] = useState<BusinessResult[]>([])
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const debounceRef = useRef<NodeJS.Timeout>(null)

  const totalResults = cities.length + businesses.length

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setCities([])
      setBusinesses([])
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      setCities(data.cities || [])
      setBusinesses(data.businesses || [])
    } catch {
      setCities([])
      setBusinesses([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(query), 250)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [query, search])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function navigate(url: string) {
    setOpen(false)
    setQuery('')
    setCities([])
    setBusinesses([])
    router.push(url)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, totalResults - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      if (activeIndex < cities.length) {
        const c = cities[activeIndex]
        navigate(`/iv-therapy/${c.state_slug}/${c.city_slug}`)
      } else {
        const b = businesses[activeIndex - cities.length]
        if (b.city) navigate(`/iv-therapy/${b.city.state_slug}/${b.city.city_slug}/${b.slug}`)
      }
    }
  }

  const showDropdown = open && query.length >= 2 && (totalResults > 0 || loading)

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 focus-within:border-sky-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all">
        <Search className="h-4 w-4 text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setActiveIndex(-1) }}
          onFocus={() => { if (query.length >= 2) setOpen(true) }}
          onKeyDown={handleKeyDown}
          placeholder="Search cities or clinics..."
          className="w-32 lg:w-48 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
        />
        {query && (
          <button onClick={() => { setQuery(''); setCities([]); setBusinesses([]); setOpen(false) }} className="text-gray-400 hover:text-gray-600">
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-50">
          {loading && totalResults === 0 && (
            <div className="px-4 py-3 text-sm text-gray-400">Searching...</div>
          )}

          {cities.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50">Cities</div>
              {cities.map((c, i) => (
                <button
                  key={`${c.state_slug}-${c.city_slug}`}
                  onClick={() => navigate(`/iv-therapy/${c.state_slug}/${c.city_slug}`)}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm hover:bg-sky-50 transition ${activeIndex === i ? 'bg-sky-50' : ''}`}
                >
                  <MapPin className="h-4 w-4 text-sky-500 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{c.city_name}</div>
                    <div className="text-xs text-gray-400">{c.state}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {businesses.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50 border-t border-gray-100">Businesses</div>
              {businesses.map((b, i) => (
                <button
                  key={`${b.slug}-${i}`}
                  onClick={() => b.city && navigate(`/iv-therapy/${b.city.state_slug}/${b.city.city_slug}/${b.slug}`)}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm hover:bg-sky-50 transition ${activeIndex === cities.length + i ? 'bg-sky-50' : ''}`}
                >
                  <Building2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{b.name}</div>
                    {b.city && <div className="text-xs text-gray-400">{b.city.city_name}, {b.city.state}</div>}
                  </div>
                </button>
              ))}
            </div>
          )}

          {!loading && totalResults === 0 && query.length >= 2 && (
            <div className="px-4 py-3 text-sm text-gray-400">No results for &ldquo;{query}&rdquo;</div>
          )}
        </div>
      )}
    </div>
  )
}

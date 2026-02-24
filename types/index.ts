export interface City {
  id: number
  city_name: string
  state: string
  state_slug: string
  city_slug: string
  population: number
  latitude: number
  longitude: number
  county: string
  metro_area: string | null
  intro: string | null
}

export interface Business {
  id: number
  city_id: number
  name: string
  slug: string
  address: string
  phone: string | null
  website: string | null
  email: string | null
  rating: number | null
  review_count: number
  tier: 'free' | 'verified' | 'premium'
  is_active: boolean
  is_mobile: boolean
  clinic_type: 'iv_bar' | 'medspa' | 'clinic' | 'mobile' | 'wellness_center'
  drips_available: string[]
  description: string | null
  photos: string[]
  created_at: string
  updated_at: string
  // joined from cities table
  city?: City
}

export interface CityPricing {
  id: number
  city_id: number
  drip_type: string
  price_low: number
  price_high: number
  session_minutes: number
}

export interface Lead {
  id?: number
  city_id: number | null
  name: string
  email: string
  phone: string
  zip_code: string
  health_goal: string
  drip_type_interested: string
  is_mobile_preferred: boolean
  message: string | null
  status: 'new' | 'contacted' | 'converted' | 'lost'
  created_at?: string
}

export interface DripType {
  slug: string
  label: string
  tagline: string
  description: string
  ingredients: string[]
  benefits: string[]
  duration: number
  price_low: number
  price_high: number
  best_for: string[]
  contraindications: string[]
}

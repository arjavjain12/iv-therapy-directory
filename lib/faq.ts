interface CityFAQData {
  providerCount?: number
  hasMobile?: boolean
  priceLow?: number
  priceHigh?: number
}

// Generate city-specific FAQ items for IV therapy — uses real data when available
export function getCityFAQs(cityName: string, state: string, data?: CityFAQData) {
  const count = data?.providerCount ?? 0
  const hasMobile = data?.hasMobile ?? true
  const pLow = data?.priceLow
  const pHigh = data?.priceHigh
  const priceRange = pLow && pHigh ? `$${pLow}–$${pHigh}` : '$99–$500'

  return [
    {
      question: `How much does IV therapy cost in ${cityName}?`,
      answer: `IV therapy in ${cityName}, ${state} typically costs ${priceRange} per session depending on the drip type. A basic hydration drip averages $99–$175, while a Myers' Cocktail runs $149–$275. Premium NAD+ therapy can reach $250–$500.${count > 0 ? ` Compare prices from ${count} local provider${count > 1 ? 's' : ''} in our directory.` : ' Prices vary by provider, clinic type, and whether you choose in-clinic or mobile IV service.'}`,
    },
    {
      question: `Is there mobile IV therapy available in ${cityName}?`,
      answer: hasMobile
        ? `Yes — mobile IV therapy is available in ${cityName} and surrounding areas. A licensed nurse or medical professional comes directly to your home, hotel, or office. Mobile IV sessions typically cost $20–$50 more than in-clinic visits due to the travel convenience. Response times range from 45 minutes to a few hours depending on demand and location within ${state}.`
        : `Mobile IV therapy may be available in the greater ${cityName} area. While our current listings focus on in-clinic providers, mobile IV services are expanding rapidly across ${state}. Contact local providers to ask about home or hotel delivery options. Mobile sessions typically add $20–$50 to the base treatment price.`,
    },
    {
      question: `How many IV therapy providers are in ${cityName}?`,
      answer: count > 0
        ? `Our directory currently lists ${count} IV therapy provider${count > 1 ? 's' : ''} in ${cityName}, ${state}. This includes IV clinics, medical spas, wellness centers, and mobile IV services.${count > 5 ? ` With ${count} options, you can compare ratings, pricing, and services to find the best fit.` : ' We regularly add new providers as the market grows.'}`
        : `We are actively building our ${cityName} provider directory. IV therapy is growing rapidly in ${state}, and new clinics and mobile services are opening regularly. Submit a quote request and we'll match you with available providers in your area.`,
    },
    {
      question: `How long does an IV therapy session take in ${cityName}?`,
      answer: `Most IV therapy sessions in ${cityName} take 30–90 minutes depending on the drip. A basic hydration drip takes about 30 minutes. A Myers' Cocktail or vitamin C drip takes 45–60 minutes. NAD+ infusions are the longest, often running 60–90+ minutes. Add 10–15 minutes for intake and setup at your appointment.`,
    },
    {
      question: `Is IV therapy safe in ${cityName}?`,
      answer: `IV therapy administered by licensed medical professionals is generally safe. Look for ${cityName} providers that use registered nurses (RNs) or paramedics, operate under a licensed medical director, use sterile pharmaceutical-grade IV solutions, and follow OSHA protocols. Rare risks include bruising at the insertion site, mild discomfort, and in extremely rare cases, infection or vein irritation.`,
    },
    {
      question: `What are the best IV drips for hangover recovery in ${cityName}?`,
      answer: `The most popular hangover IV drip in ${cityName} is the Hangover Recovery drip, which typically contains IV fluids, electrolytes, B vitamins (especially B12 and B-complex), anti-nausea medication (Zofran or Phenergan), and sometimes anti-inflammatory medication. A Myers' Cocktail is also commonly used for hangovers. Most ${cityName} clinics report symptom relief within 30–60 minutes of treatment.`,
    },
  ]
}

// Generate state-level FAQ items
export function getStateFAQs(stateName: string) {
  return [
    {
      question: `How much does IV therapy cost in ${stateName}?`,
      answer: `IV therapy prices in ${stateName} vary by city and clinic type, but typically range from $99 to $500 per session. Urban areas like major metropolitan cities tend to have more competition, which can mean better pricing. NAD+ therapy is the most expensive option at $250–$500+. Use our city pages to find accurate local pricing.`,
    },
    {
      question: `Are IV therapy clinics regulated in ${stateName}?`,
      answer: `Yes — IV therapy in ${stateName} must be administered by licensed medical professionals (RNs, NPs, or MDs) and operate under a licensed medical director. Clinics are subject to state medical board oversight. Always verify your chosen clinic employs licensed nurses and operates with a supervising physician or medical director.`,
    },
    {
      question: `How do I find a reputable IV therapy clinic in ${stateName}?`,
      answer: `Look for ${stateName} IV therapy clinics that employ registered nurses (RNs), operate under a licensed medical director, use pharmaceutical-grade IV solutions, have verifiable reviews on Google or Yelp, and offer a health intake consultation before treatment. Our directory lists verified clinics across ${stateName} with ratings and contact information.`,
    },
  ]
}

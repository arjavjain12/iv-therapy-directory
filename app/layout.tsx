import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'IVTherapyListing — Find IV Therapy Clinics & Mobile IV Near You',
    template: '%s | IVTherapyListing',
  },
  description:
    'Find and compare IV therapy clinics, IV bars, and mobile IV services in your city. Get free quotes on hangover recovery, Myers\' Cocktail, NAD+, and more.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    siteName: 'IVTherapyListing',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'IVTherapyListing — Find IV Therapy Near You' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ivtherapylisting.com/#organization',
      name: 'IVTherapyListing',
      url: 'https://ivtherapylisting.com',
      description: 'The largest directory of IV therapy clinics and mobile IV services in the United States.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@ivtherapylisting.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ivtherapylisting.com/#website',
      url: 'https://ivtherapylisting.com',
      name: 'IVTherapyListing',
      publisher: { '@id': 'https://ivtherapylisting.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://ivtherapylisting.com/iv-therapy/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics 4 — replace G-XXXXXXXXXX with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
          }}
        />
      </body>
    </html>
  )
}

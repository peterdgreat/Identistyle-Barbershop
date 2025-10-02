import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Identity Salon NG - Best Barbershop in Kubwa & Abuja, Premium haircut service',
  description: 'Experience premium hair styling and beauty services at Identity Salon in Abuja. Professional haircuts, styling, and beauty treatments for both men and women.',
  keywords: 'hair salon, beauty salon, haircuts, hair styling, Abuja salon, women haircuts, men haircuts, beauty treatments',
  authors: [{ name: 'Identity Salon' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Identity Salon NG - Premier Hair Salon in Abuja',
    description: 'Experience premium hair styling and beauty services at Identity Salon in Abuja',
    url: 'https://identitysalonng.com',
    siteName: 'Identity Salon NG',
    images: [
      {
        url: 'https://identitysalonng.com/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Identity Salon NG Logo'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identity Salon NG - Premier Hair Salon in Abuja',
    description: 'Experience premium hair styling and beauty services at Identity Salon in Abuja',
    images: ['https://identitysalonng.com/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://identitysalonng.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HairSalon',
              name: 'Identity Salon NG',
              image: 'https://identitysalonng.com/logo.jpg',
              '@id': 'https://identitysalonng.com',
              url: 'https://identitysalonng.com',
              telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
              address: {
                '@type': 'PostalAddress',
                streetAddress: process.env.NEXT_PUBLIC_STREET_ADDRESS,
                addressLocality: 'Abuja',
                addressRegion: 'FCT',
                postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE,
                addressCountry: 'NG'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: process.env.NEXT_PUBLIC_LATITUDE,
                longitude: process.env.NEXT_PUBLIC_LONGITUDE
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '20:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '10:00',
                  closes: '18:00'
                }
              ],
              sameAs: [
                'https://www.instagram.com/identitysalonng',
                'https://www.tiktok.com/@identitysalonng',
                'https://www.facebook.com/identitysalonng'
              ]
            })
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
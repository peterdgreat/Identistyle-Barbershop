import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Identity Salon NG - Best Barbershop in Kubwa, Abuja, Nigeria | Premium Haircuts & Grooming',
  description: 'Discover the top barbershop in Kubwa, Abuja, Nigeria at Identity Salon NG. Expert men\'s haircuts, grooming, and premium barber services for the best style in town.',
  keywords: 'barbershop in abuja, barbershop in kubwa, best barbershop abuja, haircut abuja, men\'s grooming kubwa, barber shop nigeria, abuja barbers, kubwa haircuts, identity salon ng',
  authors: [{ name: 'Identity Salon NG' }],
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
    title: 'Identity Salon NG - Top Barbershop in Kubwa, Abuja, Nigeria',
    description: 'The leading barbershop in Kubwa, Abuja offering premium haircuts, grooming, and barber services. Visit us for the best men\'s styling in Nigeria.',
    url: 'https://identitysalonng.com',
    siteName: 'Identity Salon NG',
    images: [
      {
        url: 'https://identitysalonng.com/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Identity Salon NG - Best Barbershop in Kubwa, Abuja'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identity Salon NG - Top Barbershop in Kubwa, Abuja, Nigeria',
    description: 'Expert barbershop services in Kubwa, Abuja. Premium haircuts and grooming for men. Book your appointment today!',
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
              '@type': 'BarberShop',
              name: 'Identity Salon NG - Best Barbershop in Kubwa, Abuja',
              image: 'https://identitysalonng.com/logo.jpg',
              '@id': 'https://identitysalonng.com',
              url: 'https://identitysalonng.com',
              telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
              address: {
                '@type': 'PostalAddress',
                streetAddress: process.env.NEXT_PUBLIC_STREET_ADDRESS,
                addressLocality: 'Kubwa',
                addressRegion: 'Abuja FCT',
                postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE,
                addressCountry: 'NG'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: process.env.NEXT_PUBLIC_LATITUDE,
                longitude: process.env.NEXT_PUBLIC_LONGITUDE
              },
              description: 'Premier barbershop in Kubwa, Abuja, Nigeria offering expert haircuts, grooming, and men\'s styling services.',
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
              priceRange: '$$',
              sameAs: [
                'https://www.instagram.com/identitysalonng',
                'https://www.tiktok.com/@identitysalonng',
                'https://www.facebook.com/identitysalonng'
              ],
              areaServed: {
                '@type': 'Place',
                name: 'Kubwa, Abuja, Nigeria'
              }
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
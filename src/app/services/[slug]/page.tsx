import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Scissors, Bean } from 'lucide-react'
import BookingButton from '@/components/services/BookingButton'

// Define service data
const services = {
  'classic-haircut': {
    title: 'Premium Classic Haircut Service in Kubwa, Abuja, Nigeria',
    description: 'Experience precision haircuts that enhance your natural features at Identistyle Barbershop, the best barbershop in Kubwa, Abuja. Expert barbers combining traditional techniques with modern trends.',
    icon: Scissors,
    features: ['Precision cutting techniques in Kubwa', 'Style consultation included', 'Modern and traditional styles for Abuja men'],
    includes: [
      'Professional consultation',
      'Shampoo and conditioning',
      'Precision haircut',
      'Style finishing',
      'Styling tips and product recommendations'
    ],
    bookingMessage: 'Hello, I would like to book a Classic Haircut at Identistyle Barbershop - Best Barbershop in Kubwa, Abuja.'
  },
  'beard-trim': {
    title: 'Professional Beard Trim & Styling in Kubwa, Abuja, Nigeria',
    description: 'Transform your beard with our professional trimming and styling service at Identistyle Barbershop, the top barbershop in Kubwa, Abuja. Expert barbers helping you achieve the perfect beard shape.',
    icon: Bean,
    features: ['Custom beard shaping in Abuja', 'Professional styling', 'Beard care consultation for Kubwa clients'],
    includes: [
      'Beard consultation',
      'Hot towel treatment',
      'Precise trimming',
      'Shape styling',
      'Beard oil application',
      'Maintenance advice'
    ],
    bookingMessage: 'Hello, I would like to book a Beard Trim & Styling service at Identistyle Barbershop - Best Barbershop in Kubwa, Abuja.'
  }
}

// Generate metadata for each service
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as keyof typeof services]
  
  if (!service) {
    return {
      title: 'Service Not Found - Identistyle Barbershop',
      description: 'The requested service could not be found at the best barbershop in Kubwa, Abuja.'
    }
  }

  return {
    title: `${service.title} | Identistyle Barbershop - Best Barbershop in Kubwa, Abuja`,
    description: service.description,
    keywords: `barbershop in kubwa, barbershop in abuja, ${slug.replace('-', ' ')} kubwa, haircut abuja, grooming kubwa, identistyle barbershop`,
    openGraph: {
      title: `${service.title} | Identistyle Barbershop`,
      description: service.description,
      type: 'website',
      url: `https://identitysalonng.com/services/${slug}`,
      images: [
        {
          url: `https://identitysalonng.com/assets/${slug}.jpg`,
          width: 800,
          height: 600,
          alt: `${service.title} at Identistyle Barbershop in Kubwa, Abuja`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Identistyle Barbershop`,
      description: service.description,
      images: [`https://identitysalonng.com/assets/${slug}.jpg`],
    }
  }
}

// Service component
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-800">
          {service.title}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              Expert Service in Kubwa, Abuja
            </h2>
            <p className="text-neutral-600 mb-4">{service.description}</p>
            <ul className="space-y-3 text-neutral-600">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-neutral-800" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              What's Included
            </h2>
            <ul className="space-y-4 text-neutral-600">
              {service.includes.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-neutral-100 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            Why Choose Identistyle Barbershop in Kubwa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Expert Professionals</h3>
              <p className="text-neutral-600">
                Our skilled professionals have years of experience and stay updated with the latest trends in Abuja.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Premium Experience</h3>
              <p className="text-neutral-600">
                Enjoy a luxurious grooming experience in our modern, well-equipped barbershop in Kubwa, Abuja, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <BookingButton 
            serviceName={service.title}
            bookingMessage={service.bookingMessage}
          />
        </div>

        {/* Add Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: {
                '@type': 'BarberShop',
                name: 'Identistyle Barbershop - Best Barbershop in Kubwa, Abuja',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Hamza Abdullahi Rd, opp. Aso savings, Junction',
                  addressLocality: 'Kubwa',
                  addressRegion: 'Abuja, Federal Capital Territory',
                  postalCode: '901101',
                  addressCountry: 'NG'
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 9.1333,
                  longitude: 7.3833
                }
              },
              areaServed: {
                '@type': 'City',
                name: 'Kubwa, Abuja, Nigeria'
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'NGN'
                }
              }
            })
          }}
        />
      </div>
    </main>
  )
}
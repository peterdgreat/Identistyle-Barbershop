import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Scissors, Bean } from 'lucide-react'
import BookingButton from '@/components/services/BookingButton'

// Define service data
const services = {
  'classic-haircut': {
    title: 'Premium Classic Haircut Service in Abuja',
    description: 'Experience precision haircuts that enhance your natural features at IdentiStyle Barbershop. Expert barbers combining traditional techniques with modern trends in Abuja.',
    icon: Scissors,
    features: ['Precision cutting techniques', 'Style consultation included', 'Modern and traditional styles'],
    includes: [
      'Professional consultation',
      'Shampoo and conditioning',
      'Precision haircut',
      'Style finishing',
      'Styling tips and product recommendations'
    ],
    bookingMessage: 'Hello, I would like to book a Classic Haircut at IdentiStyle Barbershop.'
  },
  'beard-trim': {
    title: 'Professional Beard Trim & Styling in Abuja',
    description: 'Transform your beard with our professional trimming and styling service at IdentiStyle Barbershop. Expert barbers helping you achieve the perfect beard shape in Abuja.',
    icon: Bean,
    features: ['Custom beard shaping', 'Professional styling', 'Beard care consultation'],
    includes: [
      'Beard consultation',
      'Hot towel treatment',
      'Precise trimming',
      'Shape styling',
      'Beard oil application',
      'Maintenance advice'
    ],
    bookingMessage: 'Hello, I would like to book a Beard Trim & Styling service at IdentiStyle Barbershop.'
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
      title: 'Service Not Found - IdentiStyle Barbershop',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${service.title} - IdentiStyle Barbershop`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
      url: `https://www.identitysalonng.com/services/${slug}`,
      images: [
        {
          url: `https://www.identitysalonng.com/assets/${slug}.jpg`,
          width: 800,
          height: 600,
          alt: `${service.title} at IdentiStyle Barbershop`
        }
      ]
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
              Expert Service
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
            Why Choose IdentiStyle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Expert Professionals</h3>
              <p className="text-neutral-600">
                Our skilled professionals have years of experience and stay updated with the latest trends.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Premium Experience</h3>
              <p className="text-neutral-600">
                Enjoy a luxurious grooming experience in our modern, well-equipped barbershop in Kubwa, Abuja.
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
                '@type': 'LocalBusiness',
                name: 'IdentiStyle Barbershop',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Hamza Abdullahi Rd, opp. Aso savings, Junction',
                  addressLocality: 'Abuja',
                  addressRegion: 'Federal Capital Territory',
                  postalCode: '901101',
                  addressCountry: 'NG'
                }
              },
              areaServed: {
                '@type': 'City',
                name: 'Abuja'
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
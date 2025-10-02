import React from 'react'
import { Bean as Beard } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../utils/analytics'

export default function BeardTrim() {
  const location = useLocation()

  React.useEffect(() => {
    trackPageView(location.pathname)
  }, [location])

  const handleBooking = () => {
    window.location.href = 'https://wa.me/2347034218566?text=Hello, I would like to book a Beard Trim & Styling service at Identistyle Barbershop - Best Barbershop in Kubwa, Abuja.'
  }

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-800">
          Professional Beard Trim & Styling in Kubwa, Abuja, Nigeria
        </h1>
    

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              Expert Beard Grooming at Top Barbershop in Kubwa
            </h2>
            <p className="text-neutral-600 mb-4">
              Transform your beard with our professional trimming and styling service at Identistyle Barbershop, the best barbershop in Kubwa, Abuja. Our expert barbers will help you achieve the perfect beard shape that complements your face and style in Nigeria's capital.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <Beard className="w-5 h-5 text-neutral-800" />
                Custom beard shaping in Abuja
              </li>
              <li className="flex items-center gap-2">
                <Beard className="w-5 h-5 text-neutral-800" />
                Professional styling for Kubwa clients
              </li>
              <li className="flex items-center gap-2">
                <Beard className="w-5 h-5 text-neutral-800" />
                Beard care consultation at premier barbershop
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              Service Includes
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>✓ Beard consultation</li>
              <li>✓ Hot towel treatment</li>
              <li>✓ Precise trimming</li>
              <li>✓ Shape styling</li>
              <li>✓ Beard oil application</li>
              <li>✓ Maintenance advice</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-100 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            The Identistyle Beard Experience in Kubwa, Abuja
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Skilled Professionals</h3>
              <p className="text-neutral-600">
                Our barbers are experts in beard grooming, understanding different facial hair types and growth patterns, serving clients at the best barbershop in Kubwa, Abuja.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Premium Products</h3>
              <p className="text-neutral-600">
                We use high-quality beard care products to ensure your beard looks and feels its best, available at our top-rated barbershop in Abuja, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleBooking}
            className="bg-neutral-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-700 transition-all duration-300"
          >
            Book Your Beard Trim Now
          </button>
        </div>
      </div>
    </main>
  )
}
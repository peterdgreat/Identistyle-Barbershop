import React from 'react'
import { Scissors } from 'lucide-react'
import { usePathname } from 'next/navigation';
import { trackPageView } from '../../utils/analytics'

export default function ClassicHaircut() {
 const pathname = usePathname();

  React.useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  const handleBooking = () => {
    window.location.href = 'https://wa.me/2347034218566?text=Hello, I would like to book a Classic Haircut at Identistyle Barbershop - Best Barbershop in Kubwa, Abuja.'
  }

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-800">
          Premium Classic Haircut Service in Kubwa, Abuja, Nigeria
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              Expert Haircut Service at Top Barbershop in Kubwa
            </h2>
            <p className="text-neutral-600 mb-4">
              At Identistyle Barbershop, the best barbershop in Kubwa, Abuja, we specialize in delivering precision haircuts that enhance your natural features and style. Our experienced barbers combine traditional techniques with modern trends to create the perfect look for you in Nigeria's capital.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Precision cutting techniques in Abuja
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Style consultation included for Kubwa clients
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Modern and traditional styles at premier barbershop
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              What's Included
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>✓ Professional consultation</li>
              <li>✓ Shampoo and conditioning</li>
              <li>✓ Precision haircut</li>
              <li>✓ Style finishing</li>
              <li>✓ Styling tips and product recommendations</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-100 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            Why Choose Identistyle Barbershop for Your Haircut in Kubwa
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Expert Barbers</h3>
              <p className="text-neutral-600">
                Our skilled professionals have years of experience in men's grooming and stay updated with the latest trends, serving clients at the best barbershop in Kubwa, Abuja.
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
          <button
            onClick={handleBooking}
            className="bg-neutral-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-700 transition-all duration-300"
          >
            Book Your Classic Haircut Now
          </button>
        </div>
      </div>
    </main>
  )
}
import React from 'react'
import { Scissors } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../utils/analytics'

export default function ClassicHaircut() {
  const location = useLocation()

  React.useEffect(() => {
    trackPageView(location.pathname)
  }, [location])

  const handleBooking = () => {
    window.location.href = 'https://wa.me/2347034218566?text=Hello, I would like to book a Classic Haircut at IdentiStyle Barbershop.'
  }

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-800">
          Premium Classic Haircut Service in Abuja
        </h1>
        
        {/* <div className="mb-12">
          <img 
            src="/assets/classic-haircut.jpg" 
            alt="Professional Classic Haircut Service at IdentiStyle Barbershop Abuja" 
            className="w-full h-[400px] object-cover rounded-xl mb-6"
          />
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              Expert Haircut Service
            </h2>
            <p className="text-neutral-600 mb-4">
              At IdentiStyle Barbershop, we specialize in delivering precision haircuts that enhance your natural features and style. Our experienced barbers combine traditional techniques with modern trends to create the perfect look for you.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Precision cutting techniques
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Style consultation included
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-neutral-800" />
                Modern and traditional styles
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
            Why Choose IdentiStyle for Your Haircut
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-neutral-800">Expert Barbers</h3>
              <p className="text-neutral-600">
                Our skilled professionals have years of experience in men's grooming and stay updated with the latest trends.
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
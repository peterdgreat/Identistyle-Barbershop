import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { 
  Scissors, 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Bean as Beard,
  Footprints,
  Sparkles,
  CheckCircle2
} from 'lucide-react'

type Service = {
  id: number
  name: string
  description: string
  icon: React.ReactNode
}

function App() {
  const services: Service[] = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Precision cut tailored to your style and face shape",
      icon: <Scissors className="w-8 h-8 text-neutral-600" />
    },
    {
      id: 2,
      name: "Beard Trim & Styling",
      description: "Expert beard grooming and shaping",
      icon: <Beard className="w-8 h-8 text-neutral-600" />
    },
    {
      id: 3,
      name: "Premium Pedicure",
      description: "Luxurious foot care treatment ",
      icon: <Footprints className="w-8 h-8 text-neutral-600" />
    }
  ]

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`
  }

  const handleBooking = () => {
    window.location.href = 'https://www.fresha.com/a/identistyle-barbershop-kubwa-2-2-plot-168-malam-madori-road-duyjcr6l/all-offer?venue=true&pId=2534450'
  }

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <img 
            src="/logo.jpg" 
            alt="Identity Salon Logo" 
            className="w-32 h-32 mb-6 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">IDENTISTYLE BARBERSHOP</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-neutral-200">
            Discover and maintain your identity through premium grooming services
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-all duration-300"
          >
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-neutral-50 p-8 rounded-xl hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-lg"
                onClick={handleBooking}
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-neutral-800">{service.name}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-neutral-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <Scissors className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Stylists</h3>
              <p className="text-neutral-400">
                Our team of skilled professionals specializes in men's grooming
              </p>
            </div>
            <div className="text-center group">
              <Clock className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Flexible Hours</h3>
              <p className="text-neutral-400">
                Open 7 days a week with convenient booking times
              </p>
            </div>
            <div className="text-center group">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Service</h3>
              <p className="text-neutral-400">
                Quality products and attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Two Two, Opp Aso Savings</span>
            </div>
            <div className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300">
              <Phone className="w-6 h-6 mr-2" />
              <span>(234)7034218566</span>
            </div>
            <div className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300">
              <Mail className="w-6 h-6 mr-2" />
              <span>info@identitysalonng.com</span>
            </div>
          </div>
        </div>
      </section>

    
      <Toaster position="top-center" />
    </>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
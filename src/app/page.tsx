'use client';

import Image from 'next/image'
import Link from 'next/link'
import { 
  Scissors, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Bean as Beard,
  CheckCircle2
} from 'lucide-react'
import { trackEvent } from '../utils/analytics'

type Service = {
  id: number
  name: string
  description: string
  icon: React.ReactNode
  path: string
}

export default function Home() {
  const services: Service[] = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Precision cut tailored to your style and face shape at the best barbershop in Kubwa, Abuja",
      icon: <Scissors className="w-8 h-8 text-neutral-600" />,
      path: "/services/classic-haircut"
    },
    {
      id: 2,
      name: "Beard Trim & Styling",
      description: "Expert beard grooming and shaping services in Abuja's top barbershop",
      icon: <Beard className="w-8 h-8 text-neutral-600" />,
      path: "/services/beard-trim"
    }
  ]

  const handleBooking = () => {
    trackEvent('booking_click', {
      location: 'hero_section'
    })
    window.location.href = 'https://wa.me/2347034218566?text=Hello, I would like to book an appointment at Identistyle Barbershop - Best Barbershop in Kubwa, Abuja.'
  }

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center relative"
      >
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Identistyle Barbershop - Best Barbershop in Kubwa, Abuja, Nigeria"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <Image 
            src="/logo.jpg" 
            alt="Identistyle Barbershop - Premier Barbershop in Kubwa & Abuja" 
            width={128}
            height={128}
            className="mb-6 object-contain"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="block">KUBWA & ABUJA'S #1</span>
            <span className="block">PREMIUM BARBERSHOP</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-neutral-200">
            Discover the best barbershop in Kubwa, Abuja at Identistyle Barbershop. Rated #1 for premium haircuts, expert grooming, and men's styling services in Nigeria's capital.
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-100 transition-all duration-300"
            aria-label="Book appointment at best barbershop in Kubwa, Abuja via WhatsApp"
          >
            Book Your Appointment Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white" aria-labelledby="services-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-title" className="text-3xl font-bold text-center mb-12 text-neutral-800">
            Premium Barbershop Services in Kubwa, Abuja & Nigeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={service.path}
                className="bg-neutral-50 p-8 rounded-xl hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                role="listitem"
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-neutral-800">{service.name}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-neutral-900 py-20 px-4" aria-labelledby="why-choose-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-choose-title" className="text-3xl font-bold text-center mb-12 text-white">
            Why Identistyle Barbershop is Kubwa & Abuja's Top-Rated Barbershop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <Scissors className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Barbers</h3>
              <p className="text-neutral-400">
                Master barbers specializing in premium haircuts and grooming in Kubwa, Abuja
              </p>
            </div>
            <div className="text-center group">
              <Clock className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Convenient Hours</h3>
              <p className="text-neutral-400">
                Open daily for flexible appointments at your local barbershop in Abuja
              </p>
            </div>
            <div className="text-center group">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Experience</h3>
              <p className="text-neutral-400">
                High-quality products and personalized service for men in Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white" id="contact" aria-labelledby="contact-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contact-title" className="text-3xl font-bold text-center mb-12 text-neutral-800">
            Visit the Best Barbershop in Kubwa, Abuja Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <address className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300 not-italic">
              <MapPin className="w-6 h-6 mr-2" aria-hidden="true" />
              <span>Hamza Abdullahi Rd, opp. Aso savings, Junction, Kubwa, Abuja 901101, Federal Capital Territory</span>
            </address>
            <div className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300">
              <Phone className="w-6 h-6 mr-2" aria-hidden="true" />
              <a href="tel:+2347034218566" className="hover:underline">(234)7034218566</a>
            </div>
            <div className="flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors duration-300">
              <Mail className="w-6 h-6 mr-2" aria-hidden="true" />
              <a href="mailto:identitysalonng@gmail.com" className="hover:underline">identitysalonng@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
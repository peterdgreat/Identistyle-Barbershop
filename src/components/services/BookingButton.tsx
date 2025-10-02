'use client'

import { trackEvent } from '@/utils/analytics'

interface BookingButtonProps {
  serviceName: string
  bookingMessage: string
}

export default function BookingButton({ serviceName, bookingMessage }: BookingButtonProps) {
  const handleBooking = () => {
    // Track the booking event
    trackEvent('booking_initiated', {
      service_name: serviceName
    })

    // Format the WhatsApp message and URL
    const phoneNumber = '2347034218566' // Your business WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(bookingMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleBooking}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
    >
      Book on WhatsApp
    </button>
  )
}
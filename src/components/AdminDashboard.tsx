import React, { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { enUS } from 'date-fns/locale'
import { supabase } from '../lib/supabase'
import { CheckCircle2, XCircle, Clock } from 'lucide-react'
import { toast } from 'react-hot-toast'
import 'react-big-calendar/lib/css/react-big-calendar.css'

type Service = {
  id: number
  name: string
  duration: string
  price: number
  description: string
  icon: React.ReactNode
}

type Booking = {
  id: string
  service_id: number
  customer_name: string
  email: string
  phone: string
  whatsapp: string
  booking_date: string
  booking_time: string
  status: string
  created_at: string
}

type AdminDashboardProps = {
  services: Service[]
}

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const AdminDashboard: React.FC<AdminDashboardProps> = ({ services }) => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'calendar' | 'list'>('calendar')

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('booking_date', { ascending: true })

      if (error) throw error

      setBookings(data || [])
    } catch (error) {
      console.error('Error fetching bookings:', error)
      toast.error('Failed to load bookings')
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id)

      if (error) throw error

      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, status } : booking
      ))

      toast.success(`Booking ${status} successfully`)
    } catch (error) {
      console.error('Error updating booking:', error)
      toast.error('Failed to update booking status')
    }
  }

  const getServiceName = (serviceId: number) => {
    return services.find(service => service.id === serviceId)?.name || 'Unknown Service'
  }

  const StatusBadge = ({ status }: { status: string }) => {
    const statusStyles = {
      pending: 'bg-yellow-400/10 text-yellow-400',
      confirmed: 'bg-green-400/10 text-green-400',
      cancelled: 'bg-red-400/10 text-red-400'
    }[status] || 'bg-neutral-400/10 text-neutral-400'

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  const calendarEvents = bookings.map(booking => {
    const [hours, minutes] = booking.booking_time.split(':')
    const start = new Date(booking.booking_date)
    start.setHours(parseInt(hours), parseInt(minutes))
    
    const end = new Date(start)
    end.setHours(start.getHours() + 1)

    return {
      title: `${getServiceName(booking.service_id)} - ${booking.customer_name}`,
      start,
      end,
      resource: booking,
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-black p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Booking Management
          </h1>
          <div className="flex gap-4">
            <div className="flex rounded-lg overflow-hidden">
              <button
                onClick={() => setView('calendar')}
                className={`px-4 py-2 ${
                  view === 'calendar'
                    ? 'bg-white text-black'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 ${
                  view === 'list'
                    ? 'bg-white text-black'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                List
              </button>
            </div>
            <button
              onClick={fetchBookings}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        {view === 'calendar' ? (
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <Calendar
              localizer={localizer}
              events={calendarEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700 }}
              className="text-white"
            />
          </div>
        ) : (
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">
                          {booking.customer_name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {getServiceName(booking.service_id)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">
                          {new Date(booking.booking_date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-neutral-400">
                          {booking.booking_time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{booking.email}</div>
                        <div className="text-sm text-neutral-400">
                          {booking.whatsapp || booking.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        {booking.status === 'pending' && (
                          <div className="flex space-x-3">
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              className="text-green-400 hover:text-green-300 transition-colors"
                            >
                              <CheckCircle2 className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
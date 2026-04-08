'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const reservationSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  email: z.string().email('Podaj prawidłowy email'),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,}$/, 'Podaj prawidłowy numer telefonu'),
  date: z.string().min(1, 'Wybierz datę'),
  time: z.string().min(1, 'Wybierz godzinę'),
  guests: z.coerce.number().min(1, 'Co najmniej 1 osoba').max(12, 'Maksymalnie 12 osób'),
  specialRequests: z.string().optional(),
})

type ReservationFormData = z.infer<typeof reservationSchema>

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationFormData) => {
    try {
      // Integration point - send to your backend
      console.log('Reservation data:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
          ✓ Rezerwacja wysłana! Skontaktujemy się z Tobą wkrótce.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Imię i Nazwisko
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
            placeholder="Jan Kowalski"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
            placeholder="jan@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Telefon
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
            placeholder="+48 123 456 789"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Liczba osób
          </label>
          <input
            {...register('guests')}
            type="number"
            min="1"
            max="12"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
            placeholder="2"
          />
          {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Data
          </label>
          <input
            {...register('date')}
            type="date"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-herb-dark mb-1">
            Godzina
          </label>
          <input
            {...register('time')}
            type="time"
            className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green"
          />
          {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-herb-dark mb-1">
          Uwagi specjalne (opcjonalnie)
        </label>
        <textarea
          {...register('specialRequests')}
          className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green resize-none"
          rows={3}
          placeholder="Np. alergie, uroczystość itp."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-herb-green hover:bg-herb-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Zarezerwuj Stolik'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Potwierdzimy Twoją rezerwację mailem lub SMS-em
      </p>
    </form>
  )
}

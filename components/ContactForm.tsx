'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  email: z.string().email('Podaj prawidłowy email'),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Contact data:', data)
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
          ✓ Wiadomość wysłana! Odpowiemy najszybciej jak się da.
        </div>
      )}

      <div className="mb-4">
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

      <div className="mb-4">
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

      <div className="mb-6">
        <label className="block text-sm font-medium text-herb-dark mb-1">
          Wiadomość
        </label>
        <textarea
          {...register('message')}
          className="w-full px-4 py-2 border border-warm-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-herb-green resize-none"
          rows={5}
          placeholder="Twoja wiadomość..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-herb-green hover:bg-herb-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
      </button>
    </form>
  )
}

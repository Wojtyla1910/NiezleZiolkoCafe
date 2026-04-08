import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Niezłe Ziółko Cafe - Kawiarnia & Bistro',
  description: 'Naturalna kawiarnia z aromatycznymi ziołami, specjalnościowymi kawami i pysznymi śniadaniami. Zarezerwuj stolik już dziś!',
  keywords: 'kawiarnia, bistro, kawa specialty, śniadania, ziołowe napoje, Warsaw',
  openGraph: {
    title: 'Niezłe Ziółko - Kawiarnia & Bistro',
    description: 'Naturalna kawiarnia z aromatycznymi ziołami, specjalnościowymi kawami i pysznymi śniadaniami.',
    type: 'website',
    locale: 'pl_PL',
  },
  alternates: {
    canonical: 'https://niebleziolko.pl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-cream text-gray-900 font-sans">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

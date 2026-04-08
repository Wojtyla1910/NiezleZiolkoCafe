'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Zarezerwuj Stolik',
  ctaLink = '/reservations',
  backgroundImage = 'https://images.unsplash.com/photo-1521017874891-8264482acb0c?w=1200&h=600&fit=crop',
}: HeroProps) {
  return (
    <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 max-w-4xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-100"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href={ctaLink}
            className="bg-herb-green hover:bg-herb-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {ctaText}
          </Link>
          <Link
            href="/menu"
            className="bg-white hover:bg-warm-cream text-herb-dark px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Zobacz Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-warm-cream/95 backdrop-blur-sm border-b border-warm-beige shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-herb-green rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">Z</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline text-herb-dark">
              Niezłe Ziółko Cafe
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="text-herb-dark hover:text-herb-green font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-herb-dark hover:text-herb-green font-medium">
              O nas
            </Link>
            <Link href="/contact" className="text-herb-dark hover:text-herb-green font-medium">
              Kontakt
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/reservations"
            className="bg-herb-green text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-herb-dark transition-colors font-medium text-sm"
          >
            Zarezerwuj
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-3 border-t border-warm-beige"
          >
            <Link href="/menu" className="text-herb-dark hover:text-herb-green py-2">
              Menu
            </Link>
            <Link href="/about" className="text-herb-dark hover:text-herb-green py-2">
              O nas
            </Link>
            <Link href="/contact" className="text-herb-dark hover:text-herb-green py-2">
              Kontakt
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuSection from '@/components/MenuSection'

const categories = [
  {
    title: "Matcha na gorąco",
    note: "Możemy zamienić matchę na hojichę w każdym powyższym napoju.",
    items: [
      { name: "Matcha Latte", price: 21 },
      { name: "Hojicha Latte", price: 21 },
      { name: "Różana", price: 24 },
      { name: "Lawendowa", price: 23 },
      { name: "Złota", price: 22 },
      { name: "Biała Czekolada + Cynamon", price: 27 },
      { name: "Daktyl + Banan", price: 24 }
    ]
  },
  {
    title: "Matcha na lodzie",
    items: [
      { name: "Matcha", price: 22 },
      { name: "Earl Grey", price: 25 },
      { name: "Prażony Czarny Sezam", price: null },
      { name: "Lawendowa", price: 23 },
      { name: "Różana", price: 24 },
      { name: "Banan & Karmel", price: 26 },
      { name: "Pistacjowa", price: 27 }
    ]
  },
  {
    title: "Kakao / inne",
    items: [
      { name: "Kakao Ceremonialne", price: 25 },
      { name: "Gorąca Czekolada", price: null }
    ]
  },
  {
    title: "Kawa na gorąco",
    items: [
      { name: "Espresso", price: 9 },
      { name: "Latte", price: 14 },
      { name: "Czarna", price: 12 },
      { name: "Kawkao", price: 23 },
      { name: "Prażony Orzech Laskowy", price: 25 }
    ]
  },
  {
    title: "Kawa na lodzie",
    items: [
      { name: "Ice Latte", price: 19 },
      { name: "Ice Americano", price: 19 },
      { name: "Tonik Espresso", price: 21 }
    ]
  }
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("Matcha na gorąco")

  const activeCategory = categories.find(cat => cat.title === activeTab)

  return (
    <main>
      {/* Page Header */}
      <section className="bg-herb-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Nasze Menu</h1>
          <p className="text-warm-cream mt-2">Każda pozycja przygotowana z pasją z naturalnych składników</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 bg-white shadow-sm z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === cat.title
                    ? 'bg-herb-green text-white shadow-md'
                    : 'bg-warm-beige text-herb-dark hover:bg-warm-cream border border-warm-beige'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-warm-cream">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MenuSection
                  title={activeCategory.title}
                  items={activeCategory.items}
                  note={activeCategory.note}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

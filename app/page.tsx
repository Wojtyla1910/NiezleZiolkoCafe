import Hero from '@/components/Hero'
import MenuCard from '@/components/MenuCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import Image from 'next/image'

const featuredMenu = [
  {
    name: 'Matcha Latte',
    description: 'Tradycyjna japońska matcha z mlekiem',
    price: 21,
    category: 'Matcha',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821b?w=400&h=300&fit=crop',
  },
  {
    name: 'Hojicha Latte',
    description: 'Delikatna, prażona zielona herbata z mlekiem',
    price: 21,
    category: 'Matcha',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop',
  },
  {
    name: 'Różana Matcha',
    description: 'Matcha z nutą róży i delikatną słodyczą',
    price: 24,
    category: 'Matcha',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  },
  {
    name: 'Kakao Ceremonialne',
    description: 'Intensywne, naturalne kakao o głębokim smaku',
    price: 25,
    category: 'Kakao',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
  },
  {
    name: 'Espresso',
    description: 'Klasyczne włoskie espresso',
    price: 9,
    category: 'Kawa',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
  },
  {
    name: 'Tonik Espresso',
    description: 'Orzeźwiające połączenie espresso i toniku',
    price: 21,
    category: 'Kawa na lodzie',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
  },
]

const testimonials = [
  {
    quote: 'Najlepsza kawa w mieście! Atmosfera jest niesamowita, a zespół zawsze miły.',
    author: 'Anna K.',
    rating: 5,
  },
  {
    quote: 'Uwielbiam ziołowe napoje. Czuję się tu jak w domu.',
    author: 'Piotr W.',
    rating: 5,
  },
  {
    quote: 'Matcha jest pyszna, a ceny rozsądne. Polecam!',
    author: 'Maria Z.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero
        title="Niezłe Ziółko Cafe"
        subtitle="Naturalna kawiarnia pełna aromatów, herbat i naturalnych smaków. Twoim domem poza domem."
        backgroundImage="https://www.whitemad.pl/wp-content/uploads/2022/09/paradiso.png"
      />

      {/* Featured Menu */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-herb-dark mb-4">
              Popularne Pozycje
            </h2>
            <p className="text-gray-600 text-lg">
              Najczęściej wybierane napoje przez naszych gości
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredMenu.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-herb-green hover:bg-herb-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Pełne Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1444253904435-c63d79207129?w=600&h=400&fit=crop"
                alt="O nas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-herb-dark mb-4">
                Nasza Historia
              </h2>
              <p className="text-gray-600 mb-4">
                Niezłe Ziółko powstało z pasji do naturnych smaków i dobrej kawy. Wierzymy, że każdą filiżankę powinien towarzyszyć uśmiech i komfortowa atmosfera.
              </p>
              <p className="text-gray-600 mb-6">
                Wszystkie nasze ziółka pochodzą z certyfikowanych źródeł. Kofę importujemy z małych plantacji, gdzie znamy każdego producenta.
              </p>
              <Link
                href="/about"
                className="inline-block bg-herb-green hover:bg-herb-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-herb-dark mb-12 text-center">
            Co Mówią Nasi Goście
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-herb-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Zarezerwuj Stolik Już Teraz
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Popularne miejsce - rezerwacje zapewniają miejsce na pewno!
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-herb-green hover:bg-herb-light text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Zarezerwuj Stolik
          </Link>
        </div>
      </section>
    </main>
  )
}

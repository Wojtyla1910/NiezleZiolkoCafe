import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt - Niezłe Ziółko',
  description: 'Skontaktuj się z nami. Odpowiadamy na wszystkie pytania.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-herb-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Skontaktuj Się z Nami</h1>
          <p className="text-warm-cream mt-2">Chętnie odpowiemy na Twoje pytania</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-herb-dark mb-8">
                Informacje Kontaktowe
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-herb-dark mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Bohaterów Monte Cassino 5A,<br />
                    15-873 Białystok
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-herb-dark mb-2">Telefon</h3>
                  <a href="tel:+48123456789" className="text-herb-green hover:text-herb-dark font-semibold">
                    +48 576 788 669
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-herb-dark mb-2">Email</h3>
                  <a href="mailto:info@niebleziolko.pl" className="text-herb-green hover:text-herb-dark font-semibold">
                    info@niebleziolko.pl
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-herb-dark mb-2">Godziny Otwarcia</h3>
                  <p className="text-gray-600">
                    Poniedziałek - Piątek: 10:00 - 17:00<br />
                    Sobota: 10:00 - 15:00<br />
                    Niedziela: 10:00 - 15:00
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-herb-dark mb-2">Obserwuj Nas</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/niezle_ziolko_cafe" className="text-herb-green hover:text-herb-dark font-semibold">
                      Instagram
                    </a>
                    <a href="#" className="text-herb-green hover:text-herb-dark font-semibold">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.7373431858023!2d23.1380889!3d53.1328604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffd8f0599e31d%3A0xbedc5dd0b4b3c6e5!2zTmllesWCZSBaacOzxYJrbyBDYWZl!5e0!3m2!1spl!2spl!4v1775568300733!5m2!1spl!2spl"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-herb-dark mb-8">
                Wyślij Nam Wiadomość
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

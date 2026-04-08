import type { Metadata } from 'next'
import ReservationForm from '@/components/ReservationForm'

export const metadata: Metadata = {
  title: 'Rezerwacje - Niezłe Ziółko',
  description: 'Zarezerwuj stolik w Niezłym Ziółku. Szybko, łatwo i bezpłatnie.',
}

export default function ReservationsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-herb-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Zarezerwuj Stolik</h1>
          <p className="text-warm-cream mt-2">Rezerwuj szybko i bezstresowo</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-cream">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-herb-dark mb-4 text-center">
              Informacje o Rezerwacji
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: 'Adres',
                  value: 'Bohaterów Monte Cassino 5A, 15-873 Białystok',
                },
                {
                  label: 'Telefon',
                  value: '+48 576 788 669',
                },
                {
                  label: 'Godziny',
                  value: 'Pon-Pt: 10:00-17:00',
                },
              ].map((info) => (
                <div key={info.label} className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                  <p className="font-semibold text-herb-dark">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          <ReservationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-herb-dark mb-8 text-center">
            Często Zadawane Pytania
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Jak długo zajmuje rezerwacja?',
                a: 'Standardowa rezerwacja to 2 godziny. W szczególnych przypadkach możemy dogadać się inaczej.',
              },
              {
                q: 'Czy mogę anulować rezerwację?',
                a: 'Tak, anulacje do 24h przed rezerwacją są bezpłatne.',
              },
              {
                q: 'Czy potrzeba kaucji?',
                a: 'Nie, kaucja nie jest wymagana. Ale prosimy poinformować nas o zmianach.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-warm-cream p-4 rounded-lg">
                <h3 className="font-bold text-herb-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

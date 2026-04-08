import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O Nas - Niezłe Ziółko',
  description: 'Poznaj historię Niezłego Ziółka, naszą misję i wartości.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-herb-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Nasza Historia</h1>
          <p className="text-warm-cream mt-2">Kawiarnia zrodzona z pasji do naturalnych smaków</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <Image
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729346?w=600&h=400&fit=crop"
              alt="Nasza kawiarnia"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="font-serif text-3xl font-bold text-herb-dark mb-4">
                Jak Się Zaczęło
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Niezłe Ziółko powstało w 2018 roku z pomysłu nasze twórców, którzy podróżowali po świecie poszukując najlepszych kaw i ziół. Na jednej z wysp zamieszkanej przez zakonnice, odkryli pradawne receptury na aromatyczne mikstury, które od pokoleń były przygotowywane ręcznie.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Zainspirrowani tą tradycją oraz naturalnym spokojem miejsca, postanowili stworzyć kawę, gdzie każdy może poczuć tę samą magię – połączenie natury, tradycji i współczesności.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-herb-dark mb-8 text-center">
              Nasze Wartości
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Naturalność',
                  description: 'Wszystkie nasze ziołę i kawy pochodzą ze zweryfikowanych źródeł. Żadnych sztucznych dodatków.',
                  icon: '🌿',
                },
                {
                  title: 'Jakość',
                  description: 'Nie idziemy na kompromisy. Każda filiżanka jest przygotowana z precyzją i zaangażowaniem.',
                  icon: '✨',
                },
                {
                  title: 'Gościnność',
                  description: 'Uważamy, że każdy gość zasługuje na uśmiech i poczucie domowego ciepła.',
                  icon: '💛',
                },
              ].map((value) => (
                <div key={value.title} className="bg-warm-cream p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-herb-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-herb-dark mb-12 text-center">
            Nasz Zespół
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Magda',
                role: 'Współzałożycielka & Barista',
                bio: 'Pasjonata kaw specialty z 10-letnim doświadczeniem.',
              },
              {
                name: 'Łukasz',
                role: 'Współzałożyciel & Chef',
                bio: 'Kucharz krawiowy z miłością do naturalnych smaków.',
              },
            ].map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 mx-auto bg-herb-light rounded-full mb-4" />
                <h3 className="font-serif text-xl font-bold text-herb-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-herb-green font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-herb-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">Chcesz Nas Odwiedzić?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Zaproszamy Cię do naszego przytulnego lokalu. Czekamy na Ciebie!
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-herb-green hover:bg-herb-light text-white px-10 py-4 rounded-lg font-bold transition-colors"
          >
            Zarezerwuj Stolik
          </Link>
        </div>
      </section>
    </main>
  )
}

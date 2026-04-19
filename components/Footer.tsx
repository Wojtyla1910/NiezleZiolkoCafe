import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-herb-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Niezłe Ziółko</h3>
            <p className="text-sm text-gray-300">
              Naturalna kawiarnia z najlepszymi ziołami, kawą oraz matchą w mieście.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-warm-beige transition-colors">Menu</Link></li>
              <li><Link href="/about" className="hover:text-warm-beige transition-colors">O nas</Link></li>
              <li><Link href="/contact" className="hover:text-warm-beige transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Godziny Otwarcia</h4>
            <ul className="space-y-1 text-sm">
              <li>Pon-Pt: 10:00 - 17:00</li>
              <li>Sobota: 10:00 - 15:00</li>
              <li>Niedziela: 10:00 - 15:00</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <p className="text-sm mb-2">
              <a href="tel:+48123456789" className="hover:text-warm-beige transition-colors">
                +48 576 788 669
              </a>
            </p>
            <p className="text-sm mb-2">
              <a href="mailto:info@niebleziolko.pl" className="hover:text-warm-beige transition-colors">
                info@niebleziolko.pl
              </a>
            </p>
            <p className="text-sm">
              Bohaterów Monte Cassino 5A,<br />
              15-873 Białystok
            </p>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-herb-light pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2026 Niezłe Ziółko Cafe. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/niezle_ziolko_cafe" className="text-gray-300 hover:text-warm-beige transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/niezle_ziolko_cafe" className="text-gray-300 hover:text-warm-beige transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

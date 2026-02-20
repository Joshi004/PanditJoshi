import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/puja-samagri', label: 'Puja Samagri' },
  { to: '/videos', label: 'Videos' },
  { to: '/blog', label: 'Dharma Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-ivory-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gold-400 text-3xl font-heading">ॐ</span>
              <span className="font-heading text-xl text-ivory-50 font-bold">Pandit Joshi</span>
            </div>
            <p className="font-body text-sm text-ivory-300 italic mb-4">|| Radhe Radhe ||</p>
            <p className="font-body text-sm text-ivory-300 leading-relaxed">
              Serving the Hindu community with devotion and tradition since 1995. Ceremonies
              performed at your home, temple, or new venture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-ivory-300 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-gold-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-saffron-400 mt-0.5">✉</span>
                <a
                  href="mailto:panditjoshiji@gmail.com"
                  className="font-body text-sm text-ivory-300 hover:text-saffron-400 transition-colors"
                >
                  panditjoshiji@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron-400 mt-0.5">☎</span>
                <a
                  href="tel:4043863267"
                  className="font-body text-sm text-ivory-300 hover:text-saffron-400 transition-colors"
                >
                  404-386-3267
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron-400 mt-0.5">📍</span>
                <span className="font-body text-sm text-ivory-300">Atlanta, GA & surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown-700 mt-10 pt-6 text-center">
          <p className="font-body text-sm text-ivory-400">
            <span className="text-gold-400 italic">|| Radhe Radhe ||</span>
            {' · '}
            &copy; {new Date().getFullYear()} Pandit Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

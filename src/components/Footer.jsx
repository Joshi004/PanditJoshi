import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/puja-samagri', label: 'Puja Samagri' },
  { to: '/videos', label: 'Videos' },
  { to: '/blog', label: 'Dharma Insights' },
  { to: '/contact', label: 'Contact' },
]

function EnvelopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16h1z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

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
                <span className="text-saffron-400">
                  <EnvelopeIcon />
                </span>
                <a
                  href="mailto:panditjoshiji@gmail.com"
                  className="font-body text-sm text-ivory-300 hover:text-saffron-400 transition-colors"
                >
                  panditjoshiji@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron-400">
                  <PhoneIcon />
                </span>
                <a
                  href="tel:4043863267"
                  className="font-body text-sm text-ivory-300 hover:text-saffron-400 transition-colors"
                >
                  404-386-3267
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-saffron-400">
                  <MapPinIcon />
                </span>
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

const languages = ['Hindi', 'Gujarati', 'Nepali', 'Punjabi', 'English']

function EnvelopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16h1z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center">
        <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
          || Radhe Radhe ||
        </p>
        <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
          Contact Pandit Joshi
        </h1>
        <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
          Reach out to schedule a ceremony, ask a question, or simply say Jai Shri Ram!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-14 flex flex-col gap-6">

        {/* Contact Action Card */}
        <div className="bg-white border border-gold-300 rounded-2xl shadow-sm overflow-hidden">
          {/* Email */}
          <a
            href="mailto:panditjoshiji@gmail.com"
            className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
          >
            <span className="text-saffron-500 group-hover:text-saffron-600 transition-colors">
              <EnvelopeIcon />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-body text-xs uppercase tracking-widest text-brown-600 mb-0.5">Email</p>
              <p className="font-body text-base font-semibold text-maroon-800 group-hover:text-saffron-600 transition-colors truncate">
                panditjoshiji@gmail.com
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold-400 flex-shrink-0">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:4043863267"
            className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
          >
            <span className="text-saffron-500 group-hover:text-saffron-600 transition-colors">
              <PhoneIcon />
            </span>
            <div className="flex-1">
              <p className="font-body text-xs uppercase tracking-widest text-brown-600 mb-0.5">Phone</p>
              <p className="font-body text-base font-semibold text-maroon-800 group-hover:text-saffron-600 transition-colors">
                404-386-3267
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold-400 flex-shrink-0">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </a>

          {/* Location (non-clickable) */}
          <div className="flex items-center gap-4 px-6 py-5 text-maroon-800">
            <span className="text-saffron-500">
              <MapPinIcon />
            </span>
            <div className="flex-1">
              <p className="font-body text-xs uppercase tracking-widest text-brown-600 mb-0.5">Service Area</p>
              <p className="font-body text-base font-semibold text-maroon-800">
                Atlanta, GA &amp; surrounding areas
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white border border-gold-300 rounded-2xl shadow-sm px-6 py-5">
          <h3 className="font-heading text-base text-maroon-800 font-semibold mb-3">
            Ceremonies Performed In
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="font-body text-xs font-semibold text-maroon-800 bg-ivory-100 border border-gold-300 rounded-full px-3 py-1"
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="font-body text-xs text-brown-600 mt-4 leading-relaxed">
            Ceremonies can be performed at your home, temple, or at the opening of a new office or venture.
          </p>
        </div>

        {/* Blessing Quote */}
        <div className="bg-maroon-800 rounded-2xl px-6 py-7 text-center">
          <span className="text-gold-400 text-3xl font-heading block mb-2">ॐ</span>
          <p className="font-heading text-lg text-ivory-50 italic">|| Radhe Radhe ||</p>
          <p className="font-body text-xs text-ivory-300 mt-2 leading-relaxed">
            May your ceremonies bring peace, prosperity, and divine blessings.
          </p>
        </div>

      </div>
    </div>
  )
}

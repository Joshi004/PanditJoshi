import ContactForm from '../components/ContactForm'

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3 bg-white border border-gold-300 rounded-xl shadow-sm p-8">
            <h2 className="font-heading text-2xl text-maroon-800 mb-1">Get In Touch</h2>
            <p className="font-body text-sm text-brown-600 mb-6">
              Fill out the form and Pandit Joshi will respond as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Info panel — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact details */}
            <div className="bg-saffron-500 rounded-xl p-7 text-white">
              <h3 className="font-heading text-xl font-semibold mb-5">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✉</span>
                  <div>
                    <p className="font-body text-xs opacity-75 uppercase tracking-wide mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:panditjoshiji@gmail.com"
                      className="font-body text-sm font-semibold hover:underline break-all"
                    >
                      panditjoshiji@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">☎</span>
                  <div>
                    <p className="font-body text-xs opacity-75 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:4043863267"
                      className="font-body text-sm font-semibold hover:underline"
                    >
                      404-386-3267
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-body text-xs opacity-75 uppercase tracking-wide mb-0.5">
                      Service Area
                    </p>
                    <p className="font-body text-sm">Atlanta, GA & surrounding areas</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Services reminder */}
            <div className="bg-ivory-100 border border-gold-300 rounded-xl p-6">
              <h3 className="font-heading text-lg text-maroon-800 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Hindi', 'Gujarati', 'Nepali', 'Punjabi', 'English'].map((lang) => (
                  <span
                    key={lang}
                    className="font-body text-xs font-semibold text-maroon-800 bg-white border border-gold-300 rounded-full px-3 py-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="font-body text-xs text-brown-600 mt-4 leading-relaxed">
                Ceremonies can be performed at your home, temple, or at the opening of a new
                office or venture.
              </p>
            </div>

            {/* Blessing quote */}
            <div className="bg-maroon-800 rounded-xl p-6 text-center">
              <span className="text-gold-400 text-3xl font-heading block mb-2">ॐ</span>
              <p className="font-heading text-lg text-ivory-50 italic">|| Radhe Radhe ||</p>
              <p className="font-body text-xs text-ivory-300 mt-2">
                May your ceremonies bring peace, prosperity, and divine blessings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

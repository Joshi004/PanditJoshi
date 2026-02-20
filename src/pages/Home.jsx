import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const timeline = [
  { year: '1993', event: 'First international visit to London, UK for Vishwa Mangal Mahotsava, accompanied by Swami Chidananda Ji and Ramesh Bhai Ojha Ji from Porbandar.' },
  { year: '1995', event: 'Arrived in the United States to serve the growing Hindu community.' },
  { year: '1995–2001', event: 'Served as Priest at HCC (Hindu Cultural Center), Knoxville, TN.' },
  { year: '2001–2009', event: 'Served as Head Priest at ICRC (Sanatan Mandir, Atlanta, GA).' },
  { year: '2009–Present', event: 'Providing priestly services independently across Atlanta and beyond.' },
]

const languages = ['Hindi', 'Gujarati', 'Nepali', 'Punjabi', 'English']

export default function Home() {
  return (
    <>
      {/* ── SECTION A: Hero ─────────────────────────────────────── */}
      <section className="mandala-bg bg-ivory-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="rounded-full border-4 border-gold-400 shadow-xl overflow-hidden w-56 h-56 md:w-72 md:h-72">
                <img
                  src="/pandit-joshi.png"
                  alt="Pandit Joshi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-body text-sm italic text-saffron-500 mt-3 tracking-wider">
                || Radhe Radhe ||
              </p>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="font-body text-saffron-500 uppercase tracking-widest text-sm font-semibold mb-2">
                || Radhe Radhe ||
              </p>
              <h1 className="font-heading text-4xl md:text-5xl text-maroon-800 font-bold mb-4 leading-tight">
                Welcome, I am <br className="hidden md:block" />
                Pandit Joshi
              </h1>
              <div className="gold-divider md:mx-0"></div>
              <p className="font-body text-brown-700 text-base md:text-lg leading-relaxed mb-6">
                I perform all religious activities like Satya Narayan Katha, Vastu Shanti,
                Annaprashan, Namakaran, Chudakaran, Threading (Janeu), Wedding Ceremony, Navgraha
                Shanti Hawan, Musical Satya Narayan Puja, Akhanda Ramayan Paath, Mata Ki Chowki,
                Shiva Abhishek, Sunderkand Paath in Ragamalica Bhajan Sandhya, and any other
                musical religious event. These ceremonies can be performed at your home or at the
                opening of a new office or venture.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/puja-samagri" className="btn-primary">
                  View Services
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: About / Journey ─────────────────────────── */}
      <section className="bg-saffron-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About Pandit Joshi</h2>
          <div className="gold-divider"></div>

          {/* Education */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 bg-ivory-50 border border-gold-300 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-2">
                Shashtri Degree
              </h3>
              <p className="font-body text-brown-700 text-sm leading-relaxed">
                Obtained from <strong>Sampurnanda Sanskrit Vishwa Vidyalaya</strong>, Varanasi —
                one of India's most prestigious Sanskrit universities.
              </p>
            </div>
            <div className="flex-1 bg-ivory-50 border border-gold-300 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-2">
                Sangeet Visharad Diploma
              </h3>
              <p className="font-body text-brown-700 text-sm leading-relaxed">
                Obtained from <strong>Prayag Vishwavidyalaya</strong>, Allahabad — a diploma in
                classical Indian music that enriches every ceremony he performs.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <h3 className="font-heading text-2xl text-maroon-800 text-center mb-8">My Journey</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-400 transform md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-2 border-ivory-50 shadow transform md:-translate-x-1/2 mt-1 flex-shrink-0" />
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
                    }`}
                  >
                    <span className="inline-block bg-saffron-500 text-white font-body text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <p className="font-body text-brown-700 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION C: Services Grid ───────────────────────────── */}
      <section className="bg-ivory-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-subtitle">
            Sacred ceremonies performed with devotion, in your home or venue
          </p>
          <div className="gold-divider"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/puja-samagri" className="btn-primary inline-block">
              View Puja Samagri Lists →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION D: Languages ──────────────────────────────── */}
      <section className="bg-maroon-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-gold-400 mb-4">
            Ceremonies Performed in Multiple Languages
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {languages.map((lang) => (
              <span
                key={lang}
                className="font-body text-lg text-ivory-50 font-semibold px-5 py-2 rounded-full border border-gold-400"
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="font-body text-ivory-200 italic text-base">
            "At your home, temple, or at the opening of your new office or venture."
          </p>
        </div>
      </section>

      {/* ── SECTION E: CTA Banner ─────────────────────────────── */}
      <section
        className="py-16"
        style={{
          background: 'linear-gradient(135deg, #E8751A 0%, #C5962E 50%, #d4600f 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
            Looking for a Pandit for your religious ceremony?
          </h2>
          <p className="font-body text-orange-50 text-lg mb-8">
            Reach out today to schedule a puja, hawan, or any ceremony. Serving Atlanta and beyond.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-saffron-600 hover:bg-ivory-100 font-body font-bold text-lg px-10 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Contact Pandit Joshi
          </Link>
        </div>
      </section>
    </>
  )
}

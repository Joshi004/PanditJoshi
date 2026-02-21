import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import ServiceIcon from '../components/ServiceIcon'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import { services } from '../data/services'

const timeline = [
  { year: '1993', event: 'First international visit to London, UK for Vishwa Mangal Mahotsava, accompanied by Swami Chidananda Ji and Ramesh Bhai Ojha Ji from Porbandar.' },
  { year: '1995', event: 'Arrived in the United States to serve the growing Hindu community.' },
  { year: '1995–2001', event: 'Served as Priest at HCC (Hindu Cultural Center), Knoxville, TN.' },
  { year: '2001–2009', event: 'Served as Head Priest at ICRC (Sanatan Mandir, Atlanta, GA).' },
  { year: '2009–Present', event: 'Providing priestly services independently across Atlanta and beyond.' },
]

const languages = ['Hindi', 'Gujarati', 'Nepali', 'Punjabi', 'English']

function ScrollDiplomaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <ellipse cx="10" cy="24" rx="4" ry="16" fill="#fcd34d" stroke="#C5962E" strokeWidth="1.5"/>
      <ellipse cx="38" cy="24" rx="4" ry="16" fill="#fcd34d" stroke="#C5962E" strokeWidth="1.5"/>
      <rect x="10" y="8" width="28" height="32" fill="#fef3c7" stroke="#C5962E" strokeWidth="1"/>
      <line x1="15" y1="16" x2="33" y2="16" stroke="#C5962E" strokeWidth="1" opacity="0.6"/>
      <line x1="15" y1="20" x2="33" y2="20" stroke="#C5962E" strokeWidth="1" opacity="0.6"/>
      <text x="24" y="30" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#C5962E">ॐ</text>
      <circle cx="24" cy="38" r="3" fill="#E8751A"/>
    </svg>
  )
}

function VeenaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <path d="M12 40 L20 16" stroke="#8b6348" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="32" cy="34" r="10" fill="#C5962E"/>
      <circle cx="32" cy="34" r="7" fill="#E8751A" opacity="0.7"/>
      <circle cx="32" cy="34" r="3" fill="#b07d20"/>
      <path d="M20 16 L38 30" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 18 L38 32" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 20 L38 34" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 22 L37 36" stroke="#fcd34d" strokeWidth="0.8"/>
      <circle cx="14" cy="14" r="2" fill="#6b4c36"/>
      <circle cx="18" cy="10" r="2" fill="#6b4c36"/>
      <circle cx="15" cy="16" r="5" fill="#C5962E"/>
      <circle cx="15" cy="16" r="3.5" fill="#E8751A" opacity="0.7"/>
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ── SECTION A: Hero ─────────────────────────────────────── */}
      <section className="mandala-bg bg-ivory-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Photo */}
            <motion.div
              className="flex-shrink-0 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full border-2 border-gold-300 opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <div className="rounded-full border-4 border-gold-400 shadow-xl overflow-hidden w-56 h-56 md:w-72 md:h-72 relative z-10">
                  <img
                    src={`${import.meta.env.BASE_URL}pandit-joshi.png`}
                    alt="Pandit Joshi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <motion.p
                className="font-body text-sm italic text-saffron-500 mt-5 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                || Radhe Radhe ||
              </motion.p>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-body text-saffron-500 uppercase tracking-widest text-sm font-semibold mb-2">
                || Radhe Radhe ||
              </p>
              <h1 className="font-heading text-4xl md:text-5xl text-maroon-800 font-bold mb-4 leading-tight">
                Welcome, I am <br className="hidden md:block" />
                Pandit Joshi
              </h1>
              <motion.div
                className="h-1 bg-gold-500 rounded-full mb-8 mx-auto md:mx-0"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              />
              <p className="font-body text-brown-700 text-base md:text-lg leading-relaxed mb-6">
                I perform all religious activities like Satya Narayan Katha, Vastu Shanti,
                Annaprashan, Namakaran, Chudakaran, Threading (Janeu), Wedding Ceremony, Navgraha
                Shanti Hawan, Musical Satya Narayan Puja, Akhanda Ramayan Paath, Mata Ki Chowki,
                Shiva Abhishek, Sunderkand Paath in Ragamalica Bhajan Sandhya, and any other
                musical religious event. These ceremonies can be performed at your home or at the
                opening of a new office or venture.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/puja-samagri" className="btn-primary">
                    View Services
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn-outline">
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: About / Journey ─────────────────────────── */}
      <section className="bg-saffron-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <h2 className="section-title">About Pandit Joshi</h2>
            <div className="gold-divider"></div>
          </AnimatedSection>

          {/* Education */}
          <StaggerContainer className="flex flex-col md:flex-row gap-6 mb-12" staggerDelay={0.15} delayChildren={0.1}>
            <AnimatedItem className="flex-1">
              <div className="bg-ivory-50 border border-gold-300 rounded-xl p-6 shadow-sm h-full">
                <div className="w-14 h-14 bg-saffron-50 border border-gold-200 rounded-full flex items-center justify-center mb-4">
                  <ScrollDiplomaIcon />
                </div>
                <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-2">
                  Shashtri Degree
                </h3>
                <p className="font-body text-brown-700 text-sm leading-relaxed">
                  Obtained from <strong>Sampurnanda Sanskrit Vishwa Vidyalaya</strong>, Varanasi —
                  one of India's most prestigious Sanskrit universities.
                </p>
              </div>
            </AnimatedItem>
            <AnimatedItem className="flex-1">
              <div className="bg-ivory-50 border border-gold-300 rounded-xl p-6 shadow-sm h-full">
                <div className="w-14 h-14 bg-saffron-50 border border-gold-200 rounded-full flex items-center justify-center mb-4">
                  <VeenaIcon />
                </div>
                <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-2">
                  Sangeet Visharad Diploma
                </h3>
                <p className="font-body text-brown-700 text-sm leading-relaxed">
                  Obtained from <strong>Prayag Vishwavidyalaya</strong>, Allahabad — a diploma in
                  classical Indian music that enriches every ceremony he performs.
                </p>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          {/* Timeline */}
          <AnimatedSection variant="fadeUp">
            <h3 className="font-heading text-2xl text-maroon-800 text-center mb-8">My Journey</h3>
          </AnimatedSection>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-400 transform md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION C: Services Grid ───────────────────────────── */}
      <section className="bg-ivory-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <h2 className="section-title">Services We Offer</h2>
            <p className="section-subtitle">
              Sacred ceremonies performed with devotion, in your home or venue
            </p>
            <div className="gold-divider"></div>
          </AnimatedSection>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            staggerDelay={0.07}
            delayChildren={0.1}
          >
            {services.map((service) => (
              <AnimatedItem key={service.id} variant="fadeUp">
                <ServiceCard service={service} />
              </AnimatedItem>
            ))}
          </StaggerContainer>
          <AnimatedSection variant="fadeUp" delay={0.2} className="text-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/puja-samagri" className="btn-primary">
                View Puja Samagri Lists →
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION D: Languages ──────────────────────────────── */}
      <section className="bg-maroon-800 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="font-heading text-2xl md:text-3xl text-gold-400 mb-6">
              Ceremonies Performed in Multiple Languages
            </h2>
          </AnimatedSection>
          <StaggerContainer
            className="flex flex-wrap justify-center gap-4 mb-6"
            staggerDelay={0.09}
            delayChildren={0.2}
          >
            {languages.map((lang) => (
              <motion.span
                key={lang}
                className="font-body text-lg text-ivory-50 font-semibold px-5 py-2 rounded-full border border-gold-400"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.08, borderColor: '#fcd34d' }}
              >
                {lang}
              </motion.span>
            ))}
          </StaggerContainer>
          <AnimatedSection variant="fadeIn" delay={0.4}>
            <p className="font-body text-ivory-200 italic text-base">
              "At your home, temple, or at the opening of your new office or venture."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION E: CTA Banner ─────────────────────────────── */}
      <section className="py-16 relative overflow-hidden cta-gradient">
        {/* Decorative Om watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-heading text-white opacity-5 text-[18rem] leading-none">ॐ</span>
        </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection variant="scaleIn">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
              Looking for a Pandit for your religious ceremony?
            </h2>
            <p className="font-body text-orange-50 text-lg mb-8">
              Reach out today to schedule a puja, hawan, or any ceremony. Serving Atlanta and beyond.
            </p>
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-saffron-600 hover:bg-ivory-100 font-body font-bold text-lg px-10 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Contact Pandit Joshi
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

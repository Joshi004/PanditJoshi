import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import FaqSection from '../components/FaqSection'

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

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold-400 flex-shrink-0">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.848L0 24l6.335-1.661A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.515-5.21-1.41l-.374-.22-3.76.986.987-3.652-.241-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

function SmsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 flex-shrink-0">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="9" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="15" y1="10" x2="15" y2="10" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center relative overflow-hidden lotus-header-bg">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span className="font-heading text-white opacity-5 text-[14rem] leading-none">ॐ</span>
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
            || Radhe Radhe ||
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
            Contact Pandit Joshi
          </h1>
          <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
            Reach out to schedule a ceremony, ask a question, or simply say Jai Shri Ram!
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-14 flex flex-col gap-6">

        {/* Contact Action Card */}
        <AnimatedSection variant="fadeUp" delay={0.05}>
          <div className="bg-white border border-gold-300 rounded-2xl shadow-sm overflow-hidden">
            {/* Email */}
            <motion.a
              href="mailto:panditjoshiji@gmail.com"
              className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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
              <ChevronRightIcon />
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:4043863267"
              className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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
              <ChevronRightIcon />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/14043863267?text=${encodeURIComponent('Namaste Panditji, I would like to schedule a ceremony.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="text-[#25D366] group-hover:opacity-80 transition-opacity">
                <WhatsAppIcon />
              </span>
              <div className="flex-1">
                <p className="font-body text-xs uppercase tracking-widest text-brown-600 mb-0.5">WhatsApp</p>
                <p className="font-body text-base font-semibold text-maroon-800 group-hover:text-saffron-600 transition-colors">
                  Chat on WhatsApp
                </p>
              </div>
              <ChevronRightIcon />
            </motion.a>

            {/* SMS */}
            <motion.a
              href={`sms:14043863267?body=${encodeURIComponent('Namaste Panditji, I have a quick question: ')}`}
              className="flex items-center gap-4 px-6 py-5 text-maroon-800 hover:bg-saffron-50 transition-colors duration-200 group border-b border-gold-200"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="text-saffron-500 group-hover:text-saffron-600 transition-colors">
                <SmsIcon />
              </span>
              <div className="flex-1">
                <p className="font-body text-xs uppercase tracking-widest text-brown-600 mb-0.5">Text Message</p>
                <p className="font-body text-base font-semibold text-maroon-800 group-hover:text-saffron-600 transition-colors">
                  Send a Quick Query
                </p>
              </div>
              <ChevronRightIcon />
            </motion.a>

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
        </AnimatedSection>

        {/* Languages */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="bg-white border border-gold-300 rounded-2xl shadow-sm px-6 py-5">
            <h3 className="font-heading text-base text-maroon-800 font-semibold mb-3">
              Ceremonies Performed In
            </h3>
            <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.07} delayChildren={0.05}>
              {languages.map((lang) => (
                <motion.span
                  key={lang}
                  className="font-body text-xs font-semibold text-maroon-800 bg-ivory-100 border border-gold-300 rounded-full px-3 py-1"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  {lang}
                </motion.span>
              ))}
            </StaggerContainer>
            <p className="font-body text-xs text-brown-600 mt-4 leading-relaxed">
              Ceremonies can be performed at your home, temple, or at the opening of a new office or venture.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection variant="fadeUp" delay={0.12}>
          <FaqSection />
        </AnimatedSection>

        {/* Blessing Quote */}
        <AnimatedSection variant="scaleIn" delay={0.15}>
          <div className="bg-maroon-800 rounded-2xl px-6 py-7 text-center">
            <motion.span
              className="text-gold-400 text-3xl font-heading block mb-2"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            >
              ॐ
            </motion.span>
            <p className="font-heading text-lg text-ivory-50 italic">|| Radhe Radhe ||</p>
            <p className="font-body text-xs text-ivory-300 mt-2 leading-relaxed">
              May your ceremonies bring peace, prosperity, and divine blessings.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}

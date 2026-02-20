import { motion } from 'framer-motion'
import PujaSamagriAccordion from '../components/PujaSamagriAccordion'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import { pujaSamagriList } from '../data/pujaSamagri'

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 text-gold-500 mt-0.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export default function PujaSamagri() {
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
            Puja Samagri
          </h1>
          <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
            A guide to items needed for each sacred ceremony. Bring these with you or arrange them
            before the puja begins.
          </p>
        </motion.div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tip */}
        <AnimatedSection variant="fadeUp">
          <div className="flex items-start gap-3 bg-white border border-gold-200 rounded-xl p-4 mb-8 shadow-sm">
            <InfoIcon />
            <p className="font-body text-sm text-brown-700 leading-relaxed">
              Tap any ceremony name to expand its samagri list. Items shown as{' '}
              <span className="italic text-brown-400">as needed</span> have no fixed quantity — bring
              them as per availability (e.g. fresh flowers).
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-3" staggerDelay={0.08} delayChildren={0.1}>
          {pujaSamagriList.map((puja) => (
            <AnimatedItem key={puja.id} variant="fadeUp">
              <PujaSamagriAccordion puja={puja} />
            </AnimatedItem>
          ))}
        </StaggerContainer>

        {/* Contact nudge */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="mt-12">
          <div className="text-center bg-white border border-gold-200 rounded-2xl shadow-sm p-8">
            <motion.div
              className="w-10 h-10 bg-saffron-50 border border-saffron-200 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            >
              <span className="text-saffron-500 text-lg font-heading">ॐ</span>
            </motion.div>
            <h3 className="font-heading text-xl text-maroon-800 mb-2">
              Need help understanding what to bring?
            </h3>
            <p className="font-body text-brown-700 text-sm mb-5 max-w-sm mx-auto">
              Pandit Joshi is happy to guide you personally. Reach out and he will walk you through
              everything needed for your ceremony.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Pandit Joshi
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

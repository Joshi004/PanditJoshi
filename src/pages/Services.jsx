import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import ServiceDetailModal from '../components/ServiceDetailModal'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import { services } from '../data/services'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center relative overflow-hidden lotus-header-bg">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
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
            Our Services
          </h1>
          <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto px-4">
            Sacred ceremonies performed with devotion — at your home, temple, or any venue.
          </p>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <AnimatedSection variant="fadeUp" className="mb-10">
          <p className="font-body text-brown-700 text-center text-base max-w-2xl mx-auto leading-relaxed">
            Click on any ceremony below to learn what it involves, glimpse its significance from
            Dharma Insights, and see the Puja Samagri you will need to prepare.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.06}
          delayChildren={0.05}
        >
          {services.map((service) => (
            <AnimatedItem key={service.id} variant="fadeUp">
              <ServiceCard
                service={service}
                onClick={() => setSelectedService(service)}
              />
            </AnimatedItem>
          ))}
        </StaggerContainer>

        {/* Contact nudge */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-14">
          <div className="text-center bg-white border border-gold-200 rounded-2xl shadow-sm p-8">
            <motion.div
              className="w-10 h-10 bg-saffron-50 border border-saffron-200 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            >
              <span className="text-saffron-500 text-lg font-heading">ॐ</span>
            </motion.div>
            <h3 className="font-heading text-xl text-maroon-800 mb-2">
              Ready to schedule a ceremony?
            </h3>
            <p className="font-body text-brown-700 text-sm mb-5 max-w-sm mx-auto">
              Pandit Joshi is happy to guide you through any ceremony. Reach out and he will
              walk you through everything needed.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link to="/contact" className="btn-primary inline-block">
                Contact Pandit Joshi
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Service detail modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  )
}

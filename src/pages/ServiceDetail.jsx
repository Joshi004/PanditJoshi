import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import ServiceIcon from '../components/ServiceIcon'
import { services } from '../data/services'
import { blogPosts } from '../data/blogPosts'
import { pujaSamagriList, CATEGORIES } from '../data/pujaSamagri'

/* ── Category colour accents ── */
const CATEGORY_COLORS = {
  powders: 'bg-amber-50 border-amber-200 text-amber-800',
  liquids: 'bg-blue-50 border-blue-200 text-blue-800',
  food:    'bg-green-50 border-green-200 text-green-800',
  flowers: 'bg-pink-50 border-pink-200 text-pink-800',
  grains:  'bg-yellow-50 border-yellow-200 text-yellow-800',
  incense: 'bg-orange-50 border-orange-200 text-orange-800',
  vessels: 'bg-stone-50 border-stone-200 text-stone-700',
  special: 'bg-purple-50 border-purple-200 text-purple-800',
}

const CATEGORY_ORDER = Object.entries(CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key)

function groupSamagriByCategory(items) {
  const groups = {}
  for (const item of items) {
    const cat = item.category || 'special'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(item)
  }
  return CATEGORY_ORDER
    .filter((key) => groups[key])
    .map((key) => ({ key, label: CATEGORIES[key]?.label || 'Other', items: groups[key] }))
}

function ArrowLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ChecklistIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) return <Navigate to="/services" replace />

  const article = service.articleSlug
    ? blogPosts.find((p) => p.slug === service.articleSlug)
    : null

  const samagriEntry = service.samagriId
    ? pujaSamagriList.find((p) => p.id === service.samagriId)
    : null

  const groupedSamagri = samagriEntry ? groupSamagriByCategory(samagriEntry.items) : []

  return (
    <div className="bg-ivory-50 min-h-screen">

      {/* ── Hero Header ── */}
      <div className="bg-maroon-800 py-12 md:py-16 relative overflow-hidden lotus-header-bg">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span className="font-heading text-white opacity-5 text-[14rem] leading-none">ॐ</span>
        </div>
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/services"
              className="flex items-center gap-1 font-body text-saffron-300 hover:text-saffron-200 text-sm transition-colors"
            >
              <ArrowLeftIcon />
              All Services
            </Link>
            <span className="text-ivory-400 text-sm">/</span>
            <span className="font-body text-ivory-300 text-sm truncate">{service.name}</span>
          </div>

          {/* Service identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-saffron-500/20 border border-saffron-400/30 flex items-center justify-center flex-shrink-0 shadow-lg">
              <ServiceIcon name={service.icon} className="w-12 h-12 text-gold-300" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-body text-saffron-300 uppercase tracking-widest text-xs mb-2">
                Sacred Ceremony
              </p>
              <h1 className="font-heading text-3xl md:text-4xl text-white font-bold mb-3 leading-tight">
                {service.name}
              </h1>
              <p className="font-body text-ivory-200 text-base max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Excerpt lead paragraph */}
        {article?.excerpt && (
          <AnimatedSection variant="fadeUp" className="mb-10">
            <p className="font-body text-lg md:text-xl text-brown-700 leading-relaxed italic border-l-4 border-gold-400 pl-6 max-w-3xl">
              {article.excerpt}
            </p>
          </AnimatedSection>
        )}

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* ── Left column: narrative content ── */}
          <div className="lg:col-span-2 space-y-8">

            {article?.body && article.body.length > 0 ? (
              <StaggerContainer staggerDelay={0.08} delayChildren={0.05}>
                {article.body.map((section, idx) => (
                  <AnimatedItem key={idx} variant="fadeUp">
                    <div className="bg-white border border-gold-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Section number + heading */}
                      <div className="flex items-start gap-4 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron-50 border border-gold-300 flex items-center justify-center font-heading text-sm text-saffron-600 font-semibold mt-0.5">
                          {idx + 1}
                        </span>
                        <h2 className="font-heading text-xl text-maroon-800 font-semibold leading-snug">
                          {section.heading}
                        </h2>
                      </div>
                      {/* Decorative gold line */}
                      <div className="w-10 h-0.5 bg-gold-400 rounded-full mb-4 ml-12" />
                      <p className="font-body text-brown-700 text-base leading-relaxed ml-12">
                        {section.text}
                      </p>
                    </div>
                  </AnimatedItem>
                ))}
              </StaggerContainer>
            ) : (
              <AnimatedSection variant="fadeUp">
                <div className="bg-white border border-gold-200 rounded-2xl p-8 text-center">
                  <p className="font-body text-brown-600 italic">
                    Detailed information about this ceremony coming soon.
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Mobile samagri link (shown only below lg) */}
            {samagriEntry && (
              <AnimatedSection variant="fadeUp" className="lg:hidden">
                <Link
                  to={`/puja-samagri?samagri=${samagriEntry.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-saffron-500 hover:bg-saffron-600 text-white font-body font-bold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <ChecklistIcon />
                  Start Preparing Samagri
                </Link>
              </AnimatedSection>
            )}
          </div>

          {/* ── Right column: sticky sidebar ── */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Samagri card */}
              {samagriEntry && groupedSamagri.length > 0 && (
                <AnimatedSection variant="fadeLeft" delay={0.15}>
                  <div className="bg-white border border-gold-200 rounded-2xl shadow-sm overflow-hidden">
                    {/* Card header */}
                    <div className="bg-ivory-100 border-b border-gold-200 px-5 py-4">
                      <p className="font-body text-[10px] uppercase tracking-widest text-gold-600 font-semibold mb-0.5">
                        What You'll Need
                      </p>
                      <h3 className="font-heading text-maroon-800 text-base font-semibold">
                        Puja Samagri
                      </h3>
                    </div>

                    {/* Categorised items */}
                    <div className="px-5 py-4 space-y-4 max-h-[480px] overflow-y-auto">
                      {groupedSamagri.map((group) => (
                        <div key={group.key}>
                          <p className="font-body text-[9px] uppercase tracking-widest text-gold-600 font-bold mb-2">
                            {group.label}
                          </p>
                          <ul className="space-y-1.5">
                            {group.items.map((item) => (
                              <li
                                key={item.name}
                                className={`flex items-center justify-between gap-2 text-xs px-3 py-1.5 rounded-lg border ${
                                  CATEGORY_COLORS[group.key] || CATEGORY_COLORS.special
                                }`}
                              >
                                <span className="font-body font-medium leading-snug">{item.name}</span>
                                {item.quantity && (
                                  <span className="font-body text-[10px] opacity-70 flex-shrink-0 font-semibold tabular-nums">
                                    {item.quantity}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Start Preparing CTA */}
                    <div className="px-5 pb-5 pt-3 border-t border-gold-100">
                      <Link
                        to={`/puja-samagri?samagri=${samagriEntry.id}`}
                        className="flex items-center justify-center gap-2 w-full bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold text-sm px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <ChecklistIcon />
                        Start Preparing Samagri
                      </Link>
                      <p className="font-body text-[10px] text-brown-500 text-center mt-2">
                        Interactive checklist with preparation mode
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Book This Ceremony card */}
              <AnimatedSection variant="fadeLeft" delay={0.25}>
                <div className="bg-maroon-800 rounded-2xl p-6 shadow-lg text-center">
                  <motion.div
                    className="w-10 h-10 bg-saffron-500/20 border border-saffron-400/30 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
                  >
                    <span className="text-gold-300 font-heading text-lg">ॐ</span>
                  </motion.div>
                  <h3 className="font-heading text-white text-base font-semibold mb-2">
                    Book This Ceremony
                  </h3>
                  <p className="font-body text-ivory-300 text-xs leading-relaxed mb-5">
                    Pandit Joshi will guide you through every detail. Serving Atlanta and beyond.
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold text-sm px-4 py-3 rounded-xl transition-colors duration-200"
                  >
                    <CalendarIcon />
                    Contact Pandit Joshi
                  </Link>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA banner ── */}
      <section className="py-14 relative overflow-hidden cta-gradient mt-6">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-heading text-white opacity-5 text-[16rem] leading-none">ॐ</span>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection variant="scaleIn">
            <p className="font-body text-saffron-100 uppercase tracking-widest text-xs mb-3">
              || Radhe Radhe ||
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-white font-bold mb-3">
              Ready to perform {service.name}?
            </h2>
            <p className="font-body text-orange-50 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Reach out to Pandit Joshi to schedule the ceremony at your home, temple, or venue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-saffron-600 hover:bg-ivory-100 font-body font-bold text-base px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Contact Pandit Joshi
                </Link>
              </motion.div>
              {samagriEntry && (
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to={`/puja-samagri?samagri=${samagriEntry.id}`}
                    className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-body font-bold text-base px-8 py-3 rounded-xl transition-all duration-200"
                  >
                    Prepare Samagri List
                  </Link>
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

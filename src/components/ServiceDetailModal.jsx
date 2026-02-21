import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceIcon from './ServiceIcon'
import { blogPosts } from '../data/blogPosts'
import { pujaSamagriList, CATEGORIES } from '../data/pujaSamagri'

const CATEGORY_ORDER = Object.entries(CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key)

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ExploreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

export default function ServiceDetailModal({ service, onClose }) {
  const article = service?.articleSlug
    ? blogPosts.find((p) => p.slug === service.articleSlug)
    : null

  const samagriEntry = service?.samagriId
    ? pujaSamagriList.find((p) => p.id === service.samagriId)
    : null

  // Show at most 8 items, favouring the first few categories
  const previewItems = samagriEntry
    ? [...samagriEntry.items]
        .sort((a, b) => {
          const ai = CATEGORY_ORDER.indexOf(a.category)
          const bi = CATEGORY_ORDER.indexOf(b.category)
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
        })
        .slice(0, 8)
    : []

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!service) return null

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-900/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* Modal card */}
        <motion.div
          key="modal-card"
          className="relative bg-ivory-50 rounded-2xl shadow-2xl border border-gold-300 w-full max-w-lg max-h-[88vh] flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-maroon-800 px-6 py-5 flex items-center gap-4 flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-saffron-500/20 border border-saffron-400/40 flex items-center justify-center flex-shrink-0">
              <ServiceIcon name={service.icon} className="w-9 h-9 text-gold-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-saffron-300 text-xs uppercase tracking-widest mb-0.5">
                Sacred Ceremony
              </p>
              <h2 className="font-heading text-white text-xl font-bold leading-snug">
                {service.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-ivory-200 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
            {/* Short description */}
            <p className="font-body text-brown-700 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Dharma Insights glimpse */}
            {article && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gold-300" />
                  <span className="font-body text-[10px] uppercase tracking-widest text-gold-600 font-semibold whitespace-nowrap">
                    About This Ceremony
                  </span>
                  <div className="h-px flex-1 bg-gold-300" />
                </div>
                <p className="font-body text-brown-700 text-sm leading-relaxed italic border-l-3 border-gold-400 pl-4 border-l-4">
                  {article.excerpt}
                </p>
                {article.body?.[0] && (
                  <div>
                    <h3 className="font-heading text-maroon-800 text-sm font-semibold mb-1">
                      {article.body[0].heading}
                    </h3>
                    <p className="font-body text-brown-700 text-sm leading-relaxed line-clamp-3">
                      {article.body[0].text}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Puja Samagri glimpse */}
            {samagriEntry && previewItems.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gold-300" />
                  <span className="font-body text-[10px] uppercase tracking-widest text-gold-600 font-semibold whitespace-nowrap">
                    What You'll Need
                  </span>
                  <div className="h-px flex-1 bg-gold-300" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {previewItems.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 bg-saffron-50 border border-gold-200 text-brown-700 font-body text-xs px-3 py-1.5 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 flex-shrink-0" />
                      {item.name}
                      {item.quantity && (
                        <span className="text-brown-500">· {item.quantity}</span>
                      )}
                    </span>
                  ))}
                  {samagriEntry.items.length > 8 && (
                    <span className="inline-flex items-center bg-ivory-200 border border-gold-200 text-brown-500 font-body text-xs px-3 py-1.5 rounded-full">
                      +{samagriEntry.items.length - 8} more items
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CTA footer */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-gold-200 bg-white flex flex-col sm:flex-row gap-3">
            <Link
              to={`/services/${service.id}`}
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-white font-body font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200"
            >
              <ExploreIcon />
              Explore Service
            </Link>
            {samagriEntry && (
              <Link
                to={`/puja-samagri?samagri=${samagriEntry.id}`}
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200"
              >
                <ListIcon />
                View Samagri List
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

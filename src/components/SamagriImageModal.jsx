import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SamagriImageModal({ imageSrc, itemName, note, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          key="samagri-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Dimmed backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal panel */}
          <motion.div
            className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close image"
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={imageSrc}
              alt={itemName}
              loading="lazy"
              width="600"
              height="600"
              className="w-full aspect-square object-contain bg-white"
            />

            {/* Caption */}
            <div className="px-4 py-3 border-t border-gold-100 bg-ivory-50">
              <p className="font-heading text-sm text-maroon-800 text-center font-semibold leading-snug">
                {itemName}
              </p>
              {note ? (
                <p className="font-body text-xs text-saffron-700 text-center mt-1 font-semibold">
                  {note}
                </p>
              ) : (
                <p className="font-body text-xs text-brown-500 text-center mt-0.5">
                  Reference photo
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

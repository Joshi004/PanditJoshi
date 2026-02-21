import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PAGE_MESSAGES = {
  '/puja-samagri':
    'Namaste Panditji, I have a question about samagri items for an upcoming puja.',
  '/contact':
    'Namaste Panditji, I would like to schedule a ceremony.',
}

const DEFAULT_MESSAGE =
  'Namaste Panditji, I visited your website and would like to inquire about a ceremony.'

const PHONE = '14043863267'

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.848L0 24l6.335-1.661A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.515-5.21-1.41l-.374-.22-3.76.986.987-3.652-.241-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const { pathname } = useLocation()

  const message = PAGE_MESSAGES[pathname] ?? DEFAULT_MESSAGE
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="font-body text-xs font-semibold text-white bg-brown-900 rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.18 }}
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        animate={{
          boxShadow: [
            '0 4px 20px rgba(37,211,102,0.4)',
            '0 4px 28px rgba(37,211,102,0.7)',
            '0 4px 20px rgba(37,211,102,0.4)',
          ],
        }}
        transition={{
          boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <WhatsAppIcon />
      </motion.a>
    </motion.div>
  )
}

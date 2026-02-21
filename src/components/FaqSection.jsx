import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqList } from '../data/faq'

function ChevronIcon({ open }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-saffron-500 flex-shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <polyline points="6,9 12,15 18,9" />
    </motion.svg>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gold-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-sm md:text-base text-maroon-800 font-semibold leading-snug group-hover:text-saffron-600 transition-colors duration-200">
          {item.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-body text-sm text-brown-700 leading-relaxed pb-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <div className="bg-white border border-gold-300 rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-gold-100">
        <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-0.5">
          Frequently Asked Questions
        </h3>
        <p className="font-body text-xs text-brown-600">
          Common questions from families before they reach out
        </p>
      </div>

      {/* Accordion items */}
      <div className="px-6">
        {faqList.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

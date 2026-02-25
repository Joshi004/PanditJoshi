import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिंदी',   short: 'HI' },
  { code: 'gu', label: 'ગુજરાતી', short: 'GU' },
]

function getActiveLanguage() {
  try {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/)
    if (match) {
      const parts = match[1].split('/')
      const langCode = parts[parts.length - 1]
      if (langCode && langCode !== 'en') return langCode
    }
  } catch {
    // cookie read failed — treat as English
  }
  return 'en'
}

function setGoogleTranslateCookie(langCode) {
  const value = langCode === 'en' ? '' : `/en/${langCode}`
  // Set on both root and the current path to ensure it's picked up
  document.cookie = `googtrans=${value};path=/`
  document.cookie = `googtrans=${value};path=${window.location.pathname}`
}

function triggerGoogleTranslate(langCode) {
  // Find the hidden Google Translate <select> and change its value
  const select = document.querySelector('.goog-te-combo')
  if (select) {
    select.value = langCode === 'en' ? '' : langCode
    select.dispatchEvent(new Event('change'))
  }
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default function LanguageSwitcher() {
  const [activeLang, setActiveLang] = useState('en')
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setActiveLang(getActiveLanguage())
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const handleSelect = (code) => {
    setOpen(false)
    if (code === activeLang) return

    setGoogleTranslateCookie(code)

    // Try to trigger the widget directly; fall back to a page reload
    triggerGoogleTranslate(code)

    // Short delay to let the widget act, then reload to ensure clean translation
    setTimeout(() => window.location.reload(), 300)
  }

  const current = LANGUAGES.find((l) => l.code === activeLang) || LANGUAGES[0]

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-body text-xs font-semibold border transition-all duration-200 ${
          activeLang !== 'en'
            ? 'bg-saffron-50 border-saffron-400 text-saffron-700'
            : 'bg-white border-gold-300 text-brown-700 hover:border-saffron-400 hover:text-saffron-600'
        }`}
      >
        <GlobeIcon />
        <span>{current.short}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-1.5 w-36 bg-white border border-gold-200 rounded-xl shadow-lg overflow-hidden z-50"
          >
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === activeLang
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 font-body text-sm transition-colors duration-150 ${
                    isActive
                      ? 'bg-saffron-50 text-saffron-700 font-semibold'
                      : 'text-brown-800 hover:bg-ivory-100 hover:text-maroon-800'
                  }`}
                >
                  <span>{lang.label}</span>
                  {isActive && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 text-saffron-500"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

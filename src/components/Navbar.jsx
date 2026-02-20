import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/puja-samagri', label: 'Puja Samagri' },
  { to: '/videos', label: 'Videos' },
  { to: '/blog', label: 'Dharma Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change (body scroll lock optional)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = ({ isActive }) =>
    `relative font-body font-semibold text-sm uppercase tracking-wide transition-colors duration-200 pb-1 ${
      isActive
        ? 'text-saffron-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-saffron-500'
        : 'text-brown-900 hover:text-saffron-500'
    }`

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      } bg-ivory-50 border-b-2 border-gold-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight" onClick={() => setMenuOpen(false)}>
            <span className="font-heading text-xl font-bold text-maroon-800 flex items-center gap-1">
              <motion.span
                className="text-gold-500 text-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
              >
                ॐ
              </motion.span>{' '}
              Pandit Joshi
            </span>
            <span className="font-body text-xs italic text-saffron-500 tracking-wide">
              || Radhe Radhe ||
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-maroon-800 hover:bg-ivory-200 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.svg
                  key="close"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="open"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer with backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 top-16 bg-brown-900/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              className="md:hidden absolute top-full left-0 right-0 bg-ivory-50 border-t border-gold-200 px-4 pb-6 pt-3 flex flex-col gap-1 z-50 shadow-xl"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05, duration: 0.2 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block font-body font-semibold text-base py-3 px-2 border-b border-ivory-200 rounded-sm transition-colors ${
                        isActive ? 'text-saffron-500 bg-saffron-50' : 'text-brown-900 hover:text-saffron-500 hover:bg-ivory-100'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-3 text-center">
                <span className="font-body text-xs italic text-gold-500 tracking-wider">|| Radhe Radhe ||</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { motion } from 'framer-motion'
import ServiceIcon from './ServiceIcon'

export default function ServiceCard({ service, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className={`group relative bg-ivory-50 border border-gold-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center gap-3 overflow-hidden ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
      whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(197,150,46,0.18)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Saffron radial glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      {/* Icon container */}
      <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-saffron-50 border border-gold-200 group-hover:bg-saffron-100 group-hover:border-gold-400 transition-colors duration-300 shadow-sm">
        <ServiceIcon name={service.icon} className="w-10 h-10" />
      </div>

      <h3 className="relative z-10 font-heading text-base text-maroon-800 font-semibold leading-tight">
        {service.name}
      </h3>
      <p className="relative z-10 font-body text-sm text-brown-700 leading-relaxed">
        {service.description}
      </p>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-400 w-0 group-hover:w-3/4 transition-all duration-500 ease-out rounded-full" />
    </motion.div>
  )
}

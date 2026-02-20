import { motion } from 'framer-motion'

const categoryAccents = {
  powders: 'border-l-saffron-500',
  liquids: 'border-l-blue-400',
  food:    'border-l-amber-500',
  flowers: 'border-l-pink-400',
  grains:  'border-l-emerald-500',
  incense: 'border-l-gold-500',
  vessels: 'border-l-maroon-700',
  special: 'border-l-purple-500',
}

const checkColors = {
  powders: 'bg-saffron-500',
  liquids: 'bg-blue-400',
  food:    'bg-amber-500',
  flowers: 'bg-pink-400',
  grains:  'bg-emerald-500',
  incense: 'bg-gold-500',
  vessels: 'bg-maroon-700',
  special: 'bg-purple-500',
}

export default function SamagriItemCard({ item, isChecked, onToggle, preparationMode }) {
  const accent = categoryAccents[item.category] || 'border-l-gold-400'
  const checkBg = checkColors[item.category] || 'bg-gold-500'

  return (
    <motion.div
      className={`relative bg-white border border-gold-200 border-l-4 ${accent} rounded-xl px-4 py-3 shadow-sm transition-all duration-200 select-none ${
        isChecked
          ? 'opacity-50'
          : 'hover:shadow-md hover:-translate-y-0.5'
      } ${preparationMode ? 'cursor-pointer' : ''}`}
      onClick={preparationMode ? onToggle : undefined}
      whileTap={preparationMode ? { scale: 0.97 } : {}}
      layout
    >
      <div className="flex items-center gap-3">
        {preparationMode && (
          <motion.div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
              isChecked
                ? `${checkBg} border-transparent`
                : 'border-gold-300 bg-white'
            }`}
            animate={isChecked ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            {isChecked && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                <polyline points="20,6 9,17 4,12" />
              </motion.svg>
            )}
          </motion.div>
        )}

        <div className="flex-1 min-w-0">
          <p
            className={`font-body text-sm leading-snug transition-colors duration-200 ${
              isChecked ? 'line-through text-brown-600' : 'text-brown-900'
            }`}
          >
            {item.name}
          </p>
        </div>

        {item.quantity ? (
          <span
            className={`font-body text-xs font-semibold bg-ivory-100 border border-gold-200 rounded-full px-3 py-0.5 flex-shrink-0 whitespace-nowrap transition-colors duration-200 ${
              isChecked ? 'text-brown-400' : 'text-maroon-800'
            }`}
          >
            {item.quantity}
          </span>
        ) : (
          <span className="font-body text-xs text-brown-400 flex-shrink-0 italic whitespace-nowrap">
            as needed
          </span>
        )}
      </div>
    </motion.div>
  )
}

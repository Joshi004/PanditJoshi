import { useState } from 'react'

function ChevronIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 text-saffron-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
    >
      <polyline points="6,9 12,15 18,9" />
    </svg>
  )
}

export default function PujaSamagriAccordion({ puja }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gold-200 rounded-2xl overflow-hidden shadow-sm bg-white">
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-ivory-100 transition-colors duration-200 focus:outline-none group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="w-1 h-8 rounded-full bg-gold-400 flex-shrink-0" />
          <span className="font-heading text-base md:text-lg text-maroon-800 font-semibold">
            {puja.name}
          </span>
        </div>
        <ChevronIcon open={open} />
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gold-100 px-6 py-4">
          <ul className="divide-y divide-gold-100">
            {puja.items.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between gap-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="font-body text-sm text-brown-900 leading-snug">{item.name}</span>
                </div>
                {item.quantity ? (
                  <span className="font-body text-xs font-semibold text-maroon-800 bg-ivory-100 border border-gold-200 rounded-full px-3 py-0.5 flex-shrink-0 whitespace-nowrap">
                    {item.quantity}
                  </span>
                ) : (
                  <span className="font-body text-xs text-brown-400 flex-shrink-0 italic whitespace-nowrap">
                    as needed
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

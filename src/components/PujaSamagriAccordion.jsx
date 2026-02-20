import { useState } from 'react'

export default function PujaSamagriAccordion({ puja }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gold-300 rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-saffron-500 hover:bg-saffron-600 transition-colors duration-200 text-left"
      >
        <span className="font-heading text-lg md:text-xl text-white font-semibold">
          {puja.name}
        </span>
        <span className="text-white text-xl font-bold ml-4 flex-shrink-0">
          {open ? '▲' : '▼'}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="bg-ivory-50 p-4 md:p-6 overflow-x-auto print:block">
          <p className="font-body text-sm text-brown-600 italic mb-4">
            Items marked with <strong>—</strong> in the Quantity column do not have a fixed
            quantity and can be brought as per availability.
          </p>
          <table className="w-full text-sm font-body border-collapse">
            <thead>
              <tr className="bg-maroon-800 text-white">
                <th className="text-left px-4 py-2 font-semibold w-8">#</th>
                <th className="text-left px-4 py-2 font-semibold">Item</th>
                <th className="text-left px-4 py-2 font-semibold w-36">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {puja.items.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-ivory-50' : 'bg-ivory-100'}
                >
                  <td className="px-4 py-2 text-brown-600">{idx + 1}</td>
                  <td className="px-4 py-2 text-brown-900">{item.name}</td>
                  <td className="px-4 py-2 text-brown-700">
                    {item.quantity ? item.quantity : <span className="text-brown-400">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

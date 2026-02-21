import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceIcon from './ServiceIcon'
import SamagriItemCard from './SamagriItemCard'
import ProgressRing from './ProgressRing'
import { pujaSamagriList, CATEGORIES } from '../data/pujaSamagri'

const STORAGE_KEY = 'pujaSamagri_checked'

function loadChecks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function persistChecks(checks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checks))
  } catch { /* quota exceeded – silent fail */ }
}

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )
}

export default function PujaSamagriExplorer() {
  const [selectedPujaId, setSelectedPujaId] = useState(pujaSamagriList[0].id)
  const [preparationMode, setPreparationMode] = useState(false)
  const [checkedItems, setCheckedItems] = useState(loadChecks)
  const [copyFeedback, setCopyFeedback] = useState(false)

  const selectedBtnRef = useRef(null)
  const selectedPuja = pujaSamagriList.find((p) => p.id === selectedPujaId)

  /* ── group items by category ── */
  const groupedItems = useMemo(() => {
    if (!selectedPuja) return []
    const groups = {}
    for (const item of selectedPuja.items) {
      const cat = item.category || 'special'
      if (!groups[cat]) groups[cat] = []
      groups[cat].push(item)
    }
    return Object.entries(groups)
      .sort(([a], [b]) => (CATEGORIES[a]?.order ?? 99) - (CATEGORIES[b]?.order ?? 99))
      .map(([key, items]) => ({ key, label: CATEGORIES[key]?.label || 'Other', items }))
  }, [selectedPuja])

  /* ── checklist logic ── */
  const pujaChecks = checkedItems[selectedPujaId] || {}
  const totalItems = selectedPuja?.items.length || 0
  const checkedCount = Object.values(pujaChecks).filter(Boolean).length

  const toggleItem = useCallback(
    (itemName) => {
      setCheckedItems((prev) => {
        const updated = {
          ...prev,
          [selectedPujaId]: {
            ...prev[selectedPujaId],
            [itemName]: !prev[selectedPujaId]?.[itemName],
          },
        }
        persistChecks(updated)
        return updated
      })
    },
    [selectedPujaId],
  )

  const resetChecks = useCallback(() => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [selectedPujaId]: {} }
      persistChecks(updated)
      return updated
    })
  }, [selectedPujaId])

  /* ── copy list ── */
  const copyList = useCallback(() => {
    if (!selectedPuja) return
    const header = `${selectedPuja.name} — Samagri List\n${'─'.repeat(32)}\n`
    const body = selectedPuja.items
      .map((i) => `• ${i.name}${i.quantity ? `  —  ${i.quantity}` : ''}`)
      .join('\n')
    navigator.clipboard.writeText(header + body).then(() => {
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    })
  }, [selectedPuja])

  /* ── scroll selected puja card into view ── */
  useEffect(() => {
    selectedBtnRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [selectedPujaId])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ═══════ Puja Selector ═══════ */}
      <div className="mb-8">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {pujaSamagriList.map((puja) => {
            const isSelected = puja.id === selectedPujaId
            const pujaCheckedCount = Object.values(
              checkedItems[puja.id] || {},
            ).filter(Boolean).length

            return (
              <motion.button
                key={puja.id}
                ref={isSelected ? selectedBtnRef : null}
                onClick={() => setSelectedPujaId(puja.id)}
                className={`relative flex-shrink-0 snap-center flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border-2 transition-all duration-300 min-w-[130px] ${
                  isSelected
                    ? 'bg-saffron-50 border-saffron-500 shadow-lg shadow-saffron-500/15'
                    : 'bg-white border-gold-200 hover:border-gold-400 hover:shadow-md'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isSelected ? 'bg-saffron-100' : 'bg-ivory-100'
                  }`}
                >
                  <ServiceIcon name={puja.icon} className="w-7 h-7" />
                </div>
                <span
                  className={`font-heading text-[11px] md:text-xs font-semibold text-center leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-saffron-700' : 'text-maroon-800'
                  }`}
                >
                  {puja.name}
                </span>
                <span className="font-body text-[10px] text-brown-600">
                  {puja.items.length} items
                </span>

                {/* tiny progress dot when items are checked */}
                {pujaCheckedCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-saffron-500" />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* ═══════ Puja Description ═══════ */}
      <AnimatePresence mode="wait">
        <motion.p
          key={selectedPujaId + '-desc'}
          className="text-center font-body text-brown-700 text-sm italic mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {selectedPuja?.description}
        </motion.p>
      </AnimatePresence>

      {/* ═══════ Toolbar ═══════ */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-white border border-gold-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPreparationMode((p) => !p)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200 ${
              preparationMode
                ? 'bg-saffron-500 text-white shadow-md'
                : 'bg-ivory-100 text-maroon-800 border border-gold-200 hover:bg-ivory-200'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              {preparationMode ? (
                <>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </>
              ) : (
                <rect x="3" y="3" width="18" height="18" rx="2" />
              )}
            </svg>
            {preparationMode ? 'Preparing\u2026' : 'Preparation Mode'}
          </button>

          {preparationMode && checkedCount > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={resetChecks}
              className="font-body text-xs text-brown-600 hover:text-maroon-800 underline underline-offset-2 transition-colors"
            >
              Reset
            </motion.button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={copyList}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body text-xs text-brown-700 bg-ivory-100 border border-gold-200 hover:bg-ivory-200 transition-colors"
          >
            {copyFeedback ? <CheckIcon /> : <CopyIcon />}
            {copyFeedback ? 'Copied!' : 'Copy List'}
          </button>

          {preparationMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ProgressRing checked={checkedCount} total={totalItems} />
            </motion.div>
          )}
        </div>
      </div>

      {/* ═══════ Category-grouped Item Grid ═══════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPujaId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {groupedItems.map((group, groupIdx) => (
            <div key={group.key} className="mb-8 last:mb-0">
              {/* category divider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-gold-300 to-transparent" />
                <h3 className="font-heading text-[11px] sm:text-xs text-gold-600 uppercase tracking-widest whitespace-nowrap">
                  {group.label}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-gold-300 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: groupIdx * 0.06 + idx * 0.03,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <SamagriItemCard
                      item={item}
                      isChecked={!!pujaChecks[item.name]}
                      onToggle={() => toggleItem(item.name)}
                      preparationMode={preparationMode}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

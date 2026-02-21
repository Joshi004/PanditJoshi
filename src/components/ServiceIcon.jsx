/**
 * Culturally appropriate SVG icons for each Hindu ceremony.
 * Janeu (sacred thread) is always rendered in white as per tradition.
 */

function DiyaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flame */}
      <path d="M24 4 C22 8 19 10 20 14 C21 17 24 18 24 18 C24 18 27 17 28 14 C29 10 26 8 24 4Z" fill="#E8751A" opacity="0.9"/>
      <path d="M24 8 C23 10 21.5 11 22 13 C22.5 15 24 15.5 24 15.5 C24 15.5 25.5 15 26 13 C26.5 11 25 10 24 8Z" fill="#FCD34D"/>
      {/* Wick */}
      <line x1="24" y1="18" x2="24" y2="22" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Diya body */}
      <path d="M12 28 Q10 22 24 22 Q38 22 36 28 L33 36 Q30 38 24 38 Q18 38 15 36 Z" fill="#C5962E"/>
      <path d="M12 28 Q10 22 24 22 Q38 22 36 28" stroke="#b07d20" strokeWidth="1" fill="none"/>
      {/* Oil surface */}
      <ellipse cx="24" cy="26" rx="8" ry="3" fill="#fcd34d" opacity="0.5"/>
      {/* Spout */}
      <path d="M33 28 Q38 26 40 28 Q38 31 33 30 Z" fill="#C5962E"/>
    </svg>
  )
}

function KalashIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coconut */}
      <ellipse cx="24" cy="10" rx="7" ry="5" fill="#8b6348"/>
      <path d="M19 8 Q24 6 29 8" stroke="#6b4c36" strokeWidth="1" fill="none"/>
      {/* Mango leaves */}
      <path d="M17 14 Q12 10 14 7 Q17 12 17 14Z" fill="#22c55e" opacity="0.8"/>
      <path d="M31 14 Q36 10 34 7 Q31 12 31 14Z" fill="#22c55e" opacity="0.8"/>
      <path d="M21 13 Q18 8 20 5 Q22 10 21 13Z" fill="#16a34a" opacity="0.8"/>
      <path d="M27 13 Q30 8 28 5 Q26 10 27 13Z" fill="#16a34a" opacity="0.8"/>
      {/* Kalash neck */}
      <rect x="19" y="14" width="10" height="4" rx="1" fill="#C5962E"/>
      {/* Kalash body */}
      <path d="M16 18 Q12 24 14 32 Q16 38 24 39 Q32 38 34 32 Q36 24 32 18 Z" fill="#E8751A"/>
      {/* Kalash decoration */}
      <path d="M16 26 Q24 24 32 26" stroke="#C5962E" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M15 30 Q24 28 33 30" stroke="#C5962E" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* Base plate */}
      <ellipse cx="24" cy="40" rx="10" ry="2.5" fill="#b07d20"/>
    </svg>
  )
}

function AnnaprashanIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spoon handle */}
      <path d="M34 8 Q36 10 36 12 L30 22" stroke="#C5962E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Spoon head */}
      <ellipse cx="28" cy="24" rx="4" ry="3" fill="#C5962E"/>
      {/* Rice grains on spoon */}
      <ellipse cx="27" cy="23.5" rx="1.2" ry="0.6" fill="white" transform="rotate(-20 27 23.5)"/>
      <ellipse cx="29" cy="23" rx="1.2" ry="0.6" fill="white" transform="rotate(15 29 23)"/>
      <ellipse cx="28" cy="25" rx="1.2" ry="0.6" fill="white"/>
      {/* Bowl */}
      <path d="M8 28 Q8 42 24 42 Q40 42 40 28 Z" fill="#E8751A"/>
      <ellipse cx="24" cy="28" rx="16" ry="4" fill="#f49333"/>
      {/* Rice in bowl */}
      <ellipse cx="20" cy="29" rx="2" ry="1" fill="white" opacity="0.8"/>
      <ellipse cx="25" cy="28" rx="2" ry="1" fill="white" opacity="0.8"/>
      <ellipse cx="30" cy="29" rx="2" ry="1" fill="white" opacity="0.8"/>
      <ellipse cx="23" cy="31" rx="1.5" ry="0.8" fill="white" opacity="0.7"/>
      <ellipse cx="28" cy="31" rx="1.5" ry="0.8" fill="white" opacity="0.7"/>
    </svg>
  )
}

function NamakaranIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Om symbol */}
      <text x="24" y="18" textAnchor="middle" fontSize="14" fontFamily="serif" fill="#C5962E" fontWeight="bold">ॐ</text>
      {/* Baby cradle base */}
      <path d="M8 38 Q24 44 40 38" stroke="#C5962E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Cradle sides */}
      <path d="M10 38 Q10 28 16 26 Q24 24 32 26 Q38 28 38 38" stroke="#E8751A" strokeWidth="2" fill="none"/>
      {/* Cradle canopy */}
      <path d="M16 26 Q24 20 32 26" stroke="#C5962E" strokeWidth="1.5" fill="none" strokeDasharray="2 2"/>
      {/* Baby bump */}
      <ellipse cx="24" cy="33" rx="8" ry="4" fill="#fff8f0" stroke="#fbd5a8" strokeWidth="1"/>
      {/* Rockers */}
      <path d="M6 40 Q12 44 18 40" stroke="#b07d20" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M30 40 Q36 44 42 40" stroke="#b07d20" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function ChudakaranIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Child head */}
      <circle cx="24" cy="26" r="14" fill="#fde68a" stroke="#C5962E" strokeWidth="1.5"/>
      {/* Face features */}
      <circle cx="20" cy="25" r="1.5" fill="#3D2B1F"/>
      <circle cx="28" cy="25" r="1.5" fill="#3D2B1F"/>
      <path d="M20 30 Q24 33 28 30" stroke="#3D2B1F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Shikha (sacred tuft) remaining */}
      <path d="M24 12 Q22 8 24 5 Q26 8 24 12" fill="#3D2B1F"/>
      <path d="M22 11 Q24 7 26 11" stroke="#3D2B1F" strokeWidth="0.5" fill="none"/>
      {/* Razor/blade - traditional not scissors */}
      <path d="M35 8 L42 8 L42 11 L35 11 Z" fill="#9ca3af"/>
      <path d="M35 9.5 L28 17" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
      <path d="M35 8 L35 11 L32 9.5 Z" fill="#6b7280"/>
    </svg>
  )
}

function JaneuIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sacred thread - always white, three strands */}
      {/* Circular sacred thread loop */}
      <circle cx="24" cy="24" r="16" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="none"/>
      <circle cx="24" cy="24" r="13" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
      <circle cx="24" cy="24" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
      {/* Knot at top */}
      <circle cx="24" cy="8" r="3" fill="white"/>
      <path d="M21 8 Q24 5 27 8" stroke="white" strokeWidth="1.5" fill="none"/>
      {/* Thread tails */}
      <path d="M22 11 L20 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 11 L24 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M26 11 L28 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Om symbol in center */}
      <text x="24" y="28" textAnchor="middle" fontSize="10" fontFamily="serif" fill="white" opacity="0.9">ॐ</text>
    </svg>
  )
}

function WeddingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Havan Kund (sacred fire altar) - square base */}
      <path d="M10 38 L14 26 L34 26 L38 38 Z" fill="#C5962E"/>
      <rect x="8" y="36" width="32" height="4" rx="1" fill="#b07d20"/>
      {/* Steps of kund */}
      <path d="M14 26 L16 20 L32 20 L34 26 Z" fill="#E8751A" opacity="0.7"/>
      <path d="M16 20 L18 16 L30 16 L32 20 Z" fill="#E8751A" opacity="0.5"/>
      {/* Fire flames */}
      <path d="M24 16 C22 12 20 10 22 6 C23 8 25 8 24 6 C26 8 27 5 28 8 C30 5 29 11 27 12 C28 10 26 14 24 16Z" fill="#E8751A"/>
      <path d="M24 16 C23 13 22 11 23 9 C24 11 25 11 24 9 C25 11 26 9 27 11 C27.5 9 27 13 25.5 14 C26 12 24.5 14.5 24 16Z" fill="#FCD34D"/>
      {/* Flower offerings */}
      <circle cx="18" cy="25" r="2" fill="#f87171" opacity="0.8"/>
      <circle cx="24" cy="24" r="2" fill="#fb923c" opacity="0.8"/>
      <circle cx="30" cy="25" r="2" fill="#f87171" opacity="0.8"/>
    </svg>
  )
}

function NavgrahaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Nine planets in cosmic arrangement */}
      {/* Center - Sun (Surya) */}
      <circle cx="24" cy="24" r="5" fill="#FCD34D" stroke="#E8751A" strokeWidth="1.5"/>
      {/* Orbit ring */}
      <circle cx="24" cy="24" r="12" fill="none" stroke="#C5962E" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.6"/>
      {/* 8 planets around */}
      <circle cx="24" cy="12" r="2.5" fill="#E8751A"/>
      <circle cx="32.5" cy="15.5" r="2" fill="#9ca3af"/>
      <circle cx="36" cy="24" r="2.5" fill="#60a5fa"/>
      <circle cx="32.5" cy="32.5" r="2" fill="#f87171"/>
      <circle cx="24" cy="36" r="2.5" fill="#a78bfa"/>
      <circle cx="15.5" cy="32.5" r="2" fill="#34d399"/>
      <circle cx="12" cy="24" r="2.5" fill="#fbbf24"/>
      <circle cx="15.5" cy="15.5" r="2" fill="#c084fc"/>
      {/* Stars */}
      <circle cx="6" cy="8" r="1" fill="white" opacity="0.6"/>
      <circle cx="42" cy="10" r="0.8" fill="white" opacity="0.6"/>
      <circle cx="40" cy="40" r="1" fill="white" opacity="0.6"/>
      <circle cx="8" cy="40" r="0.8" fill="white" opacity="0.6"/>
    </svg>
  )
}

function MusicalPujaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Diya body */}
      <path d="M14 30 Q12 24 24 24 Q36 24 34 30 L31 37 Q28 39 24 39 Q20 39 17 37 Z" fill="#C5962E"/>
      <path d="M34 31 Q38 29 40 31 Q38 34 34 33 Z" fill="#C5962E"/>
      {/* Oil + flame */}
      <ellipse cx="24" cy="28" rx="6" ry="2.5" fill="#fcd34d" opacity="0.5"/>
      <line x1="24" y1="24" x2="24" y2="20" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 6 C22 10 20 12 21 15 C22 17 24 18 24 18 C24 18 26 17 27 15 C28 12 26 10 24 6Z" fill="#E8751A"/>
      <path d="M24 10 C23.5 12 22.5 12.5 23 14 C23.5 15.5 24 16 24 16 C24 16 24.5 15.5 25 14 C25.5 12.5 24.5 12 24 10Z" fill="#FCD34D"/>
      {/* Music notes */}
      <text x="33" y="20" fontSize="10" fill="#E8751A" fontFamily="serif">♪</text>
      <text x="10" y="18" fontSize="8" fill="#C5962E" fontFamily="serif">♫</text>
    </svg>
  )
}

function AkhandaRamayanIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Open book */}
      <path d="M24 14 Q16 12 8 14 L8 38 Q16 36 24 38 Z" fill="#fef3c7" stroke="#C5962E" strokeWidth="1.5"/>
      <path d="M24 14 Q32 12 40 14 L40 38 Q32 36 24 38 Z" fill="#fff8f0" stroke="#C5962E" strokeWidth="1.5"/>
      {/* Spine */}
      <line x1="24" y1="14" x2="24" y2="38" stroke="#C5962E" strokeWidth="2"/>
      {/* Text lines on left page */}
      <line x1="11" y1="20" x2="21" y2="20" stroke="#C5962E" strokeWidth="1" opacity="0.5"/>
      <line x1="11" y1="24" x2="21" y2="24" stroke="#C5962E" strokeWidth="1" opacity="0.5"/>
      <line x1="11" y1="28" x2="21" y2="28" stroke="#C5962E" strokeWidth="1" opacity="0.5"/>
      <line x1="11" y1="32" x2="19" y2="32" stroke="#C5962E" strokeWidth="1" opacity="0.5"/>
      {/* Om on right page */}
      <text x="32" y="30" textAnchor="middle" fontSize="14" fontFamily="serif" fill="#C5962E">ॐ</text>
      {/* Book cover decoration */}
      <path d="M8 14 Q8 10 12 10 L24 12" stroke="#b07d20" strokeWidth="1" fill="none"/>
      <path d="M40 14 Q40 10 36 10 L24 12" stroke="#b07d20" strokeWidth="1" fill="none"/>
    </svg>
  )
}

function MataKiChowkiIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Trishul (trident) */}
      <line x1="24" y1="44" x2="24" y2="12" stroke="#E8751A" strokeWidth="3" strokeLinecap="round"/>
      {/* Center prong */}
      <path d="M24 12 L24 6" stroke="#E8751A" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Left prong */}
      <path d="M24 14 Q18 12 16 6" stroke="#E8751A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Right prong */}
      <path d="M24 14 Q30 12 32 6" stroke="#E8751A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Connecting piece */}
      <path d="M18 14 Q24 16 30 14" stroke="#E8751A" strokeWidth="1.5" fill="none"/>
      {/* Lotus flower below */}
      <path d="M24 30 Q20 26 18 28 Q20 32 24 32Z" fill="#f472b6" opacity="0.8"/>
      <path d="M24 30 Q28 26 30 28 Q28 32 24 32Z" fill="#f472b6" opacity="0.8"/>
      <path d="M24 30 Q22 24 24 22 Q26 24 24 30Z" fill="#ec4899" opacity="0.9"/>
      <circle cx="24" cy="31" r="2" fill="#fcd34d"/>
    </svg>
  )
}

function ShivaAbhishekIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shiva Lingam */}
      <ellipse cx="24" cy="36" rx="12" ry="4" fill="#b07d20"/>
      <rect x="16" y="22" width="16" height="16" rx="8" fill="#9ca3af" stroke="#6b7280" strokeWidth="1"/>
      {/* Lingam rounded top */}
      <ellipse cx="24" cy="22" rx="8" ry="3" fill="#d1d5db"/>
      {/* Water/milk drops pouring */}
      <path d="M20 6 Q20 10 18 14 Q20 16 20 18" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" strokeLinecap="round"/>
      <path d="M24 4 Q24 8 24 12 Q24 16 24 18" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" strokeLinecap="round"/>
      <path d="M28 6 Q28 10 30 14 Q28 16 28 18" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="2 1.5" fill="none" strokeLinecap="round"/>
      {/* Drops */}
      <ellipse cx="18" cy="20" rx="1.5" ry="2" fill="#93c5fd"/>
      <ellipse cx="24" cy="20" rx="1.5" ry="2" fill="#bfdbfe"/>
      <ellipse cx="30" cy="20" rx="1.5" ry="2" fill="#93c5fd"/>
      {/* Bilva leaves decoration */}
      <path d="M10 28 Q8 24 12 24 Q12 28 10 28Z" fill="#22c55e" opacity="0.7"/>
      <path d="M38 28 Q40 24 36 24 Q36 28 38 28Z" fill="#22c55e" opacity="0.7"/>
    </svg>
  )
}

function SunderkandIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gada (mace) - Hanuman's weapon */}
      <line x1="24" y1="44" x2="24" y2="16" stroke="#C5962E" strokeWidth="3" strokeLinecap="round"/>
      {/* Gada head */}
      <circle cx="24" cy="12" r="8" fill="#E8751A"/>
      <circle cx="24" cy="12" r="5.5" fill="#f49333"/>
      <circle cx="24" cy="12" r="3" fill="#FCD34D"/>
      {/* Spikes on gada */}
      <circle cx="24" cy="4" r="1.5" fill="#C5962E"/>
      <circle cx="32" cy="12" r="1.5" fill="#C5962E"/>
      <circle cx="24" cy="20" r="1.5" fill="#C5962E"/>
      <circle cx="16" cy="12" r="1.5" fill="#C5962E"/>
      <circle cx="30" cy="6" r="1.2" fill="#C5962E"/>
      <circle cx="30" cy="18" r="1.2" fill="#C5962E"/>
      <circle cx="18" cy="6" r="1.2" fill="#C5962E"/>
      <circle cx="18" cy="18" r="1.2" fill="#C5962E"/>
      {/* Handle wrap */}
      <line x1="24" y1="28" x2="24" y2="32" stroke="#b07d20" strokeWidth="4" strokeLinecap="round"/>
      <line x1="24" y1="36" x2="24" y2="40" stroke="#b07d20" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

function BabyShowerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flower garland — Godh Bharai flowers */}
      <circle cx="14" cy="12" r="3.5" fill="#fda4af" opacity="0.9"/>
      <circle cx="14" cy="12" r="1.8" fill="#FCD34D"/>
      <circle cx="24" cy="9" r="3.5" fill="#fb7185" opacity="0.9"/>
      <circle cx="24" cy="9" r="1.8" fill="#FCD34D"/>
      <circle cx="34" cy="12" r="3.5" fill="#fda4af" opacity="0.9"/>
      <circle cx="34" cy="12" r="1.8" fill="#FCD34D"/>
      <path d="M14 12 Q19 10 24 9 Q29 10 34 12" stroke="#C5962E" strokeWidth="1" fill="none"/>
      {/* Baby bump — the "goad" (lap) being filled */}
      <circle cx="24" cy="32" r="13" fill="#fef9ee" stroke="#C5962E" strokeWidth="1.5"/>
      {/* Om blessing on bump */}
      <text x="24" y="36" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#C5962E">ॐ</text>
    </svg>
  )
}

function BhajanSandhyaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Harmonium body */}
      <rect x="8" y="24" width="32" height="18" rx="3" fill="#8b6348"/>
      <rect x="8" y="24" width="32" height="4" rx="2" fill="#6b4c36"/>
      {/* Keys */}
      <rect x="12" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      <rect x="16" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      <rect x="20" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      <rect x="24" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      <rect x="28" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      <rect x="32" y="28" width="3" height="10" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
      {/* Black keys */}
      <rect x="14.5" y="28" width="2" height="6" rx="0.5" fill="#1f2937"/>
      <rect x="18.5" y="28" width="2" height="6" rx="0.5" fill="#1f2937"/>
      <rect x="26.5" y="28" width="2" height="6" rx="0.5" fill="#1f2937"/>
      <rect x="30.5" y="28" width="2" height="6" rx="0.5" fill="#1f2937"/>
      {/* Bellows (pleats) */}
      <path d="M6 24 L8 24 L8 42 L6 42 Z" fill="#E8751A" opacity="0.6"/>
      <path d="M40 24 L42 24 L42 42 L40 42 Z" fill="#E8751A" opacity="0.6"/>
      {/* Music notes floating */}
      <text x="16" y="20" fontSize="9" fill="#E8751A" fontFamily="serif">♪</text>
      <text x="28" y="17" fontSize="11" fill="#C5962E" fontFamily="serif">♫</text>
    </svg>
  )
}

function ScrollDiplomaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Scroll rolls */}
      <ellipse cx="10" cy="24" rx="4" ry="16" fill="#fcd34d" stroke="#C5962E" strokeWidth="1.5"/>
      <ellipse cx="38" cy="24" rx="4" ry="16" fill="#fcd34d" stroke="#C5962E" strokeWidth="1.5"/>
      {/* Scroll body */}
      <rect x="10" y="8" width="28" height="32" fill="#fef3c7" stroke="#C5962E" strokeWidth="1"/>
      {/* Content lines */}
      <line x1="15" y1="16" x2="33" y2="16" stroke="#C5962E" strokeWidth="1" opacity="0.6"/>
      <line x1="15" y1="20" x2="33" y2="20" stroke="#C5962E" strokeWidth="1" opacity="0.6"/>
      {/* Om */}
      <text x="24" y="30" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#C5962E">ॐ</text>
      {/* Ribbon seal */}
      <circle cx="24" cy="38" r="3" fill="#E8751A"/>
    </svg>
  )
}

function VeenaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Veena neck */}
      <path d="M12 40 L20 16" stroke="#8b6348" strokeWidth="3" strokeLinecap="round"/>
      {/* Veena body (gourd) */}
      <circle cx="32" cy="34" r="10" fill="#C5962E"/>
      <circle cx="32" cy="34" r="7" fill="#E8751A" opacity="0.7"/>
      {/* Sound hole */}
      <circle cx="32" cy="34" r="3" fill="#b07d20"/>
      {/* Strings */}
      <path d="M20 16 L38 30" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 18 L38 32" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 20 L38 34" stroke="#fcd34d" strokeWidth="0.8"/>
      <path d="M20 22 L37 36" stroke="#fcd34d" strokeWidth="0.8"/>
      {/* Tuning pegs */}
      <circle cx="14" cy="14" r="2" fill="#6b4c36"/>
      <circle cx="18" cy="10" r="2" fill="#6b4c36"/>
      {/* Small gourd at top */}
      <circle cx="15" cy="16" r="5" fill="#C5962E"/>
      <circle cx="15" cy="16" r="3.5" fill="#E8751A" opacity="0.7"/>
    </svg>
  )
}

const icons = {
  diya: DiyaIcon,
  kalash: KalashIcon,
  annaprashan: AnnaprashanIcon,
  namakaran: NamakaranIcon,
  chudakaran: ChudakaranIcon,
  janeu: JaneuIcon,
  wedding: WeddingIcon,
  navgraha: NavgrahaIcon,
  'baby-shower': BabyShowerIcon,
  'musical-puja': MusicalPujaIcon,
  'akhanda-ramayan': AkhandaRamayanIcon,
  'mata-ki-chowki': MataKiChowkiIcon,
  'shiva-abhishek': ShivaAbhishekIcon,
  sunderkand: SunderkandIcon,
  'bhajan-sandhya': BhajanSandhyaIcon,
  scroll: ScrollDiplomaIcon,
  veena: VeenaIcon,
}

export default function ServiceIcon({ name, className = 'w-12 h-12' }) {
  const Icon = icons[name]
  if (!Icon) return null
  return <Icon className={className} />
}

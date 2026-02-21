import panchangData from '../data/panchang.json'
import { FESTIVALS } from '../data/festivals.js'

/**
 * Scans panchang.json for lunar (masa/paksha/tithi) festivals, and resolves
 * fixed-date (solar) festivals by calendar date. Returns every matched festival
 * with its resolved Gregorian date and how many days away it is from today
 * (negative = past, positive = future).
 */
function buildFestivalCalendar() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const matched = []

  // Lunar festivals: match against panchang entries
  const lunarFestivals = FESTIVALS.filter((f) => !f.fixedDate)

  for (const [dateKey, entry] of Object.entries(panchangData)) {
    for (const festival of lunarFestivals) {
      if (
        entry.masa   === festival.masa &&
        entry.paksha === festival.paksha &&
        entry.tithi  === festival.tithi
      ) {
        // Parse at noon local time to avoid midnight timezone shifts
        const festivalDate = new Date(dateKey + 'T12:00:00')
        festivalDate.setHours(0, 0, 0, 0)

        const daysUntil = Math.round((festivalDate - today) / (1000 * 60 * 60 * 24))

        matched.push({
          ...festival,
          date: festivalDate,
          dateKey,
          daysUntil,
        })
      }
    }
  }

  // Solar / fixed-date festivals: resolve for each year covered by panchang
  const panchangKeys = Object.keys(panchangData)
  const years = [...new Set(panchangKeys.map((k) => parseInt(k.slice(0, 4))))]

  for (const festival of FESTIVALS.filter((f) => f.fixedDate)) {
    for (const year of years) {
      const festivalDate = new Date(year, festival.fixedDate.month - 1, festival.fixedDate.day)
      festivalDate.setHours(0, 0, 0, 0)

      const dateKey = [
        year,
        String(festival.fixedDate.month).padStart(2, '0'),
        String(festival.fixedDate.day).padStart(2, '0'),
      ].join('-')

      const daysUntil = Math.round((festivalDate - today) / (1000 * 60 * 60 * 24))

      matched.push({
        ...festival,
        date: festivalDate,
        dateKey,
        daysUntil,
      })
    }
  }

  return matched.sort((a, b) => a.date - b.date)
}

/**
 * Returns ALL active festivals — those that:
 *   - fall within the next `daysBefore` days (upcoming), OR
 *   - occurred within the last `daysAfter` days (recent)
 *   - have an articleSlug (an article exists for it)
 *
 * Sorted by proximity: upcoming first (closest first), then past (most recent first).
 *
 * @param {number} daysBefore - days ahead to look (default: 30)
 * @param {number} daysAfter  - days past to look  (default: 7)
 * @returns {Array<{ id, name, nameHi, articleSlug, date, daysUntil }>}
 */
export function getActiveFestivals(daysBefore = 30, daysAfter = 7) {
  const all = buildFestivalCalendar()

  const inRange = all.filter(
    (f) => f.articleSlug !== null && f.daysUntil >= -daysAfter && f.daysUntil <= daysBefore
  )

  // Upcoming sorted closest first, then past sorted most-recent first
  const upcoming = inRange.filter((f) => f.daysUntil >= 0).sort((a, b) => a.daysUntil - b.daysUntil)
  const past = inRange.filter((f) => f.daysUntil < 0).sort((a, b) => b.daysUntil - a.daysUntil)

  return [...upcoming, ...past]
}

/**
 * Returns the single most relevant active festival.
 * Kept for backward compatibility with any existing callers.
 *
 * @param {number} daysBefore
 * @param {number} daysAfter
 * @returns {{ id, name, nameHi, articleSlug, date, daysUntil } | null}
 */
export function getActiveFestival(daysBefore = 30, daysAfter = 7) {
  return getActiveFestivals(daysBefore, daysAfter)[0] ?? null
}

/**
 * Returns a Map from articleSlug -> formatted date string ("Month Day, Year")
 * for the next upcoming occurrence of each festival that has an article.
 * Articles without a linked festival will not appear in the map.
 *
 * @returns {Map<string, string>}
 */
export function getFestivalDates() {
  const all = buildFestivalCalendar()
  const dateMap = new Map()

  // buildFestivalCalendar() is sorted by date ascending, so the first
  // upcoming occurrence (daysUntil >= 0) we encounter per slug is the closest one.
  for (const f of all) {
    if (!f.articleSlug || f.daysUntil < 0) continue
    if (!dateMap.has(f.articleSlug)) {
      dateMap.set(f.articleSlug, f.date)
    }
  }

  const formatted = new Map()
  for (const [slug, date] of dateMap) {
    formatted.set(
      slug,
      date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    )
  }
  return formatted
}

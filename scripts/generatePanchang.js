/**
 * generatePanchang.js
 *
 * Pre-calculates daily panchang data for the current year and next year,
 * writing the result to src/data/panchang.json.
 *
 * Run with: node scripts/generatePanchang.js
 *
 * Uses Atlanta, GA coordinates (33.749, -84.388) since that is the pandit's
 * primary service location. The tithi at sunrise is calculated using these
 * coordinates. Noon UTC (~7am EST / 8am EDT) is used as the reference time
 * for each day, which is close to Atlanta's sunrise throughout the year.
 */

import { MhahPanchang } from 'mhah-panchang';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ATLANTA_LAT = 33.749;
const ATLANTA_LNG = -84.388;

const panchang = new MhahPanchang();

/**
 * Returns the approximate Vikram Samvat year for a given Gregorian date.
 * VS increments at Chaitra Shukla Pratipada (~late March / early April).
 * Approximation: months Jan-Mar use year+56, months Apr-Dec use year+57.
 */
function getVikramSamvat(date) {
  const month = date.getMonth() + 1; // 1-indexed
  const year = date.getFullYear();
  return month <= 3 ? year + 56 : year + 57;
}

/**
 * Formats a JS Date to "YYYY-MM-DD" in local (script-runner) timezone.
 * The generation script is expected to run in any timezone — the date key
 * is used only for lookup by the app (which also uses local date strings).
 */
function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Iterates every day from startDate to endDate (inclusive) and builds the
 * panchang dataset.
 */
function generateData(startYear, endYear) {
  const data = {};
  const current = new Date(startYear, 0, 1); // Jan 1 of startYear
  const end = new Date(endYear, 11, 31);      // Dec 31 of endYear

  while (current <= end) {
    // Use noon UTC as the reference moment (~7-8am Atlanta time),
    // which is reliably after Atlanta's sunrise year-round.
    const refDate = new Date(Date.UTC(
      current.getFullYear(),
      current.getMonth(),
      current.getDate(),
      12, 0, 0
    ));

    try {
      const result = panchang.calendar(refDate, ATLANTA_LAT, ATLANTA_LNG);

      const key = toDateKey(current);
      data[key] = {
        tithi: result.Tithi.name_en_IN,
        paksha: result.Paksha.name_en_IN,
        nakshatra: result.Nakshatra.name_en_IN,
        masa: result.Masa.name_en_IN,
        vikramYear: getVikramSamvat(current),
      };
    } catch (err) {
      console.warn(`Skipping ${toDateKey(current)}: ${err.message}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return data;
}

const currentYear = new Date().getFullYear();
console.log(`Generating panchang data for ${currentYear} and ${currentYear + 1}...`);

const data = generateData(currentYear, currentYear + 1);

const outputPath = path.join(__dirname, '..', 'src', 'data', 'panchang.json');
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

const count = Object.keys(data).length;
console.log(`Done. ${count} days written to src/data/panchang.json`);

import sharp from 'sharp'
import { mkdirSync, existsSync, statSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')
const INPUT_DIR = join(ROOT, 'public')
const OUTPUT_DIR = join(ROOT, 'public', 'samagri')
const TARGET_SIZE = 600
const QUALITY = 80

const IMAGE_MAP = [
  { src: 'chowki.webp',      out: 'chowki.webp' },
  { src: 'dry_coconut.webp', out: 'dry-coconut.webp' },
  { src: 'kalash.jpg',       out: 'kalash.webp' },
  { src: 'paan_patta.jpg',   out: 'paan-patta.webp' },
  { src: 'Thaal_New.jpeg',   out: 'pooja-thali.webp' },
  { src: 'supari.jpeg',      out: 'supari.webp' },
]

const HERO_IMAGE_MAP = [
  { src: 'Shiva.jpeg', out: 'shiva.webp' },
]

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true })
  console.log(`Created output directory: public/samagri/\n`)
}

let successCount = 0
let errorCount = 0

for (const { src, out } of IMAGE_MAP) {
  const inputPath = join(INPUT_DIR, src)
  const outputPath = join(OUTPUT_DIR, out)

  if (!existsSync(inputPath)) {
    console.error(`  SKIP  ${src} — file not found in public/`)
    errorCount++
    continue
  }

  try {
    const inputBytes = statSync(inputPath).size

    await sharp(inputPath)
      .resize({
        width: TARGET_SIZE,
        height: TARGET_SIZE,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    const outputBytes = statSync(outputPath).size
    const saving = Math.round((1 - outputBytes / inputBytes) * 100)
    const kb = (b) => `${Math.round(b / 1024)}KB`

    console.log(
      `  OK    ${src.padEnd(20)} → public/samagri/${out.padEnd(20)}  ${kb(inputBytes).padStart(7)} → ${kb(outputBytes).padStart(7)}  (${saving > 0 ? '-' : '+'}${Math.abs(saving)}%)`,
    )
    successCount++
  } catch (err) {
    console.error(`  ERROR ${src}: ${err.message}`)
    errorCount++
  }
}

console.log(`\nDone: ${successCount} converted, ${errorCount} skipped/failed.`)

// ── Hero images: output directly to public/ ────────────────────────────────
console.log('\nConverting hero images...\n')
let heroSuccessCount = 0
let heroErrorCount = 0

for (const { src, out } of HERO_IMAGE_MAP) {
  const inputPath = join(INPUT_DIR, src)
  const outputPath = join(INPUT_DIR, out)

  if (!existsSync(inputPath)) {
    console.error(`  SKIP  ${src} — file not found in public/`)
    heroErrorCount++
    continue
  }

  try {
    const inputBytes = statSync(inputPath).size

    await sharp(inputPath)
      .resize({
        width: TARGET_SIZE,
        height: TARGET_SIZE,
        fit: 'cover',
        position: 'centre',
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    const outputBytes = statSync(outputPath).size
    const saving = Math.round((1 - outputBytes / inputBytes) * 100)
    const kb = (b) => `${Math.round(b / 1024)}KB`

    console.log(
      `  OK    ${src.padEnd(20)} → public/${out.padEnd(20)}  ${kb(inputBytes).padStart(7)} → ${kb(outputBytes).padStart(7)}  (${saving > 0 ? '-' : '+'}${Math.abs(saving)}%)`,
    )
    heroSuccessCount++
  } catch (err) {
    console.error(`  ERROR ${src}: ${err.message}`)
    heroErrorCount++
  }
}

console.log(`\nHero images done: ${heroSuccessCount} converted, ${heroErrorCount} skipped/failed.`)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Copies index.html to 404.html after build so GitHub Pages serves the SPA
// shell for all unknown paths (direct navigation / refresh on deep routes).
function spa404Plugin() {
  return {
    name: 'spa-404',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      copyFileSync(`${dist}/index.html`, `${dist}/404.html`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spa404Plugin()],
  base: '/PanditJoshi/',
})

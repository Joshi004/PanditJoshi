/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff8f0',
          100: '#fdecd6',
          200: '#fbd5a8',
          300: '#f8b96e',
          400: '#f49333',
          500: '#E8751A',
          600: '#d4600f',
          700: '#b04a0d',
          800: '#8d3b12',
          900: '#733213',
        },
        maroon: {
          50:  '#fff0f2',
          100: '#ffe0e5',
          200: '#ffc0cb',
          300: '#ff8fa0',
          400: '#fe5070',
          500: '#f72048',
          600: '#e50038',
          700: '#c10031',
          800: '#800020',
          900: '#6b0020',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#C5962E',
          600: '#b07d20',
          700: '#92621a',
          800: '#78501b',
          900: '#664319',
        },
        ivory: {
          50:  '#FFFAF3',
          100: '#FFF7ED',
          200: '#FFF0D9',
          300: '#FFE5BE',
          400: '#FFD9A0',
        },
        brown: {
          900: '#3D2B1F',
          800: '#4e3728',
          700: '#6b4c36',
          600: '#8b6348',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

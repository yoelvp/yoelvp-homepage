/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FE094E'
      },
      screens: {
        custom: '676px'
      },
      fontFamily: {
        pacifico: 'Pacifico',
        montserrat: '"Montserrat Variable", Arial, Helvetica, sans-serif'
      }
    }
  },
  plugins: []
}


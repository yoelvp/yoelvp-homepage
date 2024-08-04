/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FE094E',
        secondary: '#3A98B9'
      },
      screens: {
        custom: '676px'
      },
      fontFamily: {
        'gothania-serif': '"Gothania Serif", system-ui, -apple-system, sans-serif',
        montserrat: '"Montserrat", Arial, Helvetica, system-ui, -apple-system, sans-serif',
      }
    }
  },
  plugins: []
}


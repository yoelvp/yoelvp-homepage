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
        pacifico: 'Pacifico',
        montserrat: '"Montserrat", Arial, Helvetica, sans-serif',
        'cenzil': '"Cenzil", "Times New Roman", Times, system-ui, -apple-system, sans-serif'
      }
    }
  },
  plugins: []
}


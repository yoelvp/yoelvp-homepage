/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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


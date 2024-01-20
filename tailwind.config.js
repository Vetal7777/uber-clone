/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'base-light-gray': '#E8E8E8'
      },
      textColor: {
        'base-light-black': '#4B4B4B'
      },
      spacing: {
        17.5: '70px',
        37: '148px'
      }
    }
  },
  plugins: []
}

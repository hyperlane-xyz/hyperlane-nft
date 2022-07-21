/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Neue Haas Grotesk',  'Helvetica', 'sans-serif'],
      serif: ['serif'],
      mono: ['Courier New', 'monospace'],
    },
    extend: {
      colors: {
        black: '#010101',
        white: '#ffffff',
        beige: '#F1EDE9',
        red: {
          100: '#F28B84',
          200: '#F07770',
          300: '#EE645B',
          400: '#EC5147',
          500: '#EA3E33',
          600: '#D2372D',
          700: '#BB3128',
          800: '#A32B23',
          900: '#8C251E',
        }
      },
      spacing: {
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

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
        // TODO whole red palette
        red: '#EA3E33',
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

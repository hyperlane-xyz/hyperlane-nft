/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#010101',
      'beige': '#F1EDE9',
      'red': '#EA3E33',
    },
    fontFamily: {
      sans: ['Neue Haas Grotesk',  'Helvetica', 'sans-serif'],
      serif: ['serif'],
      mono: ['Courier New', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

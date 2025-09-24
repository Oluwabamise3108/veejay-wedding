/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#800020',
        'rose-gold': '#9e9698ff',
        mauve: '#56344aff',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
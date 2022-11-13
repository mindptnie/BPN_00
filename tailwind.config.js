/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'Share Tech Mono': ['monospace','Share Tech Mono'],
      
    }
  },
  plugins: [],
}}
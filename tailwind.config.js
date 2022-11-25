/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {fontFamily: {
      'Share Tech Mono': ['monospace','Share Tech Mono'],
      
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}}
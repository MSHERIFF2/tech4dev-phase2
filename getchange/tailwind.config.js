/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, vue,  js}',  
    './src/components/*.{vue, html, js}' ,
    './src/views/*.{vue, html, js}',
    './src/layouts/*.{vue, html, js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


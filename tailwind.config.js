/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const brandColor = process.env.BRAND_COLOR || "emerald"
module.exports = {
  content: [
    "./app/**/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: colors[brandColor]
      }
    },
  },
  plugins: [],
}

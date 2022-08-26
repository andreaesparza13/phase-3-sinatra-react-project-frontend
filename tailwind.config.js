/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/*",
  "./src/components/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'louvre-image': 'url("https://images5.alphacoders.com/449/thumb-1920-449001.jpg")'
      }
    },
  },
  plugins: [],
};

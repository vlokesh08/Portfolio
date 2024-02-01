/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      mplus: ["M PLUS Rounded 1c", "sans-serif"],
    },
    colors: {
      'pallete': {
        100: '#cF8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#6C757D',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },
    },
    extend: {}
  },
  plugins: [],
})
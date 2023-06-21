/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
    extend: {},
    fontFamily: {
      body: ['Poppins'],
      popp:['Poppins'],
    }
  },
  plugins: [],
}
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': colors.teal,
        hobby: {
          100: '#001871',
          200: '#ff585d',
          300: '#ffb549',
          400: '#41b6e6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

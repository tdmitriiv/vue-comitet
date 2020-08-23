const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          400: '#909198',
          600: '#606167',
          800: '#1d1f22',
          900: '#17191c'
        }
      },
      spacing: {
        '7': '1.875rem'
      }
    },
  },
  variants: {},
  plugins: [],
}

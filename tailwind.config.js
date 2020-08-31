const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...fontFamily.sans],
    },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          400: '#909198',
          600: '#606167',
          800: '#1d1f22',
          900: '#17191c',
        }
      },
      spacing: {
        '7': '1.875rem',
      },
      opacity: {
        '10': '0.1',
      }
    },
  },
  variants: {},
  plugins: [],
}

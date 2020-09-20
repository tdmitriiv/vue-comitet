const { colors, fontFamily, fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    options: {
      whitelist: ['bg-opacity-10', 'mb-7'],
    },
  },
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...fontFamily.sans],
    },
    fontSize: {
      ...fontSize,
      'sm': '0.9375rem'
    },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          400: '#909198',
          600: '#606167',
          700: '#2f3035',
          800: '#1d1f22',
          900: '#17191c',
        },
        blue: {
          ...colors.blue,
          500: '#3680ec'
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

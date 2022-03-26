const colors = require("tailwindcss/colors")
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/assets/**/*.{jsx,js,css}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'footer-bg': '#F6F6F6',
      'map-bg':'#F8F8F8',
      'copyright':'#AFB5C0',
      'back-grey': '#F8F8F8',
      'icon-bg': '#FFECEC',
      'secondary-font':'#4F5665',
      'primary-font': '#0B132A',
      'bright-red': '#F53855',
      'default-red': '#F53838',
      'black': '#000000',
      'grey': '#EEEFF2',
      'plan': '#DDDDDD',
      'control': '#DDE0E4'
    },

    screens: {
      'xs': {'min': '390px', 'max': '640px'},
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },

      boxShadow: {
        'button-red': '0px 20px 54px -10px rgba(245, 56, 56, 0.35);',
        'card': '0px 30px 114px rgba(13, 16, 37, 0.06);',
        'subscribe': '0px 40px 114px rgba(13, 16, 37, 0.07);',
      }
    },
  },
  plugins: [],
}



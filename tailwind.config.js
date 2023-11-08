const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#01080e',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#c8baaf',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'emerald':{
        50:  '#ecfdf5',
        100: '#d1fae5', 
        200: '#a7f3d0', 
        300: '#6ee7b7', 
        400: '#34d399', 
        500: '#10b981', 
        600: '#059669', 
        700: '#047857', 
        800: '#065f46', 
        900: '#064e3b', 
        950: '#022c22' 
      }  
    },
  },
  plugins: [],
  }
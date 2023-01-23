const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // ← OJO
  purge: [ // ← OJO
    './index.html',
    './resources/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: { // https://tailwindcss.com/docs/customizing-colors#color-palette-reference 
      colors: {
        teal: colors.teal, 
        'light-blue': colors.lightBlue,
        'orange': colors.orange,
        gray: {
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray-default)',
          dark: 'var(--gray-dark)'
        },
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-default)',
          dark: 'var(--primary-dark)'
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary-default)',
          dark: 'var(--secondary-dark)'
        },
        success: {
          light: 'var(--success-light)',
          DEFAULT: 'var(--success-default)',
          dark: 'var(--success-dark)'
        },
        info: {
          light: 'var(--info-light)',
          DEFAULT: 'var(--info-default)',
          dark: 'var(--info-dark)'
        },
        warning: {
          light: 'var(--warning-light)',
          DEFAULT: 'var(--warning-default)',
          dark: 'var(--warning-dark)'
        },
        danger: {
          light: 'var(--danger-light)',
          DEFAULT: 'var(--danger-default)',
          dark: 'var(--danger-dark)'
        }
        
      },
      backgroundImage: theme => ({
        'wave-pattern': 'url(/resources/views/wave-white.png)',
        'wave-pattern-dots': 'url(/resources/views/pattern-white-dots.png)',
        'pattern-characters-red': 'url(/resources/views/pattern-characters-red.png)',
        'character-mario': 'url(/resources/views/character-l.png)',
        'wave-pink': 'url(/resources/views/wave-pink.png)',
        'yellow-dots': 'url(/resources/views/pattern-yellow-dots.png)',
      }),
      screens:{
        'xsm': '320px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
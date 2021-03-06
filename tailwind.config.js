const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // cursor: {'close': 'url(hand.cur), cross-hair',},
      colors: {
        'gold': '#dda409',
        'myGray': '#F6F8FC',
        'star': '#FCB502',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
      '.no-scrollbar::-webkit-scrollbar' :{
        'display': 'none',
      },

      '.no-scrollbar': {
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      }
      
      })
    })
  ],
}
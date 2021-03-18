module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'header-gradient-end': 'rgba(70,70,70,1)',
      'header-gradient-end-scroll': 'rgba(70,70,70,0.75)',
      'header-gradient-start': 'rgba(0,0,0,1)',
      'header-gradient-start-scroll': 'rgba(0,0,0,0.75)',
     }),
    extend: {
      colors: {
        'nb-gray': '#a6a6a6',
        'halo': '#505050',
        'menu-bg': '#1b1b1b'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const color = {
  red: '#ff5a5f'
}



const shade = {
  white: '#fff',
  gray: '#919191',
  black: '#191919'
}



module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
    './public/index.js',
    './public/the-source.js',
    './public/types/**/*.js',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'doc-sans-heading': [
        '"Inter Hewn Bold"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial', '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      'doc-sans': [
        '"Inter"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial', '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    /* NB: https://www.uxpin.com/create-design-system-guide/build-color-palette-for-design-system */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: shade.white,
      black: shade.black,

      brand: color.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
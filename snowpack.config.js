// https://www.snowpack.dev/reference/configuration



const { theme } = require('./tailwind.config')



module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/assets' },
    lib: { url: '/lib'},
  },
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    out: 'dist'
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    ['@ampire/snowpack-plugin-plugin', {
      input: ['.svg'],
      output: ['.svg'],
      transform: ({ contents, fileExt }) => {
        if (fileExt === '.svg') {
          return contents.replace('__COLOR_BRAND__', theme.colors.brand)
        }
      }
    }]
  ],
  routes: [
    { src: '/data', dest: '/sample-data/invoice.json' }
  ]
}

const webpackConfig = require('./config/webpack.config.dev.js')

module.exports = {
  components: 'src/lib/components/**/*.{js,jsx,mjs}',
  showUsage: true,
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon'
    },
    fontFamily: {
      base: '"Comic Sans MS", "Comic Sans", cursive'
    }
  },
  webpackConfig,
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.(js|jsx)$/, '.examples.md')
  }
}

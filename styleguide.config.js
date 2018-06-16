const webpackConfig = require('./config/webpack.config.dev.js')

module.exports = {
  components: 'src/lib/components/**/*.{js,jsx}',
  showUsage: true,
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#1978c8',
      linkHover: '#00adef',
    },
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  },
  webpackConfig,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
}

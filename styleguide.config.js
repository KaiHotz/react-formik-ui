const path = require('path')

const {
  createConfig, babel, css, sass, setOutput, match, file,
} = require('webpack-blocks')

module.exports = {
  title: 'React Formik UI',
  components: 'src/lib/components/**/*.{js,jsx,ts,tsx}',
  showSidebar: true,
  usageMode: 'collapse',
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
  styles: {
    StyleGuide: {
      content: {
        maxWidth: 1000,
        margin: 0,
      },
    },
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  webpackConfig: createConfig([
    setOutput('./build/bundle.js'),
    babel(),
    css(),
    sass(),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
      file(),
    ]),
  ]),
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.examples.md')
  },
  require: [
    path.resolve(__dirname, 'styleguide/assets/globals.js'),
  ],
}

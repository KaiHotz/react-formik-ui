const path = require('path')

const {
  createConfig, babel, css, sass, setOutput, match, file,
} = require('webpack-blocks')

module.exports = {
  title: 'React Formik UI v0.3.0',
  components: 'src/lib/components/**/*.{js,jsx,ts,tsx}',
  showSidebar: true,
  usageMode: 'collapse',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#1978c8',
      linkHover: '#00adef',
    },
    font: ['Helvetica', 'sans-serif'],
  },
  styles: {
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
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

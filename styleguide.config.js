const path = require('path')
const {
  createConfig, babel, css, sass, match, file,
} = require('webpack-blocks')

const pkg = require('./package.json')

module.exports = {
  title: `React Formik UI v${pkg.version}`,
  components: 'src/lib/components/**/[A-Z]*.js',
  moduleAliases: {
    'react-formik-ui': path.resolve(__dirname, 'src/lib'),
  },
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
    babel(),
    css(),
    match(['*.scss', '!*node_modules*'], [
      css(),
      sass(/* node-sass options */),
    ]),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
      file(),
    ]),
  ]),
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from 'react-formik-ui';`
  },
  require: [
    path.resolve(__dirname, 'styleguide/assets/globals.js'),
  ],
}

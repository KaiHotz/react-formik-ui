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
  ribbon: {
    url: 'https://github.com/KaiHotz/react-formik-ui',
    text: 'Fork me on GitHub',
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#065fd4',
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
    Ribbon: {
      root: {
        backgroundImage: 'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
      },
      link: {
        backgroundColor: '#065fd4',
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

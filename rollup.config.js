import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    postcss({
      minimize: true,
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: require('typescript'),
      include: ['*.js+(|x)', '**/*.js+(|x)'],
      exclude: [
        'coverage',
        'config',
        'dist',
        'node_modules/**',
        '*.test.{js+(|x), ts+(|x)}',
        '**/*.test.{js+(|x), ts+(|x)}',
      ],
    }),
    babel({
      presets: [
        'react-app',
      ],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    terser(),
  ],
}

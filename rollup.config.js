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

const config = {
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

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Autocomplete.tsx',
    output: [
      {
        file: 'dist/Autocomplete.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Checkbox.tsx',
    output: [
      {
        file: 'dist/Checkbox.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/DatePicker.tsx',
    output: [
      {
        file: 'dist/DatePicker.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/DropZone.tsx',
    output: [
      {
        file: 'dist/DropZone.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Form.tsx',
    output: [
      {
        file: 'dist/Form.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Input.tsx',
    output: [
      {
        file: 'dist/Input.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/PhoneInput.tsx',
    output: [
      {
        file: 'dist/PhoneInput.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Radio.tsx',
    output: [
      {
        file: 'dist/Radio.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Select.tsx',
    output: [
      {
        file: 'dist/Select.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/SubmitBtn.tsx',
    output: [
      {
        file: 'dist/SubmitBtn.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Textarea.tsx',
    output: [
      {
        file: 'dist/Textarea.js',
        format: 'es',
      },
    ],
    ...config,
  },
  {
    input: 'src/Toggle.tsx',
    output: [
      {
        file: 'dist/Toggle.js',
        format: 'es',
      },
    ],
    ...config,
  },
]

import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';

const config = {
  input: [
    'src/index.ts',
    'src/Autocomplete.tsx',
    'src/Checkbox.tsx',
    'src/DatePicker.tsx',
    'src/DropZone.tsx',
    'src/Form.tsx',
    'src/Input.tsx',
    'src/PhoneInput.tsx',
    'src/Radio.tsx',
    'src/Select.tsx',
    'src/SubmitBtn.tsx',
    'src/Textarea.tsx',
    'src/Toggle.tsx',
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      typescript: typescriptEngine,
      sourceMap: false,
    }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    svgr(),
    resolve(),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

export default config;

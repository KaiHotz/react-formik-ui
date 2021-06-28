import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';

export default {
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
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    postcss({
      minimize: false,
      inject: false,
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: typescriptEngine,
      include: ['*.js+(|x)', '**/*.js+(|x)'],
      exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
    }),
    babel({
      extensions: ['.js', '.ts', 'tsx', 'jsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    terser(),
  ],
};

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';

export default [
  {
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
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          'coverage',
          '.storybook',
          'storybook-static',
          'config',
          'dist',
          'node_modules/**',
          '*.cjs',
          '*.mjs',
          '**/__snapshots__/*',
          '**/__tests__',
          '**/*.test.js+(|x)',
          '**/*.test.ts+(|x)',
          '**/*.mdx',
          '**/*.story.ts+(|x)',
          '**/*.story.js+(|x)',
          '**/*.stories.ts+(|x)',
          '**/*.stories.js+(|x)',
        ],
      }),
      url(),
      svgr(),
      terser(),
    ],
  },
];

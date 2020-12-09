import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';

import packageJson from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/',
      format: 'cjs',
      preserveModules: true,
      exports: 'named',
    },
  ],
  external: [...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies), /@babel\/runtime/],
  plugins: [
    babel({
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      plugins: [['@babel/plugin-transform-runtime'], 'babel-plugin-macros'],
      presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
    }),
    resolve(),
    commonjs(),
    generatePackageJson({
      baseContents: pkg => ({
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        author: pkg.author,
        license: pkg.license,
        main: 'index.umd.js',
        module: 'index.es.js',
        peerDependencies: pkg.peerDependencies,
        publishConfig: pkg.publishConfig,
      }),
    }),
  ],
};

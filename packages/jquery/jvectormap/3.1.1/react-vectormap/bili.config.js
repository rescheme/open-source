import pkg from './package.json';

/** @type {import('bili').Config} */
module.exports = {
  output: {
    moduleName: pkg.name,
    format: ['cjs', 'esm', 'umd', 'umd-min'],
    dir: `${__dirname}/dist`,
  },
  externals: [/jvectormap-next\/jquery-jvectormap\.js/, 'jquery', 'react'],
};

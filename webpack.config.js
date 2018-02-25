import webpack from 'webpack';

const isProd = process.argv.indexOf('--prod') !== -1;
const isStandalone = process.argv.indexOf('--standalone') !== -1;

let filename = 'dist/[name]';
if (isStandalone) {
  filename += '.standalone';
}
if (isProd) {
  filename += '.min';
}
filename += '.js';

const plugins = [
  new webpack.optimize.DedupePlugin(),

  // this is required to be consumed by require.js
  new webpack.dependencies.LabeledModulesPlugin()
];
if (isProd) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

export default {
  entry: {
    formula: './index'
  },
  output: {
    path: __dirname,
    filename,
    library: 'formulajs',
    libraryTarget: 'umd'
  },
  externals: {
    numeral: 'numeral',
    numeric: 'numeric',
    jStat: 'jStat'
  },
  plugins
};

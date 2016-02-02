'use strict';
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const forOwn = (obj, cb) => {
  for (let key in obj) obj.hasOwnProperty(key) && cb.call(obj, obj[key], key)
};
let includes = [path.join(__dirname, 'src')];
forOwn(pkg.dependencies || {}, (v, name) => ~name.indexOf('react-') && includes.push(path.join(__dirname, `node_modules/${name}`)));

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [
      'webpack-hot-middleware/client',
      './src/index.jsx'
    ],
    demo: [
      'webpack-hot-middleware/client',
      './src/demo.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  postcss: [require('autoprefixer')],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: includes
    }, {
      test: /\.less/,
      loaders: ['style', 'css', 'postcss', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  }
};

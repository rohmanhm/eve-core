require('babel-polyfill');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const npm = require('../package.json');
const ForceBoolean = require('force-boolean');

module.exports = env => {
  env.dev = ForceBoolean(env.dev)

  const LICENSE_TEXT = `
  Copyright (c) 2017 - present ${ npm.author.name } (${ npm.author.url }).
  All rights reserved.

  Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)

  Card Maker @${ npm.version }
  `;

  const output = {
    filename: '[name].js'
  }

  const devOutput = env.dev
  ? Object.assign({}, {
      path: path.join(__dirname, '../build/')
    }, output)
  : Object.assign({}, {
      path: path.join(__dirname, '../dist/'),
      publicPath: 'dist/',
    }, output);

  const mainFileName = env.dev
  ? path.join(__dirname, '../build/index.html')
  : path.join(__dirname, '../index.html');

  // Add dev plugins
  const devPlugins = env.dev 
  ? [
      new webpack.DefinePlugin({
        "process.env": { 
          NODE_ENV: JSON.stringify("development") 
        }
      }),
      new webpack.BannerPlugin(LICENSE_TEXT)
    ]
  : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        compress: {
          'screw_ie8': true,
          'warnings': false
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      }),
      new webpack.DefinePlugin({
        "process.env": { 
          NODE_ENV: JSON.stringify("production") 
        }
      }),
      new webpack.BannerPlugin(LICENSE_TEXT)
    ]

  return {
    entry: {
      'card-maker': path.join(__dirname, '../src/index.js'),
      'example': path.join(__dirname, '../example/index.js'),
      'vendor': 'axios'
    },
    output: devOutput,
    devtool: env.dev ? 'inline-sourcemap' : undefined ,
    resolve: {
      extensions: [ '.js' ]
    },
    module: {
      rules: [
        {
          use: {
            loader: 'babel-loader'
          },
          resource: {
            exclude: /(node_modules|bower_components)/,
            test: /.js?$/
          }
        }
      ]
    },
    plugins: [
      new LodashModuleReplacementPlugin,
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'example', 'card-maker'],
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/main.html'),
        filename: mainFileName,
        inject: 'body',
        chunks: [
          'card-maker',
          'vendor',
          'example',
        ]
      })
    ].concat(devPlugins)
  }
};

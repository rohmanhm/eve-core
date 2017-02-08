const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const npm = require('../package.json');

module.exports = env => {
  env.dev = (env.dev === 'true');

  const LICENSE_TEXT = `
  Copyright (c) 2017 - present ${ npm.author.name } (${ npm.author.url }).
  All rights reserved.

  Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)

  Card Maker @${ npm.version }
  `;

  const devOutput = env.dev ?
    {
      filename: '../build/[name].js',
      path: path.join(__dirname, '../build/')
    }:
    {
      filename: '../dist/[name].js',
      path: path.join(__dirname, '../dist/'),
      libraryTarget: 'umd',
      library: ['CardMaker']
    };

  // Add dev plugins
  const devPlugins = env.dev ? [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("development") 
      }
    }),
    new webpack.BannerPlugin(LICENSE_TEXT)
  ]:
  [
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
      'example': path.join(__dirname, '../example/index.js')
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
            loader: 'babel-loader',
            options: {
              presets: [ ['latest', { modules: false }], 'stage-0' ],
              "plugins": [
                "add-module-exports"
              ]
            }
          },
          resource: {
            exclude: /(node_modules|bower_components)/,
            test: /.js?$/
          }
        }

      ]
    },
    plugins: devPlugins.concat([
      new webpack.optimize.CommonsChunkPlugin({
        names: ['example', 'card-maker'],
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: path.join(__dirname, '../index.html'),
        inject: 'body',
        chunks: [
          "card-maker",
          "example"
        ]
      })
    ])
  }
};

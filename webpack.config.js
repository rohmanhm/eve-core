const webpack = require('webpack');
const path = require('path');
const npm = require('./package.json');

// check if NOT in production mode
const isDev = process.env.NODE_ENV != 'production';

const LICENSE_TEXT = `
Copyright (c) 2017 - present ${ npm.author.name } (${ npm.author.url }).
All rights reserved.

Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)

Card Maker @${ npm.version }
`;

const output = !isDev
  ? {
      path: path.join(__dirname, 'dist'),
      publicPath: 'dist',
      filename: 'card-maker.js'
    }
  : {
      path: path.join(__dirname, 'build'),
      publicPath: 'build',
      filename: 'bundle.js',
      chunkFilename: '[name].js'
    };

const plugins = !isDev
  ? [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
      new webpack.BannerPlugin(LICENSE_TEXT)
    ]
  : [] ;

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output,
  devtool: isDev ? 'inline-sourcemap' : false ,
  resolve: {
    extensions: [ '.js' ]
  },
  plugins,
  module: {
    rules: [

      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ ['es2015', { modules: false }], 'stage-0' ]
          }
        },
        resource: {
          exclude: /(node_modules|bower_components)/,
          test: /.js?$/
        }
      }

    ]
  }
};

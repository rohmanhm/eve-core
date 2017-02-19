const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')

const PORT = 3000
const HOST = 'localhost'
const ENV = { dev: true  };

const devServerConfig = {
  contentBase: [
    // path.join(__dirname, '../'),
    path.join(__dirname, '../src/'),
    path.join(__dirname, '../example/')
  ]
}

const server = new webpackDevServer(webpack(webpackConfig(ENV)), devServerConfig)

server.listen(PORT, HOST)
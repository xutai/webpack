const webpackDevServer = require('webpack-dev-server')
// https://github.com/webpack/webpack-dev-server
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
    contentBase: './dist',
    // contentBase - 文件描述
    hot: true,
    host: 'localhost'
}

// Webpack - Configuration - DevServer
webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000')
})


// node dev-server.js
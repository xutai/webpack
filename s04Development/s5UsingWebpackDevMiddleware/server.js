const express = require('express')
const webpack =require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
// https://github.com/webpack/webpack-dev-middleware

const app = express()
const config = require('./webpack.config.js')
const compiler =  webpack(config)
// Webpack - API - Node Interface - webpack()

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
    // webpack-dev-middleware - Options - publicPath
}))
// Express - Guide - Using middleware - Third-party-middleware



app.listen(3000, function() {
    console.log('Example app listening on port 3000\n')
})


/*  v1

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        runtimeChunk: 'single'
    }
}

*/




const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        })

    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // match '/node_modules/'
                    test: /[\\/]node_modules[\\/]/,
                    // splitChunks.name or splitChunks.cacheGroups.{cacheGroup}.name
                    name: 'vendors',
                    // splitChunks.chunks
                    chunks: 'all'
                }
            }
        }
    }
}

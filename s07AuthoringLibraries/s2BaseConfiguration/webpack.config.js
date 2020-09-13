const path = require('path')

module.exports = {
    entry: {
        index: './src/anotherEntry.js'
    },
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist')
    }
}
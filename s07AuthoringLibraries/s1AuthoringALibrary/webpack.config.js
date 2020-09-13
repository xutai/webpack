const path = require('path')

module.exports = {
    entry: {
        index: './src/anotherEntry.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
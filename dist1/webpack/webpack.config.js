const path = require('path') // Node.js inter modules

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'dist/bundle.js'
    }
}
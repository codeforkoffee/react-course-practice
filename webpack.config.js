const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
    // entry point of application
    entry: './app/index.js',
    // where the output file where webpack creates is going to go
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }, 
    module: {
        rules: [
            // any js file (any js module inside application), go ahead and run babel-loader translation
            { test:/\.(js)$/, use: 'babel-loader'},
            { test:/\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
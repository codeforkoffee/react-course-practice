const path = require('path')

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
            { test:/\.(js)$/, user: 'babel-loader'},
            { test:/\.css$/, user: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development'
}
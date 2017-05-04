const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle-dist.js',
        publicPath: '/public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        publicPath: '/public'
    }
}

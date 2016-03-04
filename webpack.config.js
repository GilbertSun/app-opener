module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        library: 'AppOpener',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-object-assign"]
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.png$/,
                loader: 'url'
            }
        ]
    }
};

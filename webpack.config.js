module.exports = {
    entry: './src/index',
    output: {
        filename: './dist/index.js',
        library: 'AppOpener',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
};

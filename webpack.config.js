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
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {

            }
        ]
    }
};

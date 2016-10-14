var webpack = require('webpack');
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: ['app', 'vendor', 'polyfills']
});

module.exports = {
    entry: {
        polyfills: './app/polyfills.ts',
        vendor: './app/vendor.ts',
        app: './app/main.ts'
    },
    output: {
        filename: './public/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                include: /app/
            }
        ],
    },
    plugins: [
        commonsChunkPlugin
    ]
};
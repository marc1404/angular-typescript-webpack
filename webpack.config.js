const webpack = require('webpack');
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
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
    devtool: 'eval-source-map',
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
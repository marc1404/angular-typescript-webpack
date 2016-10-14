var webpack = require('webpack');
var config = require('./webpack.config');
var definePlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});
var dedupePlugin = new webpack.optimize.DedupePlugin();
var minifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
var mergePlugin = new webpack.optimize.AggressiveMergingPlugin();

config.devtool = 'source-map';

config.plugins.push(definePlugin);
config.plugins.push(dedupePlugin);
config.plugins.push(minifyPlugin);
config.plugins.push(mergePlugin);

module.exports = config;
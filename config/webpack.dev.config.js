var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'eval-source-map';

module.exports = config;
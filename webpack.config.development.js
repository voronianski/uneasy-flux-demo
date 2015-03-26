'use strict';

var path = require('path');
var webpack = require('webpack');
var address = require('network-address')();

var HOT_RELOAD_PORT = process.env.HOT_RELOAD_PORT || 2992;

module.exports = {
    entry: [
        'webpack-dev-server/client?http://'+address+':'+HOT_RELOAD_PORT,
        'webpack/hot/only-dev-server',
        './src/client/app.js'
    ],

    output: {
        path: path.join(__dirname, '/public/build/'),
        filename: 'bundle.js',
        publicPath: 'http://'+address+':'+HOT_RELOAD_PORT+'/build/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style?singleton!css!cssnext'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel?experimental'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    _hotReloadPort: HOT_RELOAD_PORT
};

'use strict';

// var webpack = require('webpack');
var path = require('path');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: './src/client/app.js',

    output: {
        path: path.join(__dirname, '/public/build/'),
        filename: 'bundle.min.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?experimental']
            }
        ]
    },

    plugins: [
        new StatsPlugin(
            path.join(__dirname, 'src/config', 'webpackBuildStats.json'),
            {source: false, modules: false}
        ),
    ]
};

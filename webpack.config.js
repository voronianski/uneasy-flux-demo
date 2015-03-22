'use strict';

// var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?experimental']
            }
        ]
    }
};

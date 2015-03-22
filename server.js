const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 1995;

var http = require('http');
var path = require('path');
// var logger = require('morgan');
var express = require('express');
var nunjucks = require('nunjucks');
var address = require('network-address');
// var favicon = require('serve-favicon');

var app = express();

nunjucks.configure('layouts', {
    autoescape: true,
    express: app
});

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.render('base.html', {mainJS: '/build/bundle.js'});
});

http.createServer(app).listen(app.get('port'), function () {
    console.info('Demo app is listening on "%s:%s" env="%s"', address(), app.get('port'), env);
});

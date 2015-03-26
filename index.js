// quick for requiring css on the server
require.extensions['.css'] = function noop () {};
require('babel-core/register');
require('./src/server/app.js');

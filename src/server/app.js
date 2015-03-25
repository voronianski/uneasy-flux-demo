const env = process.env.NODE_ENV || 'development';

import http from 'http';
import path from 'path';
import logger from 'morgan';
import express from 'express';
import nunjucks from 'nunjucks';
import address from 'network-address';
import favicon from 'serve-favicon';
import cors from 'cors';
import compression from 'compression';

import { port } from '../config';
import { layout } from './middleware';

const publicFolder = path.join(__dirname, '../../', 'public');
const app = express();

app.set('view engine', 'html');
nunjucks.configure('layouts', {autoescape: true, express: app});

app.set('port', port);
app.use(compression());
app.use(logger('tiny'));
app.use(favicon(path.join(publicFolder, 'assets/react.png')));
app.use(express.static(publicFolder));
app.use(cors());

if ('production' === env) {
    app.use(layout.production());
} else {
    app.use(layout.development());
}

http.createServer(app).listen(port, () => {
    console.log(`Demo app is listening on "${address()}:${port}" env="${env}"`);
});

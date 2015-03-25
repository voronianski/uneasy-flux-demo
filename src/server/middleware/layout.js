// import config from '../../config';
import React from 'react';
import ReactRouter from 'react-router';
import routes from '../../client/routes';
import { output as devOutput } from '../../../webpack.config.development';
import build from '../../config/webpackBuildStats';

let devMainJS, prodMainJs;
if (build) {
    prodMainJs = `/build/${build.assetsByChunkName.main}?${build.hash}`;
}
if (devOutput) {
    devMainJS = `${devOutput.publicPath}${devOutput.filename}`;
}

function handler (mainJS) {
    return (req, res, next) => {
        ReactRouter.run(routes, req.url, (Handler) => {
            const content = React.renderToString(
                React.createElement(Handler, {})
            );
            res.render('base', { mainJS, content });
        });
    };
}

function production () {
    return handler(prodMainJs);
}

function development () {
    return handler(devMainJS);
}

export default { production, development };

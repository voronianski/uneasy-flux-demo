// import config from '../../config';
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
        res.render('base', { mainJS });
    };
}

function production () {
    return handler(prodMainJs);
}

function development () {
    return handler(devMainJS);
}

export default { production, development };

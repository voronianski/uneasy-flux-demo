import 'es5-shim';
import 'es5-shim/es5-sham';
import React from 'react';
window.React = React;

import router from './router';
import Flux from './flux';

let flux = new Flux();

router.run((Handler, state) => {
    React.render(
        React.createElement(Handler, { flux }),
        document.getElementById('app')
    );
});

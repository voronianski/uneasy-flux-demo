const env = process.env.NODE_ENV || 'development';

import development from './development.config';
import production from './production.config';

let config = { development, production };

export default config[env];

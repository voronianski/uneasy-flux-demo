import ReactRouter from 'react-router';
import routes from './routes.jsx';

export default ReactRouter.create({
    routes: routes,
    location: ReactRouter.HistoryLocation
});

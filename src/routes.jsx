import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import PageContainer from './pages/PageContainer.jsx';
import NotFoundContainer from './pages/NotFoundContainer.jsx';
import MatchListContainer from './pages/matches/MatchListContainer.jsx';
import MatchPreviewContainer from './pages/matches/MatchPreviewContainer.jsx';

export default (
    <Route name="list" path="/" handler={PageContainer}>
        <Route name="matchList" path="matches/?" handler={MatchListContainer} />
        <Route name="matchPreview" path="matches/:matchId/?" handler={MatchPreviewContainer} />
        <DefaultRoute handler={MatchListContainer} />
        <NotFoundRoute handler={NotFoundContainer} />
    </Route>
);

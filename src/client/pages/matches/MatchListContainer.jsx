import React from 'react';

class MatchListContainer extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div>
                Match List!
                <span onClick={() => { this.context.router.transitionTo('matchPreview', {matchId: 1}); }}> Go to first</span>
            </div>
        );
    }
}

MatchListContainer.contextTypes = {
    router: React.PropTypes.func
};

export default MatchListContainer;

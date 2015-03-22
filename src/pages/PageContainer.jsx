import React from 'react';
import { RouteHandler } from 'react-router';

export default class PageContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <RouteHandler {...this.props} />
            </div>
        );
    }
}

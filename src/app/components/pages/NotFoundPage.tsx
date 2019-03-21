import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

const NotFoundPage: FunctionComponent = () => <h2> The page you are looking for was not found</h2>;

export const CaptureRouteNotFound = withRouter(
    (props: Partial<RouteComponentProps<any>> & { children?: any }) => {
        const { children, location } = props;
        return location && location.state && location.state.notFoundError ? (
            <NotFoundPage />
        ) : (
                children
            );
    }
);

export const RouteNotFound = () => (
    <Redirect to={ { state: { notFoundError: true } } } />
);

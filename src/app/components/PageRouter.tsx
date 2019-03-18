import React, {FunctionComponent} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router';
import {connect} from 'react-redux';
import {RouteNotFound} from '@components/pages/NotFoundPage';
import {MenuItem} from '@models';

interface Props extends RouteComponentProps<any> {
    routes: MenuItem[];
}

const PageRouterComponent: FunctionComponent<Props> = props => {
    const {match, routes} = props;
    const redirectPrefix = match.url.replace(/\/$/, '');
    const defaultRoute = routes.find(x => !!x.default)!.to;

    return (
        <Switch>
            {routes.map(x => {
                return (
                    <Route key={x.to} path={x.to} exact={true} component={x.component}/>
                );
            })}

            <Redirect
                from={redirectPrefix}
                exact={true}
                to={`${redirectPrefix}${defaultRoute}`}
            />
            <RouteNotFound/>
        </Switch>
    );
};

export const PageRouter = withRouter(connect()(PageRouterComponent) as React.ComponentType<any>);

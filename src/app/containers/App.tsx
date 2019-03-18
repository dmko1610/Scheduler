import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@store';
import {Route, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {CaptureRouteNotFound, RouteNotFound} from '@components/pages/NotFoundPage';
import {MainPage} from '@components/MainPage';

export const history = createHistory();
const locationListener = (location: any, action: any) => {
    const wnd = window as any;

    if (action === 'PUSH') {
        wnd.__navigationBackLength += 1;
    } else if (action === 'POP') {
        wnd.__navigationBackLength -= 1;
    }
};
const unregisterListener = history.listen(locationListener);

interface Props {
}

export const AppComponent: React.FunctionComponent<Props> = props => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <CaptureRouteNotFound>
                    <Switch>
                        <Route path="/" component={MainPage}/>
                        <RouteNotFound/>
                    </Switch>
                </CaptureRouteNotFound>
            </Router>
        </Provider>
    );
};

export const App = (AppComponent);

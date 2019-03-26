import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/styles/index.less';

const rootElement = document.getElementById('root');

let render = () => {
    const App = require('./app/containers/App').App;
    ReactDOM.render(
        <App/>,
        rootElement
    );
};

render();

if (module.hot) {
    const renderApp = render;
    const renderError = (error: any) => {
        const RedBox = require('redbox-react');
        ReactDOM.unmountComponentAtNode(rootElement as Element);
        ReactDOM.render(<RedBox error={error}/>, rootElement);
    };

    render = () => {
        try {
            renderApp();
        } catch (error) {
            renderError(error);
        }
    };

    module.hot.accept('./app/containers/App', () => {
        setTimeout(render);
    });
}

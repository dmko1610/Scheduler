import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '@store/reducer';

let middleware = applyMiddleware(thunk);

// if (process.env.NODE_ENV !== 'production') {
//     const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
//     if (typeof devToolsExtension === 'function') {
//         middleware = compose(
//             middleware,
//             devToolsExtension()
//         );
//     }
// }
export const store = createStore(reducer, {}, middleware);

if (module.hot) {
    module.hot.accept('./reducer', () => {
        store.replaceReducer(require('./reducer').default);
    });
}

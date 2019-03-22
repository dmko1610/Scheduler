import {createSelector} from 'reselect';
import {RootState} from '@store/store.types';

export const getApp = (state: RootState) => state.app;

export const getJFVisibility = createSelector(
    getApp,
    appState => appState.joinFormVisible,
);

export const getSUFVisibility = createSelector(
    getApp,
    appState => appState.signUpFormVisible,
);

export const getSIFVisibility = createSelector(
    getApp,
    appState => appState.signInFormVisible,
);
// export const getItems = createSelector(
//     getApp,
//     appState => appState.items,
// );

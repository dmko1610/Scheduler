import {createSelector} from 'reselect';
import {RootState} from '@store/store.types';

export const getApp = (state: RootState) => state.app;

export const getVisibility = createSelector(
    getApp,
    appState => appState.visible,
);

// export const getItems = createSelector(
//     getApp,
//     appState => appState.items,
// );

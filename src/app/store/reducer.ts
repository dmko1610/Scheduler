import {combineReducers, Reducer} from 'redux';

import {RootState} from '@store';
import {appReducer} from '@store/app';

export const reducer: Reducer<RootState> = combineReducers<RootState>({
    app: appReducer,
});

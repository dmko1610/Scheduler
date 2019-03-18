import {ActionsUnion, createAction} from '@store/action-helpers';

export const START_FETCHING = '[app] START_FETCHING';
export const FINISH_FETCHING = '[app] FINISH_FETCHING';
export const SET_PROFILE = '[app] SET_PROFILE';

export const Actions = {
    startFetching: () => createAction(START_FETCHING),
    finishFetching: () => createAction(FINISH_FETCHING),
};

export const Thunks = {};

export type Actions = ActionsUnion<typeof Actions>;
export type Thunks = ActionsUnion<typeof Thunks>;

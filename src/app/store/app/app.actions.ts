import { ActionsUnion, createAction } from '@store/action-helpers';

export const START_FETCHING = '[app] START_FETCHING';
export const FINISH_FETCHING = '[app] FINISH_FETCHING';
export const SET_PROFILE = '[app] SET_PROFILE';
export const SHOW_FORM = '[app] SHOW_FORM';
export const CLOSE_FORM = '[app] CLOSE_FORM';

export const Actions = {
    startFetching: () => createAction(START_FETCHING),
    finishFetching: () => createAction(FINISH_FETCHING),
};

export const VisibilityFilter = {
    showForm: () => createAction(SHOW_FORM),
    closeForm: () => createAction(CLOSE_FORM),
};

export const Thunks = {};

export type Actions = ActionsUnion<typeof Actions>;
export type VisibilityFilter = ActionsUnion<typeof VisibilityFilter>;
export type Thunks = ActionsUnion<typeof Thunks>;

import {ActionsUnion, createAction} from '@store/action-helpers';
import {Dispatch} from 'redux';

export const START_FETCHING = '[app] START_FETCHING';
export const FINISH_FETCHING = '[app] FINISH_FETCHING';
export const SIGN_UP_FORM_VISIBILITY = '[app] SIGN_UP_FORM_VISIBILITY';
export const SIGN_IN_FORM_VISIBILITY = '[app] SIGN_IN_FORM_VISIBILITY';
export const JOIN_FORM_VISIBILITY = '[app] JOIN_FORM_VISIBILITY';

export const Actions = {
    startFetching: () => createAction(START_FETCHING),
    finishFetching: () => createAction(FINISH_FETCHING),
    toggleJFVisibility: () => createAction(JOIN_FORM_VISIBILITY),
    toggleSUFVisibility: () => createAction(SIGN_UP_FORM_VISIBILITY),
    toggleSIFVisibility: () => createAction(SIGN_IN_FORM_VISIBILITY),
};

export const Thunks = {
    toggleJFVisibility: () => {
        return (dispatch: Dispatch) => {
            dispatch(Actions.toggleJFVisibility());
        };
    },
    toggleSUFVisibility: () => {
        return (dispatch: Dispatch) => {
            dispatch(Actions.toggleSUFVisibility());
        };
    },
    toggleSIFVisibility: () => {
        return (dispatch: Dispatch) => {
            dispatch(Actions.toggleSIFVisibility());
        };
    },
};
export type Actions = ActionsUnion<typeof Actions>;
export type Thunks = ActionsUnion<typeof Thunks>;

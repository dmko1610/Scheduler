import {ActionsUnion, createAction} from '@store/action-helpers';
import {Dispatch} from 'redux';

export const START_FETCHING = '[app] START_FETCHING';
export const FINISH_FETCHING = '[app] FINISH_FETCHING';
export const SET_PROFILE = '[app] SET_PROFILE';
export const TOGGLE_FORM = '[app] TOGGLE_FORM';

export const Actions = {
    startFetching: () => createAction(START_FETCHING),
    finishFetching: () => createAction(FINISH_FETCHING),
    toggleForm: () => createAction(TOGGLE_FORM),
};

export const Thunks = {
    toggleVisibility: () => {
        return (dispatch: Dispatch) => {
            dispatch(Actions.toggleForm());
        };
    },
};
export type Actions = ActionsUnion<typeof Actions>;
export type Thunks = ActionsUnion<typeof Thunks>;

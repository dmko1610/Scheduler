import * as appActions from '@store/app/app.actions';
import {JOIN_FORM_VISIBILITY, SIGN_IN_FORM_VISIBILITY, SIGN_UP_FORM_VISIBILITY} from '@store/app/app.actions';

export interface AppState {
    joinFormVisible: boolean;
    signUpFormVisible: boolean;
    signInFormVisible: boolean;
}

const initialState: AppState = {
    joinFormVisible: false,
    signUpFormVisible: false,
    signInFormVisible: false,
};

export const appReducer = (
    state = initialState,
    action: appActions.Actions
): AppState => {
    switch (action.type) {
        case JOIN_FORM_VISIBILITY:
            return {
                ...state,
                joinFormVisible: !state.joinFormVisible,
            };
        case SIGN_IN_FORM_VISIBILITY:
            return {
                ...state,
                signInFormVisible: !state.signInFormVisible,
            };
        case SIGN_UP_FORM_VISIBILITY:
            return {
                ...state,
                signUpFormVisible: !state.signUpFormVisible,
            };
        default:
            return state;
    }
};

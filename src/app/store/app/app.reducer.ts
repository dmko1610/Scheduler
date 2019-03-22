import * as appActions from '@store/app/app.actions';

export interface AppState {
    visible: boolean;
}

const initialState: AppState = {
    visible: false,
};

export const appReducer = (
    state = initialState,
    action: appActions.Actions
): AppState => {
    switch (action.type) {
        case '[app] TOGGLE_FORM':
            return {
                ...state,
                visible: !state.visible,
            };
        default:
            return state;
    }
};

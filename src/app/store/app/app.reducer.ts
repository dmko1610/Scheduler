import * as appActions from '@store/app/app.actions';

export interface AppState {

}

const initialState: AppState = {};

export const appReducer = (
    state = initialState,
    action: appActions.Actions
): AppState => {
    switch (action.type) {
        case '[app] START_FETCHING':
            return fetch('http://localhost:3000/register', {
                body: JSON.stringify({
                    // password: event.target.password.value,
                    // username: event.target.username.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        default:
            return state;
    }
};

export const visibilityFilterReducer = (
    state = initialState,
    action: appActions.VisibilityFilter
): AppState => {
    switch (action.type) {
        case '[app] SHOW_FORM':
            return action
        default:
            return state;
    }
};

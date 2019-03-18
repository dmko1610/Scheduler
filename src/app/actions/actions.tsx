export const TOGGLE_FORM = 'TOGGLE_FORM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    CLOSE_FORM: 'CLOSE_FORM',
    SHOW_FORM: 'SHOW_FORM',
};

export function toggleForm(index: number) {
    return {type: TOGGLE_FORM, index};
}

export function setVisibilityFilter(filter: string) {
    return {type: SET_VISIBILITY_FILTER, filter};
}

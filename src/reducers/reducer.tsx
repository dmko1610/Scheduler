// import { combineReducers } from 'redux'
// import { SET_VISIBILITY_FILTER, TOGGLE_FORM, VisibilityFilters } from '../actions/actions'
// const { SHOW_FORM } = VisibilityFilters

// function visibilityFilter(state = SHOW_FORM, action: any) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER: 
//             return action.filter
//         default:
//             return state
//     }
// }

// function todos(state = [], action: any) {
//     switch(action.type) {
//         case TOGGLE_FORM: 
//             return state.map((form, index) => {
//                 if (index === action.index) {
//                     return Object.assign({}, form, {
//                         showed: !form.showed
//                     })
//                 }
//                 return form
//             })
//         default: 
//             return state        
//     }
// }

// const showForm = combineReducers({
//     todos,
//     visibilityFilter,
// })

// export default showForm


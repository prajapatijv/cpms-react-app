import { ADD_ERROR, CLEAR_ERRORS } from './actions'

const errors = (state=[], action) => {
    switch (action.type) {
        case ADD_ERROR:
            return [...state, action.payload]

        case CLEAR_ERRORS:
            return []

        default:
            return state
    }
}

export default errors;
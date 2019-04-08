import { STATUS_ACTIONS as C } from '../actionTypes'

const Status = (state={}, action) => {
    
    switch (action.type) {
        case C.ADD_INFO_SUCCESS:
            return {...state, info:[...state.infos, action.payload] }

        case C.ADD_ERROR_SUCCESS:
            return {...state, info:[...state.errors, action.payload] }

        case C.CLEAR_ALL:
            return {}

        default:
            return state
    }
}

export default Status;
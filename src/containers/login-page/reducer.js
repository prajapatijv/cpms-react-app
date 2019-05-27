import { LOGIN_ACTIONS as C } from '../actionTypes'

const initialState={
    authToken:'',
    userName:'',
    password:'',
    processing: false,
    errors:[]
}

const Status = (state=initialState, action) => {
    
    switch (action.type) {
        case C.LOGIN:
            return {...state, processing:true }

        case C.LOGIN_SUCCESS:
            return {...state, processing:false }

        case C.LOGIN_FAILURE:
            return {...state, errors:[...state.errors, action.payload] }

        default:
            return state
    }
}

export default Status;
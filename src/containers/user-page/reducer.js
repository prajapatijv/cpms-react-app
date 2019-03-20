import { FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCEED,
            ADD_USER, SELECT_USER, CANCEL_USER,
            SAVE_USER, SAVE_USER_FAILED, SAVE_USER_SUCCEED } from './actions'

const initialState = {
    users:[],
    user:null,
    fetching:false,
    saving:false,
    errors:[]
} 

const users = (state=initialState, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return {...state, fetching:true , error:null}
        
        case FETCH_USERS_SUCCEED: {
            return {...state, fetching:false, users:action.payload }
        }

        case FETCH_USERS_FAILED: {
            return {...state, fetching:false }
        }

        case ADD_USER: {
            return {...state, user:{} }
        }

        case SELECT_USER:{
            const user = state.users.find(u => u.id === action.payload)
            return {...state, user:user }
        }

        case CANCEL_USER:{
            return {...state, user:null }
        }

        case SAVE_USER: {
            return { ...state, saving: true }
        }

        case SAVE_USER_SUCCEED: {
            return { ...state, saving: false }
        }

        case SAVE_USER_FAILED: {
            return { ...state, saving: false }
        }

        default:
            return state;
    }

}

export default users
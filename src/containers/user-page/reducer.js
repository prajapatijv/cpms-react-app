import { FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCEED,
            ADD_USER, SELECT_USER, 
            SAVE_USER, SAVE_USER_FAILED, SAVE_USER_SUCCEED } from './actions'
/*
initialState = {
    users:[],
    user:null,
    fetching:false,
    saving:false,
    errors:[]
} */ 

const users = (state={}, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return {...state, fetching:true }
        
        case FETCH_USERS_SUCCEED: {
            return {...state, users:action.payload}
        }

        case FETCH_USERS_FAILED: {
            return {...state, fetching:false }
        }

        case ADD_USER: {
            return {...state, user:{} }
        }

        case SELECT_USER:{
            return {...state, user:{} }
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
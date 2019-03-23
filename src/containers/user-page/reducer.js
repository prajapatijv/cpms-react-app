import { FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCEED,
            ADD_USER, SELECT_USER, CANCEL_USER, SEARCH_USERS,
            SAVE_USER, SAVE_USER_FAILED, SAVE_USER_SUCCEED,
            DELETE_USER, DELETE_USER_FAILED, DELETE_USER_SUCCEED
         } from './actions'

const initUser = { 
    id:0,
    firstName:"",
    lastName:"",
    userName:"",
    password:""
}

const initialState = {
    users:[]
} 

const users = (state=initialState, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return {...state, busy:true , error:null}
        
        case SEARCH_USERS:
            return {...state, criteria:action.payload , error:null}

        case FETCH_USERS_SUCCEED: {
            return {...state, busy:false, users:action.payload }
        }

        case FETCH_USERS_FAILED: {
            return {...state, busy:false }
        }

        case ADD_USER: {
            return {...state, user: initUser }
        }

        case SELECT_USER:{
            const user = state.users.find(u => u.id === action.payload)
            return {...state, user:user }
        }

        case CANCEL_USER:{
            return {...state, user:null }
        }

        case SAVE_USER: {
            return { ...state, busy: true }
        }

        case SAVE_USER_SUCCEED: {
            return { ...state, busy: false }
        }

        case SAVE_USER_FAILED: {
            return { ...state, busy: false }
        }

        case DELETE_USER: {
            return {...state, busy:true }
        }

        case DELETE_USER_SUCCEED: {
            return { ...state, busy: false }
        }

        case DELETE_USER_FAILED: {
            return { ...state, busy: false }
        }        

        default:
            return state;
    }

}

export default users
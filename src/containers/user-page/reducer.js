import { USER_ACTIONS as U } from '../actionTypes'

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
        case U.FETCH_USERS:
            return {...state, fetching:true , error:null}
        
        case U.FETCH_USERS_SUCCEED: {
            return {...state, fetching:false, users:action.payload }
        }

        case U.FETCH_USERS_FAILED: {
            return {...state, fetching:false }
        }

        case U.ADD_USER: {
            return {...state, user: initUser }
        }

        case U.SELECT_USER:{
            const user = state.users.find(u => u.id === action.payload)
            return {...state, user:user }
        }

        case U.CANCEL_USER:{
            return {...state, user:null }
        }

        case U.SAVE_USER: {
            return { ...state, saving: true }
        }

        case U.SAVE_USER_SUCCEED: {
            return { ...state, saving: false }
        }

        case U.SAVE_USER_FAILED: {
            return { ...state, saving: false }
        }

        case U.DELETE_USER: {
            return {...state, deleting:true }
        }

        case U.DELETE_USER_SUCCEED: {
            return { ...state, user:null, deleting: false }
        }

        case U.DELETE_USER_FAILED: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }

}

export default users
import { USER_ACTIONS as C } from '../actionTypes'

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
        case C.FETCH_USERS:
            return {...state, fetching:true , error:null}
        
        case `${C.FETCH_USERS}_SUCCEED`: {
            return {...state, fetching:false, users:action.payload }
        }

        case `${C.FETCH_USERS}_FAILED`: {
            return {...state, fetching:false }
        }

        case C.ADD_USER: {
            return {...state, user: initUser }
        }

        case C.SELECT_USER:{
            const user = state.users.find(u => u.id === action.payload)
            return {...state, user:user }
        }

        case C.CLOSE_USER:{
            return {...state, user:null }
        }

        case C.SAVE_USER: {
            return { ...state, saving: true }
        }

        case `${C.SAVE_USER}_SUCCEED`: {
            return { ...state, saving: false }
        }

        case `${C.SAVE_USER}_FAILED`: {
            return { ...state, saving: false }
        }

        case C.DELETE_USER: {
            return {...state, deleting:true }
        }

        case C.DELETE_USER_SUCCEED: {
            return { ...state, user:null, deleting: false }
        }

        case C.DELETE_USER_FAILED: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }

}

export default users
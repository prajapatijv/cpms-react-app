import { USER_ACTIONS as C } from '../actionTypes'

const init = { 
    id:0,
    firstName:"",
    lastName:"",
    userName:"",
    password:""
}

const initialState = {
    users:[]
} 

const byFullName = criteria => user => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return user.firstName.toLowerCase().match(criteria.toLowerCase()) ||
            user.lastName.toLowerCase().match(criteria.toLowerCase())
    }
}

const users = (state=initialState, action) => {

    switch (action.type) {
        case C.FETCH_USERS:
            return {...state, fetching:true , error:null}
        
        case `${C.FETCH_USERS}_SUCCEED`: {
            return {...state, fetching:false,
                users: action.payload.criteria === "" ? 
                    action.payload.data : 
                    action.payload.data.filter(byFullName(action.payload.criteria)) 
                }
        }

        case `${C.FETCH_USERS}_FAILED`: {
            return {...state, fetching:false }
        }

        case C.ADD_USER: {
            return {...state, user: init }
        }

        case C.CLOSE_USER:{
            return {...state, user:undefined }
        }

        case C.SAVE_USER: {
            return { ...state, saving: true }
        }

        case `${C.SAVE_USER}_SUCCEED`: {
            return { ...state, user:undefined, saving: false }
        }

        case `${C.SAVE_USER}_FAILED`: {
            return { ...state, saving: false }
        }

        case C.DELETE_USER: {
            return {...state, deleting:true }
        }

        case `${C.DELETE_USER}_SUCCEED`: {
            return { ...state, deleting: false }
        }

        case `${C.DELETE_USER}_FAILED`: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }

}

export default users
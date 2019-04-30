const reducerTemplate = (initialState, action, newState, filterByFn) => {
    return template(initialState, action, newState, filterByFn)
}

const template = (typePlural, type, state, action, newState, filterByFn) => {
    switch (action.type) {
        case `FETCH_${typePlural}`:
            return {...state, fetching:true , error:null}
        
        case `FETCH_${typePlural}_SUCCEED`: {
            return {...state, fetching:false,
                users: action.payload.criteria === "" ? 
                    action.payload.data : 
                    action.payload.data.filter(filterByFn(action.payload.criteria)) 
                }
        }

        case `FETCH_${typePlural}_FAILED`: {
            return {...state, fetching:false }
        }

        case `ADD_${type}`: {
            return {...state, user: newState }
        }

        case `CLOSE_${type}`: {
            return {...state, user:undefined }
        }

        case `SAVE_${type}`: {
            return { ...state, saving: true }
        }

        case `SAVE_${type}_SUCCEED`: {
            return { ...state, user:undefined, saving: false }
        }

        case `SAVE_${type}_FAILED`: {
            return { ...state, saving: false }
        }

        case `DELETE_${type}`: {
            return {...state, deleting:true }
        }

        case `DELETE_${type}_SUCCEED`: {
            return { ...state, deleting: false }
        }

        case `DELETE_${type}_FAILED`: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }

}

export default reducerTemplate
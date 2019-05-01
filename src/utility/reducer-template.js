const applyReducerTemplate = (actionTypePlural, actionTypeSingular, state, action, defaultEntity, filterByFn) => {
    return template(actionTypePlural, actionTypeSingular, state, action, defaultEntity, filterByFn)
}

const template = (actionTypePlural, actionTypeSingular, state, action, defaultEntity, filterByFn) => {
    
    switch (action.type) {
        case `FETCH_${actionTypePlural}`:
            return {...state, fetching:true , error:null}
        
        case `FETCH_${actionTypePlural}_SUCCEED`: {
            return {...state, fetching:false,
                [actionTypePlural.toLowerCase()]: action.payload.criteria === "" ? 
                    action.payload.data : 
                    action.payload.data.filter(filterByFn(action.payload.criteria)) 
                }
        }

        case `FETCH_${actionTypePlural}_FAILED`: {
            return {...state, fetching:false }
        }

        case `ADD_${actionTypeSingular}`: {
            return {...state, [actionTypeSingular.toLowerCase()]: defaultEntity }
        }

        case `CLOSE_${actionTypeSingular}`: {
            return {...state, [actionTypeSingular.toLowerCase()]:undefined }
        }

        case `SAVE_${actionTypeSingular}`: {
            return { ...state, saving: true }
        }

        case `SAVE_${actionTypeSingular}_SUCCEED`: {
            return { ...state, [actionTypeSingular.toLowerCase()]:undefined, saving: false }
        }

        case `SAVE_${actionTypeSingular}_FAILED`: {
            return { ...state, [actionTypeSingular.toLowerCase()]: false }
        }

        case `DELETE_${actionTypeSingular}`: {
            return {...state, deleting:true }
        }

        case `DELETE_${actionTypeSingular}_SUCCEED`: {
            return { ...state, deleting: false }
        }

        case `DELETE_${actionTypeSingular}_FAILED`: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }
}

export default applyReducerTemplate
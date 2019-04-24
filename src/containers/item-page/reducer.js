import { ITEM_ACTIONS as C } from '../actionTypes'

const entity = { 
    id:0,
    itemName:"",
    rate:0,
    type:"",
    stock:0
}

const initialState = {
    items:[]
} 

const byItemName = criteria => item => {
    if (criteria === undefined) {
        return true
    }
    else  {
        return item.itemName.toLowerCase().match(criteria.toLowerCase())     
    }
}

const items = (state=initialState, action) => {

    switch (action.type) {
        case C.FETCH_ITEMS:
            return {...state, fetching:true , error:null}
        
        case `${C.FETCH_ITEMS}_SUCCEED`: {
            return {...state, fetching:false, 
                items:action.payload.criteria === "" ? 
                action.payload.data : 
                action.payload.data.filter(byItemName(action.payload.criteria)) 
            }
        }

        case `${C.FETCH_ITEMS}_FAILED`: {
            return {...state, fetching:false }
        }

        case C.ADD_ITEM: {
            return {...state, item: entity }
        }

        case C.SELECT_ITEM:{
            const item = state.items.find(u => u.id === action.payload)
            return {...state, item:item }
        }

        case C.CLOSE_ITEM:{
            return {...state, item:null }
        }

        case C.SAVE_ITEM: {
            return { ...state, saving: true }
        }

        case `${C.SAVE_ITEM}_SUCCEED`: {
            return { ...state, saving: false }
        }

        case `${C.SAVE_ITEM}_FAILED`: {
            return { ...state, saving: false }
        }

        case C.DELETE_ITEM: {
            return {...state, deleting:true }
        }

        case `${C.DELETE_ITEM}_SUCCEED`: {
            return { ...state, user:null, deleting: false }
        }

        case `${C.DELETE_ITEM}_FAILED`: {
            return { ...state, deleting: false }
        }        

        default:
            return state;
    }

}

export default items
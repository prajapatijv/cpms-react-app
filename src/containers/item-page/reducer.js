import  applyReducerTemplate from '../../utility/reducer-template'
import { GetContext } from '../../AppConfig'

var contextObj = GetContext('item');

const items = (state=initialState, action) => {
    return applyReducerTemplate(contextObj, state, action, defaultItem, (criteria) => byItemName(criteria))
}

const defaultItem = { 
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

export default items
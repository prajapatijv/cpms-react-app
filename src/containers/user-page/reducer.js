import  applyReducerTemplate from '../../utility/reducer-template'
import { GetContext } from '../../AppConfig'

var contextObj = GetContext('user');

const users = (state=initialState, action) => {
    return applyReducerTemplate(contextObj.actionContextPlural, contextObj.actionContextSingular, 
        state, action, defaultUser, (criteria) => byFullName(criteria))
}

const defaultUser = { 
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

export default users
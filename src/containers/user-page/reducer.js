import  applyReducerTemplate from '../../utility/reducer-template'

const users = (state=initialState, action) => {
    return applyReducerTemplate('user', state, action, defaultUser, (criteria) => byFullName(criteria))
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
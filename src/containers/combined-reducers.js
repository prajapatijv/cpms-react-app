import { combineReducers } from 'redux'
import users from './user-page/reducer'

export default combineReducers({
    userState: users
})
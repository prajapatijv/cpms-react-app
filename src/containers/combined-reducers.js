import { combineReducers } from 'redux'

import errors from './status-bar/reducer'
import users from './user-page/reducer'


export default combineReducers({
    errors,
    userState: users
})
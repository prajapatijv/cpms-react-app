import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import users from './user-page/reducer'


export default combineReducers({
    status,
    userState: users
})
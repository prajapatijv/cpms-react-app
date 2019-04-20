import { combineReducers } from 'redux'

import status from './status-bar/reducer'
import users from './user-page/reducer'
import items from './item-page/reducer'

export default combineReducers({
    status,
    userState: users,
    itemState: items
})
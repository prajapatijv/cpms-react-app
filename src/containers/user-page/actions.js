import { USER_ACTIONS as C } from '../actionTypes'

export const fetchUsers = (criteria) => ({ type: C.FETCH_USERS, criteria: criteria })
export const selectUser = (id) => ({ type: C.SELECT_USER, payload: id })
export const addUser = () => ({ type: C.ADD_USER })
export const closeUser = () => ({ type: C.CLOSE_USER })
export const saveUser = (user) => ({ type: C.SAVE_USER, user: user })
export const deleteUser = (id) => ({ type: C.DELETE_USER, id: id })
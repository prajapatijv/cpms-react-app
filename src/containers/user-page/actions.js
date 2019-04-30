import { USER_ACTIONS as C } from '../actionTypes'


export const fetch = (criteria) => ({ type: C.FETCH_USERS, criteria: criteria })
export const add = () => ({ type: C.ADD_USER })
export const close = () => ({ type: C.CLOSE_USER })
export const save = (user) => ({ type: C.SAVE_USER, user: user })
export const deleteEntity = (id) => ({ type: C.DELETE_USER, id: id })
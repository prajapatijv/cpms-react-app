import { ITEM_ACTIONS as C } from '../actionTypes'

export const fetch = (criteria) => ({ type: C.FETCH_ITEMS, criteria: criteria })
export const add = () => ({ type: C.ADD_ITEM })
export const close = () => ({ type: C.CLOSE_ITEM })
export const save = (item) => ({ type: C.SAVE_ITEM, item: item })
export const deleteEntity = (id) => ({ type: C.DELETE_ITEM, id: id })
import axios from 'axios'
import HandleError from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

export const fetchUsers = (criteria) => ({ type: C.FETCH_USERS, payload: criteria })
export const selectUser = (id) => ({ type: C.SELECT_USER, payload: id })
export const addUser = () => ({ type: C.ADD_USER })
export const cancelUser = () => ({ type: C.CANCEL_USER })

export const saveUser = (user) => {
    debugger
    return  ({ type: C.SAVE_USER, payload: user })
    //dispatch({ type: C.SAVE_USER })
/*
    return axios.post(API_URL, user)
        .then(({ data }) => {
            dispatch({
                type: C.SAVE_USER_SUCCEED
            })
        })
        .catch(err => HandleError(C.SAVE_USER_FAILED, err, dispatch))
        */
}

export const deleteUser = (id) => dispatch => {
    dispatch({ type: C.DELETE_USER })

    return axios.delete(`${API_URL}/${id}`)
        .then(({ data }) => {
            dispatch({
                type: C.DELETE_USER_SUCCEED
            })
        })
        .catch(err => HandleError(C.DELETE_USER_FAILED, err, dispatch))
}

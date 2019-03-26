import axios from 'axios'
import HandleError from '../../utility/handle-error'
import { USER_ACTIONS as U } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

export const fetchUsers = (criteria) => dispatch => {
    dispatch({ type: U.FETCH_USERS })

    return axios.get(`${API_URL}/${criteria}`)   
    .then(({data}) => {
        dispatch({    
            type: U.FETCH_USERS_SUCCEED,
            payload: data
        })
    })
    .catch(err => HandleError(U.FETCH_USERS_FAILED, err, dispatch))
}


export const selectUser = (id) => {
    return dispatch => {
        dispatch({ 
            type:U.SELECT_USER ,
            payload: id
        })
    }
}

export const addUser = () => {
    return dispatch => {
        dispatch({ 
            type:U.ADD_USER
        })
    }
}

export const cancelUser = () => {
    return dispatch => {
        dispatch({ 
            type:U.CANCEL_USER
        })
    }
}

export const saveUser = (user) => dispatch => {
    dispatch({ type: U.SAVE_USER })

    return axios.post(API_URL, user)   
    .then(({data}) => {
        dispatch({    
            type: U.SAVE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(U.SAVE_USER_FAILED, err, dispatch))
}

export const deleteUser = (id) => dispatch => {
    dispatch({ type: U.DELETE_USER })

    return axios.delete(`${API_URL}/${id}`)   
    .then(({data}) => {
        dispatch({    
            type: U.DELETE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(U.DELETE_USER_FAILED, err, dispatch))
}

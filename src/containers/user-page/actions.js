import axios from 'axios'
import HandleError from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

export const fetchUsers = (criteria) => dispatch => {
    dispatch({ type: C.FETCH_USERS })

    return axios.get(`${API_URL}/${criteria}`)   
    .then(({data}) => {
        dispatch({    
            type: C.FETCH_USERS_SUCCEED,
            payload: data
        })
    })
    .catch(err => HandleError(C.FETCH_USERS_FAILED, err, dispatch))
}


export const selectUser = (id) => {
    return dispatch => {
        dispatch({ 
            type:C.SELECT_USER ,
            payload: id
        })
    }
}

export const addUser = () => {
    return dispatch => {
        dispatch({ 
            type:C.ADD_USER
        })
    }
}

export const cancelUser = () => {
    return dispatch => {
        dispatch({ 
            type:C.CANCEL_USER
        })
    }
}

export const saveUser = (user) => dispatch => {
    dispatch({ type: C.SAVE_USER })

    return axios.post(API_URL, user)   
    .then(({data}) => {
        dispatch({    
            type: C.SAVE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(C.SAVE_USER_FAILED, err, dispatch))
}

export const deleteUser = (id) => dispatch => {
    dispatch({ type: C.DELETE_USER })

    return axios.delete(`${API_URL}/${id}`)   
    .then(({data}) => {
        dispatch({    
            type: C.DELETE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(C.DELETE_USER_FAILED, err, dispatch))
}

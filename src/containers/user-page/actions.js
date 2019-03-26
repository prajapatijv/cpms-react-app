import axios from 'axios'
import HandleError from '../../utility/handle-error'

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCEED = 'FETCH_USERS_SUCCEED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';

export const CANCEL_USER = 'CANCEL_USER';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCEED = 'SAVE_USER_SUCCEED';
export const SAVE_USER_FAILED = 'SAVE_USER_FAILED';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCEED = 'DELETE_USER_SUCCEED';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

const API_URL = 'http://localhost:3333/api/users'

export const fetchUsers = (criteria) => dispatch => {
    dispatch({ type: FETCH_USERS })

    return axios.get(`${API_URL}/${criteria}`)   
    .then(({data}) => {
        dispatch({    
            type: FETCH_USERS_SUCCEED,
            payload: data
        })
    })
    .catch(err => HandleError(FETCH_USERS_FAILED, err, dispatch))
}


export const selectUser = (id) => {
    return dispatch => {
        dispatch({ 
            type:SELECT_USER ,
            payload: id
        })
    }
}

export const addUser = () => {
    return dispatch => {
        dispatch({ 
            type:ADD_USER
        })
    }
}

export const cancelUser = () => {
    return dispatch => {
        dispatch({ 
            type:CANCEL_USER
        })
    }
}

export const saveUser = (user) => dispatch => {
    dispatch({ type: SAVE_USER })

    return axios.post(API_URL, user)   
    .then(({data}) => {
        dispatch({    
            type: SAVE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(SAVE_USER_FAILED, err, dispatch))
}

export const deleteUser = (id) => dispatch => {
    dispatch({ type: DELETE_USER })

    return axios.delete(`${API_URL}/${id}`)   
    .then(({data}) => {
        dispatch({    
            type: DELETE_USER_SUCCEED
        })
    })
    .catch(err => HandleError(DELETE_USER_FAILED, err, dispatch))
}

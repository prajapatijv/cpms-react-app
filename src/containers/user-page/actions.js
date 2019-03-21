import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCEED = 'FETCH_USERS_SUCCEED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const SEARCH_USERS = 'SEARCH_USERS';

export const CANCEL_USER = 'CANCEL_USER';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCEED = 'SAVE_USER_SUCCEED';
export const SAVE_USER_FAILED = 'SAVE_USER_FAILED';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCEED = 'DELETE_USER_SUCCEED';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export const fetchUsers = () => dispatch => {
    return axios.get('http://localhost:3333/api/users')   
    .then(({data}) => {
        dispatch({    
            type: FETCH_USERS_SUCCEED,
            payload: data
        })
    })
    .catch(err => console.log(err))
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
    return axios.post('http://localhost:3333/api/users', user)   
    .then(({data}) => {
        debugger
        dispatch({    
            type: SAVE_USER_SUCCEED
        })
    })
    .catch(err => console.log(err))
}

export const deleteUser = (id) => dispatch => {
    debugger
    return axios.delete(`http://localhost:3333/api/users/{id}`)   
    .then(({data}) => {
        debugger
        dispatch({    
            type: DELETE_USER_SUCCEED
        })
    })
    .catch(err => console.log(err))
}

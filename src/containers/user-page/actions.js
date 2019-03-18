import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCEED = 'FETCH_USERS_SUCCEED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const SEARCH_USERS = 'SEARCH_USERS';

export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCEED = 'SAVE_USER_SUCCEED';
export const SAVE_USER_FAILED = 'SAVE_USER_FAILED';

export const fetchUsers = () => {
    return dispatch => {
        debugger
        return axios.get('http://localhost:3333/api/users')   
        .then(({data}) => {
            dispatch(receiveUsers(data))
        })
        .catch(err => console.log(err))
    }
}

const receiveUsers = (users) => ({
    type: FETCH_USERS_SUCCEED,
    payload: users
});
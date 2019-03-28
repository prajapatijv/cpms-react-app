import {takeLatest , call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios"
import { HandleSagaError } from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

const fetchUserApi = (criteria) =>  axios.get(`${API_URL}/${criteria}`) 
const saveUserApi = () =>  axios.post(API_URL)
const deleteUserApi = (id) =>  axios.get(`${API_URL}/${id}`) 

///Saga Watchers
export const userSagas = [
    takeLatest(C.FETCH_USERS, fetchUserWorker),    
    takeEvery(C.SAVE_USER, saveUserWorker),
    takeEvery(C.DELETE_USER, deleteUserWorker)
]


///Saga Worker functions
function* fetchUserWorker(params) {
    
   try {
        const response = yield(call(fetchUserApi, params.criteria))
        yield put({"type": C.FETCH_USERS_SUCCEED, payload: response.data})

    } catch (error) {
        yield HandleSagaError(C.FETCH_USERS_FAILED, error)
    }
}

function* saveUserWorker(params) {
   try {
        const response = yield(call(saveUserApi, params.user))
        yield put({"type": C.SAVE_USER_SUCCEED, payload: response.data})
    } catch (error) {
        yield HandleSagaError(C.SAVE_USER_FAILED, error)
    }
}

function* deleteUserWorker(params) {
    try {
        const response = yield(call(deleteUserApi, params.id))
        yield put({"type": C.DELETE_USER_SUCCEED, payload: response.data })
    } catch (error) {
        yield HandleSagaError(C.DELETE_USER_FAILED, error)
    }
}


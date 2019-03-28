import {takeLatest , call, put, takeEvery } from 'redux-saga/effects'
import axios from "axios"
import { HandleSagaError } from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

const fetchUserApi = (criteria) =>  axios.get(`${API_URL}/${criteria}`) 
const saveUserApi = () =>  axios.post(API_URL)
const deleteUserApi = (id) =>  axios.get(`${API_URL}/${id}`) 

export function* fetchUserSaga() {
    yield takeLatest(C.FETCH_USERS, fetchUserWorker)
}

function* fetchUserWorker(params) {
    
   try {
        const response = yield(call(fetchUserApi, params.criteria))
        yield put({"type": C.FETCH_USERS_SUCCEED, payload: response.data})

    } catch (error) {
        yield HandleSagaError(C.FETCH_USERS_FAILED, error)
    }
}

export function* saveUserSaga() {
    yield takeEvery(C.SAVE_USER, saveUserWorker)
}

function* saveUserWorker(params) {
   try {
        const response = yield(call(saveUserApi, params.user))
        yield put({"type": C.SAVE_USER_SUCCEED, payload: response.data})
    } catch (error) {
        yield HandleSagaError(C.SAVE_USER_FAILED, error)
    }
}

export function* deleteUserSaga() {
    yield takeEvery(C.DELETE_USER, deleteUserWorker)
}

function* deleteUserWorker(params) {
    try {
        const response = yield(call(deleteUserApi, params.id))
        yield put({"type": C.DELETE_USER_SUCCEED })
    } catch (error) {
        yield HandleSagaError(C.DELETE_USER_FAILED, error)
    }
}
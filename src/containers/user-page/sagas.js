import {takeLatest , call, put, take, takeEvery } from 'redux-saga/effects'
import axios from "axios"
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

const fetchUserApi = (params) =>  axios.get(`${API_URL}/${params.payload}`) 
const saveUserApi = (user) =>  axios.post(API_URL, user)

export function* fetchUserSaga() {
    yield takeLatest(C.FETCH_USERS, fetchUserWorker)
}

function* fetchUserWorker(params) {
    
   try {
        const response = yield(call(fetchUserApi, params))
        yield put({"type": C.FETCH_USERS_SUCCEED, payload: response.data})

    } catch (error) {
        yield put({"type": C.FETCH_USERS_FAILED, error })
    }
}

export function* saveUserSaga() {
    yield take(C.SAVE_USER, saveUserWorker)
}

function* saveUserWorker(params) {
   try {
       debugger
        const response = yield(call(saveUserApi, params.user))
        yield put({"type": C.SAVE_USER_SUCCEED, payload: response.data})

    } catch (error) {
        yield put({"type": C.SAVE_USER_FAILED, error })
    }
}

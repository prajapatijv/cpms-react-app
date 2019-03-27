import {takeLatest , call, put } from 'redux-saga/effects'
import axios from "axios"
import { USER_ACTIONS as C } from '../actionTypes'

const API_URL = 'http://localhost:3333/api/users'

const fetchUserApi = (params) =>  axios.get(`${API_URL}/${params.payload}`) 

export function* fetchUserSaga(params) {
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

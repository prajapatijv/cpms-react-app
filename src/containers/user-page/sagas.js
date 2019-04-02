import { takeLatest, call, put, takeEvery, delay } from 'redux-saga/effects'
import axios from "axios"
import { AppConfig } from '../../AppConfig'
import { HandleError } from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'
import { fetch } from '../../utility/http-client'

const API_URL = `${AppConfig.API_URL}/users`

const fetchUserApi = (criteria) => axios.get(`${API_URL}/${criteria}`)
const saveUserApi = () => axios.post(API_URL)
const deleteUserApi = (id) => axios.get(`${API_URL}/${id}`)

///Saga Watchers
export const userSagas = [
    takeLatest(C.FETCH_USERS, fetchUserWorker),
    takeEvery(C.SAVE_USER, saveUserWorker),
    takeEvery(C.DELETE_USER, deleteUserWorker)
]

const CONTEXT = 'users'

///Saga Worker functions
function* fetchUserWorker(params) {
    yield* fetch(CONTEXT, params, true)
}

function* saveUserWorker(params) {
    try {
        const response = yield (call(saveUserApi, params.user))
        yield put({ "type": C.SAVE_USER_SUCCEED, payload: response.data })
    } catch (error) {
        yield HandleError(C.SAVE_USER_FAILED, error)
    }
}

function* deleteUserWorker(params) {
    try {
        const response = yield (call(deleteUserApi, params.id))
        yield put({ "type": C.DELETE_USER_SUCCEED, payload: response.data })
    } catch (error) {
        yield HandleError(C.DELETE_USER_FAILED, error)
    }
}


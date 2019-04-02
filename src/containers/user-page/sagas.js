import { takeLatest, call, put, takeEvery, delay } from 'redux-saga/effects'
import axios from "axios"
import { AppConfig } from '../../AppConfig'
import { HandleError } from '../../utility/handle-error'
import { USER_ACTIONS as C } from '../actionTypes'
import { fetch, save } from '../../utility/http-client'

const API_URL = `${AppConfig.API_URL}/users`
const CONTEXT = 'user'

const deleteUserApi = (id) => axios.get(`${API_URL}/${id}`)

///Saga Watchers
export const userSagas = [
    takeLatest(C.FETCH_USERS, fetchUserWorker),
    takeEvery(C.SAVE_USER, saveUserWorker),
    takeEvery(C.DELETE_USER, deleteUserWorker)
]


///Saga Worker functions
function* fetchUserWorker(params) {
    yield* fetch(CONTEXT, params, true)
}

function* saveUserWorker(params) {
    yield* save(CONTEXT, params.user)
}

function* deleteUserWorker(params) {
    try {
        const response = yield (call(deleteUserApi, params.id))
        yield put({ "type": C.DELETE_USER_SUCCEED, payload: response.data })
    } catch (error) {
        yield HandleError(C.DELETE_USER_FAILED, error)
    }
}


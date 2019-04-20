import { takeLatest, takeEvery } from 'redux-saga/effects'
import { USER_ACTIONS as C } from '../actionTypes'
import { fetch, save, remove } from '../../utility/http-client'

const CONTEXT = 'user'


///Saga Watchers
export const userSagas = [
    takeLatest(C.FETCH_USERS, fetchWorker),
    takeEvery(C.SAVE_USER, saveWorker),
    takeEvery(C.DELETE_USER, deleteWorker)
]


///Saga Worker functions
function* fetchWorker(params) {
    yield* fetch(CONTEXT, params, true)
}

function* saveWorker(params) {
    yield* save(CONTEXT, params.user)
}

function* deleteWorker(params) {
    yield* remove(CONTEXT, params.id)
}


import { takeLatest, takeEvery } from 'redux-saga/effects'
import { USER_ACTIONS as C } from '../actionTypes'
import { fetch, save, remove } from '../../utility/http-client'

const CONTEXT = 'user'


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
    yield* remove(CONTEXT, params.id)
}


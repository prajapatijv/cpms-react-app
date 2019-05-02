import { takeLatest, takeEvery } from 'redux-saga/effects'
import { ITEM_ACTIONS as C } from '../actionTypes'
import { fetch, save, remove } from '../../utility/http-client'

const CONTEXT = 'item'


///Saga Watchers
export const itemSagas = [
    takeLatest(C.FETCH_ITEMS, fetchWorker),
    takeEvery(C.SAVE_ITEM, saveWorker),
    takeEvery(C.DELETE_ITEM, deleteWorker)
]


///Saga Worker functions
function* fetchWorker(params) {
    yield* fetch(CONTEXT, params, true)
}

function* saveWorker(params) {
    yield* save(CONTEXT, params.entity)
}

function* deleteWorker(params) {
    yield* remove(CONTEXT, params.id)
}


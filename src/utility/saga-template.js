import { takeLatest, takeEvery } from 'redux-saga/effects'
import { fetch, save, remove } from './http-client'

///Saga Watchers
const applySagaTemplate = (actionTypePlural, actionTypeSingular) => 
    [    
        takeLatest(`FETCH_${actionTypePlural}`, fetchWorker),
        takeEvery(`SAVE_${actionTypeSingular}`, saveWorker),
        takeEvery(`DELETE_${actionTypeSingular}`, deleteWorker)
    ]

///Saga Worker functions
function* fetchWorker(params) {
    yield* fetch(params.context.toLowerCase(), params, true)
}

function* saveWorker(params) {
    yield* save(params.context.toLowerCase(), params.entity)
}

function* deleteWorker(params) {
    yield* remove(params.context.toLowerCase(), params.id)
}

export default applySagaTemplate

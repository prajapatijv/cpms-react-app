import { takeLatest, takeEvery } from 'redux-saga/effects'
import { fetch, save, remove } from './http-client'

///Saga Watchers
const applySagaTemplate = (contextObj) => 
    [    
        takeLatest(`FETCH_${contextObj.actionContext.PLURAL}`, fetchWorker),
        takeEvery(`SAVE_${contextObj.actionContext.SINGULAR}`, saveWorker),
        takeEvery(`DELETE_${contextObj.actionContext.SINGULAR}`, deleteWorker)
    ]

///Saga Worker functions
function* fetchWorker(params) {
    yield* fetch(params.context, params, true)
}

function* saveWorker(params) {
    yield* save(params.context, params.entity)
}

function* deleteWorker(params) {
    yield* remove(params.context, params.id)
}

export default applySagaTemplate

import { call, takeEvery } from 'redux-saga/effects'
import { LOGIN_ACTIONS as C } from '../actionTypes'
import { post } from '../../utility/http-client'

import { Config } from '../../AppConfig'

const API_URL =  `${Config.API_URL}/login`

export function* loginSaga() {
    yield takeEvery(C.LOGIN, loginWorker)
}

function* loginWorker(params) {
    return yield(call(post, API_URL, params.payload, C.LOGIN_SUCCESS, C.LOGIN_FAILURE))
}
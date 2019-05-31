import { call, takeEvery } from 'redux-saga/effects'
import { LOGIN_ACTIONS as C } from '../actionTypes'
import { post } from '../../utility/http-client'
import { SetCookie, RemoveCookie } from '../../utility/cookie'

import { navigate } from '@reach/router'

import { Config } from '../../AppConfig'

const LOGIN_URL =  `${Config.API_URL}/login`
const LOGOUT_URL =  `${Config.API_URL}/logout`

export function* loginSaga() {
    yield takeEvery(C.LOGIN, loginWorker)
}

export function* logoutSaga() {
    yield takeEvery(C.LOGOUT, logoutWorker)
}


function* loginWorker(params) {
    const response = yield(call(post, LOGIN_URL, params.payload, C.LOGIN_SUCCESS, C.LOGIN_FAILURE))
    SetCookie(`AUTHTOKEN_${response.userName.toUpperCase()}`, response.authToken)
    navigate('/')
}

function* logoutWorker(params) {
    RemoveCookie(`AUTHTOKEN_${params.payload.userName.toUpperCase()}`)
    yield(call(post, LOGOUT_URL, params.payload, C.LOGOUT_SUCCESS, C.LOGOUT_FAILURE))
    
    navigate('/login')
}
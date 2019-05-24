import { put, takeEvery } from 'redux-saga/effects'
import { LOGIN_ACTIONS as C } from '../actionTypes'

export const login = (credentials) => ({ type: C.LOGIN, payload: credentials })

export function* loginSaga() {
    yield takeEvery(C.LOGIN, loginWorker)
}

function* loginWorker(params) {
    yield put({ "type": C.LOGIN_SUCCESS, payload: params.errorMessage })
}
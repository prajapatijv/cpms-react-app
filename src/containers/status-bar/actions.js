import { put, takeEvery } from 'redux-saga/effects'
export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ADD_ERROR_SUCCESS = 'ADD_ERROR_SUCCESS';

export const addError = (errorMessage) => ({ type: ADD_ERROR, payload: errorMessage })
export const clearErrors = () => ({ type: CLEAR_ERRORS })

export function* addErrorSaga() {
    yield takeEvery(ADD_ERROR, addErrorWorker)
}

function* addErrorWorker(params) {
    yield put({ "type": ADD_ERROR_SUCCESS, payload: params.errorMessage })
}

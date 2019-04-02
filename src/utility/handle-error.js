import { ADD_ERROR_SUCCESS } from '../containers/status-bar/actions'
import { put } from 'redux-saga/effects'

export function* HandleError (errorType, err)  {
    yield put({"type": ADD_ERROR_SUCCESS, payload: err.message})
    yield put({"type": errorType})
}
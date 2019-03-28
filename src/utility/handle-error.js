import {addError } from '../containers/status-bar/actions'
import { put } from 'redux-saga/effects'

export const HandleError = (errorType, err, dispatch) => {
    dispatch({type: errorType})
    dispatch(addError(err.message))
}

export function* HandleSagaError (errorType, err)  {
    yield put({"type": 'ADD_ERROR_SUCCESS', payload: err.message})
    yield put({"type": errorType})
}
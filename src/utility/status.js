import { ADD_ERROR_SUCCESS } from '../containers/status-bar/actions'
import { put } from 'redux-saga/effects'

export function* HandleError (errorType, err)  {
    yield put({"type": ADD_ERROR_SUCCESS, payload: err.message})
    yield put({"type": errorType})
}

export function* HandleSaveSuccess (typeContext, payload)  {
    const type = `SAVE_${typeContext}_SUCCEED`
    yield put({ "type": type, payload: payload })
    yield put({"type": ADD_ERROR_SUCCESS, payload: "Saved"})
}


export function* HandleDeleteSuccess (typeContext, payload)  {
    const type = `DELETE_${typeContext}_SUCCEED`
    yield put({ "type": type, payload: payload })
    yield put({"type": ADD_ERROR_SUCCESS, payload: "Deleted"})
}



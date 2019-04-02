import { takeLatest, call, put, takeEvery, delay } from 'redux-saga/effects'
import axios from "axios"
import { AppConfig } from '../AppConfig'
import { HandleError } from './handle-error'


const fetchApi = (apiUrl, criteria) => axios.get(`${apiUrl}/${criteria}`)

export function* fetch(context, params, delay=false) {

    try {
        if (delay && params.criteria !== "")  { yield delay(500) }

        const apiUrl = GetApiUrl(context);
        const response = yield (call(fetchApi, apiUrl, params.criteria))

        yield put({ "type": `FETCH_${context.toUpperCase()}_SUCCEED`, payload: response.data })

    } catch (error) {
        yield HandleError(`FETCH_${context.toUpperCase()}_FAILED`, error)
    }
}

const GetApiUrl = (context) => {
    return `${AppConfig.API_URL}/${context.toLowerCase()}`
}
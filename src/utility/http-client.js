import { takeLatest, call, put, takeEvery, delay } from 'redux-saga/effects'
import axios from "axios"
import { AppConfig, GetContext } from '../AppConfig'
import { HandleError } from './handle-error'


const fetchApi = (apiUrl, criteria) => axios.get(`${apiUrl}/${criteria}`)
const saveUserApi = (apiUrl) => axios.post(apiUrl)

export function* fetch(context, params, delay=false) {

    try {
        if (delay && params.criteria !== "")  { yield delay(500) }

        var contextObj = GetContext(context);
        const apiUrl = GetApiUrl(contextObj.apiContext);

        const response = yield (call(fetchApi, apiUrl, params.criteria))

        yield put({ "type": `FETCH_${contextObj.actionContextPlural}_SUCCEED`, payload: response.data })

    } catch (error) {
        yield HandleError(`FETCH_${contextObj.actionContextPlural}_FAILED`, error)
    }
}


export function* save(context, params) {
    try {
        var contextObj = GetContext(context);

        const apiUrl = GetApiUrl(contextObj.apiContext);
        const response = yield (call(saveUserApi, apiUrl, params.user))

        yield put({ "type": `SAVE_${contextObj.actionContextSingular}_SUCCEED`, payload: response.data })
    
    } catch (error) {
        yield HandleError(`SAVE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}

const GetApiUrl = (apiContext) => {
    return `${AppConfig.API_URL}/${apiContext}`
}


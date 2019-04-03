import { call, put } from 'redux-saga/effects'
import axios from "axios"
import { AppConfig, GetContext } from '../AppConfig'
import { HandleError } from './handle-error'


const fetchApi = (apiUrl, criteria) => axios.get(`${apiUrl}/${criteria}`)
const saveApi = (apiUrl, payload) => {
    return axios({ method: 'post', url: apiUrl, data: payload });
}
const deleteApi = (apiUrl, id) => axios.get(`${apiUrl}/${id}`)


export function* fetch(context, params, delay = false) {

    try {
        if (delay && params.criteria !== "") { yield delay(500) }

        var contextObj = GetContext(context);
        const apiUrl = GetApiUrl(contextObj.apiContext);

        const response = yield (call(fetchApi, apiUrl, params.criteria))

        yield put({ "type": `FETCH_${contextObj.actionContextPlural}_SUCCEED`, payload: response.data })

    } catch (error) {
        yield HandleError(`FETCH_${contextObj.actionContextPlural}_FAILED`, error)
    }
}


export function* save(context, payload) {
    try {
        var contextObj = GetContext(context);

        const apiUrl = GetApiUrl(contextObj.apiContext);
        const response = yield (call(saveApi, apiUrl, payload))

        yield put({ "type": `SAVE_${contextObj.actionContextSingular}_SUCCEED`, payload: response.data })

    } catch (error) {
        yield HandleError(`SAVE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}

export function* remove(context, id) {
    try {
        var contextObj = GetContext(context);

        const apiUrl = GetApiUrl(contextObj.apiContext);
        const response = yield (call(deleteApi, apiUrl, id))

        yield put({ "type": `DELETE_${contextObj.actionContextSingular}_SUCCEED`, payload: response.data })
    } catch (error) {
        yield HandleError(`DELETE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}


const GetApiUrl = (apiContext) => {
    return `${AppConfig.API_URL}/${apiContext}`
}


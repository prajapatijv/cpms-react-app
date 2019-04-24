import { call, put, delay } from 'redux-saga/effects'
import axios from "axios"
import { GetItem, SetItem, RemoveItem, Clear } from './cache'
import { AppConfig, GetContext } from '../AppConfig'
import { HandleError, HandleSaveSuccess, HandleDeleteSuccess } from './status'


const fetchApi = (apiUrl, criteria) => axios.get(`${apiUrl}/${criteria}`)
const saveApi = (apiUrl, payload) => {
    return axios({ method: 'post', url: apiUrl, data: payload });
}
const deleteApi = (apiUrl, id) => axios.get(`${apiUrl}/${id}`)


export function* fetch(context, params, throttle = false) {

    try {
        var contextObj = GetContext(context);

        if (throttle && params.criteria !== "") { yield delay(500) }

        const apiUrl = GetApiUrl(contextObj.apiContext);
        var cached = GetItem(contextObj.actionContextPlural) 
        
        const response = cached === null ? yield (call(fetchApi, apiUrl, params.criteria)) : cached
        const data = (params.criteria === null) ? response.data : cached

        yield put({ "type": `FETCH_${contextObj.actionContextPlural}_SUCCEED`, payload: { users: data, criteria: params.criteria } })

        //Load cache
        SetItem(contextObj.actionContextPlural, cached === null ? response.data : cached) 

    } catch (error) {
        yield HandleError(`FETCH_${contextObj.actionContextPlural}_FAILED`, error)
    }
}


export function* save(context, payload) {
    try {
        var contextObj = GetContext(context);

        const apiUrl = GetApiUrl(contextObj.apiContext);
        const response = yield (call(saveApi, apiUrl, payload))

        yield HandleSaveSuccess(contextObj.actionContextSingular, response.data)

    } catch (error) {
        yield HandleError(`SAVE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}

export function* remove(context, id) {
    try {
        var contextObj = GetContext(context);

        const apiUrl = GetApiUrl(contextObj.apiContext);
        const response = yield (call(deleteApi, apiUrl, id))

        yield HandleDeleteSuccess(contextObj.actionContextSingular, response.data)

    } catch (error) {
        yield HandleError(`DELETE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}


const GetApiUrl = (apiContext) => {
    return `${AppConfig.API_URL}/${apiContext}`
}


import { call, put, delay } from 'redux-saga/effects'
import axios from "axios"
import { GetItem, SetItem, RemoveItem } from './cache'
import { AppConfig, GetContext } from '../AppConfig'
import { HandleError, HandleSaveSuccess, HandleDeleteSuccess } from './status'
import { navigate } from '@reach/router'


const fetchApi = (apiUrl, criteria) => axios.get(`${apiUrl}`)
const saveApi = (apiUrl, payload) => {
    return axios({ method: 'post', url: apiUrl, data: payload });
}
const deleteApi = (apiUrl, id) => axios.delete(`${apiUrl}/${id}`)


export function* fetch(context, params, throttle = false) {

    try {
        var contextObj = GetContext(context);

        if (throttle && params.criteria !== "") { yield delay(500) }

        const apiUrl = GetApiUrl(contextObj.apiContext);
        var cached = GetItem(contextObj.actionContextPlural) 
        
        const response = (cached === null || params.criteria === "") ? yield (call(fetchApi, apiUrl)) : cached
        const data = (cached === null || params.criteria === "") ? response.data : cached

        yield put({ "type": `FETCH_${contextObj.actionContextPlural}_SUCCEED`, payload: { data: data, criteria: params.criteria } })

        //Load cache
        SetItem(contextObj.actionContextPlural, data) 

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

        //Cleanup cache
        RemoveItem(contextObj.actionContextPlural) 

        navigate(`/${contextObj.apiContext}/3`)
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

        //Cleanup cache
        RemoveItem(contextObj.actionContextPlural) 
        
        navigate(`/${contextObj.apiContext}`)
    } catch (error) {
        yield HandleError(`DELETE_${contextObj.actionContextSingular}_FAILED`, error)
    }
}


const GetApiUrl = (apiContext) => {
    return `${AppConfig.API_URL}/${apiContext}`
}


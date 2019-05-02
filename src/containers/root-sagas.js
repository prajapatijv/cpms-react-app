import { all , call} from "redux-saga/effects";

import applySagaTemplate from '../utility/saga-template'
import {addErrorSaga} from './status-bar/actions'
import { GetContext } from '../AppConfig'

const userContext = GetContext('user')
const itemContext = GetContext('item')

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        ...applySagaTemplate(userContext),
        ...applySagaTemplate(itemContext)
    ])
}
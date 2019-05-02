import { all , call} from "redux-saga/effects";

import applySagaTemplate from '../utility/saga-template'
import {addErrorSaga} from './status-bar/actions'

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        ...applySagaTemplate('USERS','USER'),
        ...applySagaTemplate('ITEMS','ITEM')
    ])
}
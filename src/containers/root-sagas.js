import { all , call} from "redux-saga/effects";

import {addErrorSaga} from './status-bar/actions'
import { userSagas } from './user-page/sagas'
import { itemSagas } from './item-page/sagas'

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        ...userSagas,
        ...itemSagas
    ])
}
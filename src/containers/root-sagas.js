import { all , call} from "redux-saga/effects";

import applySagaTemplate from '../utility/saga-template'
import {addErrorSaga} from './status-bar/actions'
import { Config } from '../AppConfig'

const {user, item } = Config.root.mappings

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        ...applySagaTemplate(user),
        ...applySagaTemplate(item)
    ])
}
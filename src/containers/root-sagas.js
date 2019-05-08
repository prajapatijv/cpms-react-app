import { all , call} from "redux-saga/effects";

import withPageSaga from '../utility/with-page-saga'
import {addErrorSaga} from './status-bar/actions'
import { Config } from '../AppConfig'

const {user, item , category, asset } = Config.mappings

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        ...withPageSaga(user),
        ...withPageSaga(item),
        ...withPageSaga(category),
        ...withPageSaga(asset)
    ])
}
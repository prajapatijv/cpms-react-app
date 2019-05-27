import { all , call} from "redux-saga/effects";

import { loginSaga } from '../containers/login-page/sagas'
import withPageSaga from '../utility/with-page-saga'
import { addErrorSaga } from './status-bar/actions'
import { Config } from '../AppConfig'

const {user, item , category, asset } = Config.mappings

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        call(loginSaga),
        ...withPageSaga(user),
        ...withPageSaga(item),
        ...withPageSaga(category),
        ...withPageSaga(asset)
    ])
}
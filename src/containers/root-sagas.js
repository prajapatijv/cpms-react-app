import { all , call} from "redux-saga/effects";

import {addErrorSaga} from './status-bar/actions'
import { fetchUserSaga, saveUserSaga, deleteUserSaga } from './user-page/sagas'

export default function* rootSaga() {
    yield all([
        call(addErrorSaga),
        call(fetchUserSaga),
        call(saveUserSaga),
        call(deleteUserSaga)
    ])
}
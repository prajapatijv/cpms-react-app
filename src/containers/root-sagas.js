import { all , call} from "redux-saga/effects";

import { fetchUserSaga, saveUserSaga } from './user-page/sagas'

export default function* rootSaga() {
    yield all([
        call(fetchUserSaga),
        call(saveUserSaga)
    ])
}
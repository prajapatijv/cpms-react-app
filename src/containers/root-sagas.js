import { all } from "redux-saga/effects";

import { fetchUserSaga } from './user-page/sagas'

export default function* rootSaga() {
    yield all([
        fetchUserSaga(),
    ])
}
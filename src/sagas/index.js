import {fork, takeEvery} from 'redux-saga/effects';
import {getSheep} from 'sagas/apiSagas';
import {actionTypes as apiActionTypes} from 'actions/apiActions';

function* watchGetSheep() {
  yield takeEvery(apiActionTypes.GET_SHEEP, getSheep);
}

export default function* rootSaga() {
  yield fork(watchGetSheep);
}


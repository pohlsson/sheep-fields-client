import {put, call} from 'redux-saga/effects';
import apiCalls from 'services/apiCalls';
import * as actions from 'actions/apiActions';

const apiUrl = 'http://localhost:3001';

export function* getSheep() {
  try {
    const response = yield call(
      apiCalls.get,
      {
        url: `${apiUrl}/sheep`,
      },
    );
    yield put(actions.getSheepDone(response.body));
  } catch (e) {
    yield put(actions.getSheepError);
  }
}

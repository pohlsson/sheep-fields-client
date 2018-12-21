import {put, call} from 'redux-saga/effects';
import apiCalls from 'services/apiCalls'
import {getSheep} from 'sagas/apiSagas';
import {actionTypes} from 'actions/apiActions';

describe('Api sagas', () => {
  const apiUrl = 'http://localhost:3001';

  it('should get sheep correctly', () => {
    const generator = getSheep();
    const expectedEndpoint = '/sheep';
    const sheep = 'testSheep';

    expect(generator.next().value).toEqual(call(apiCalls.get, {
      url: apiUrl + expectedEndpoint,
    }));
    expect(generator.next(sheep).value).toEqual(put({
      type: actionTypes.GET_SHEEP_DONE,
      payload: {
        sheep,
      },
    }));
    expect(generator.next().done).toEqual(true);
  });

});


import {getSheep} from 'sagas/apiSagas';
import * as target from 'actions/apiActions';

describe('Api actions', () => {
  it('should create get sheep action', () => {
    const expectedAction = {
      type: 'GET_SHEEP'
    };

    const response = target.getSheep();

    expect(response).toEqual(expectedAction);
  });

  it('should create get sheep done action', () => {
    const payload = 'testPayload';
    const expectedAction = {
      type: 'GET_SHEEP_DONE',
      payload,
    };

    const response = target.getSheepDone(payload);

    expect(response).toEqual(expectedAction);
  });

  it('should create get sheep error action', () => {
    const payload = 'testPayload';
    const expectedAction = {
      type: 'GET_SHEEP_ERROR',
      payload,
    };

    const response = target.getSheepError(payload);

    expect(response).toEqual(expectedAction);
  });
});


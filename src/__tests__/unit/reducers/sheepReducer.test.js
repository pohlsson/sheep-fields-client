import sheepReducer from 'reducers/sheepReducer';
import {actionTypes as apiActionTypes} from 'actions/apiActions';

describe('Sheep reducer', () => {
  const initialState = {};

  it('should return the initial state', () => {
    const expectedState = initialState;

    const response = sheepReducer(undefined, {});

    expect(response).toEqual(expectedState);
  });

  it('should handle GET_SHEEP_DONE correctly', () => {
    const action = {
      type: apiActionTypes.GET_SHEEP_DONE,
      payload: 'testSheep'
    };

    const expectedState = {
      sheep: action.payload,
    };

    const response = sheepReducer({}, action);

    expect(response).toEqual(expectedState);
  });
});
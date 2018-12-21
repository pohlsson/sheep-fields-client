import {actionTypes as apiActionTypes} from "../actions/apiActions";

const initialState = {};

const sheepReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.GET_SHEEP_DONE:
      return {
        ...state,
        sheep: action.payload,
      };
    default:
      return state;
  }
};

export default sheepReducer;
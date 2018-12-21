export const actionTypes = {
  GET_SHEEP: 'GET_SHEEP',
  GET_SHEEP_DONE: 'GET_SHEEP_DONE',
  GET_SHEEP_ERROR: 'GET_SHEEP_ERROR',
};

export const getSheep = () => ({
  type: actionTypes.GET_SHEEP,
});

export const getSheepDone = payload => ({
  type: actionTypes.GET_SHEEP_DONE,
  payload,
});

export const getSheepError = payload => ({
  type: actionTypes.GET_SHEEP_ERROR,
  payload,
});

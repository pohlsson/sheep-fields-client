import {combineReducers} from 'redux'
import {sheepReducer as sheep} from 'reducers/sheepReducer';

export default combineReducers({
  sheep,
})
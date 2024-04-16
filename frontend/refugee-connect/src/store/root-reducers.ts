// rootReducer.js
import { combineReducers } from 'redux';
import resourceReducer from './resource/resource-reducer';
import campReducer from './camp/camp-reducer';

const rootReducer = combineReducers({
  resources: resourceReducer, campReducer
});

export default rootReducer;

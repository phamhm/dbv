import { combineReducers } from 'redux';
import filereaderReducers from './filereader-app/reducer';

export default combineReducers({
  ...filereaderReducers
});

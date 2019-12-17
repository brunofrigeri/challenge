import {combineReducers} from 'redux';
import favorites from './favorites/reducer';
import repositories from './repositories/reducer';

export default combineReducers({
  favorites,
  repositories,
});

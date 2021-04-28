import { combineReducers } from 'redux';

import titles from './titles/titles-reducer';
import subTitles from './sub-titles/sub-titles-reducer';

export default combineReducers({
  titles,
  subTitles,
});

import { combineReducers } from 'redux';
import preSalesReducer from './preSalesReducer';

const appReducers = combineReducers({
  /* Here will be the reducers added */
  preSales: preSalesReducer,
});

export default appReducers;
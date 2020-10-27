import { combineReducers } from 'redux';
import preSalesReducer from './preSalesReducer';
import listProducts from './listProducts';

const appReducers = combineReducers({
  /* Here will be the reducers added */
  preSales: preSalesReducer,
  listProducts: listProducts,
});

export default appReducers;
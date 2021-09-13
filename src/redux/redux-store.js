import { applyMiddleware, combineReducers, createStore} from 'redux';
import dataReducer from './data-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  tableData: dataReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
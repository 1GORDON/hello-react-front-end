import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer, { fetchmessage } from './greeting/fetchapi';

const reducer = combineReducers({
  message: messageReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchmessage());
export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import newsReducer  from './reducers';

const reducers = combineReducers({newsdata : newsReducer});

export default createStore(reducers,{}, applyMiddleware(reduxThunk) );
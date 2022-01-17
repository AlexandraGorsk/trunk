import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './posts';

const logger = (store) => (next) => (action) => {
	console.log(action);
	return next(action);
};

const reducers = combineReducers({ posts: postsReducer });
const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;

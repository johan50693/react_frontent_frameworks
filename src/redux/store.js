import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store= createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
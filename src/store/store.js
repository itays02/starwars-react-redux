import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

import charactersHandlerMiddleware from './middlewares/charactersHandlerMiddleware';

const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(charactersHandlerMiddleware));

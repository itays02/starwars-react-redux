import { combineReducers } from 'redux';
import starwarsReducer from './starwarsReducer';

const rootReducer = combineReducers({
    starwars: starwarsReducer,
});

export default rootReducer;
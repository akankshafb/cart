import {combineReducers} from 'redux';
import reducerFunction from './reducerFunction';

const combinedReducers = combineReducers({data:reducerFunction});

export default combinedReducers;
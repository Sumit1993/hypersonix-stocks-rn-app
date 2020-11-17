import {combineReducers} from '@reduxjs/toolkit';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

export default rootReducer;

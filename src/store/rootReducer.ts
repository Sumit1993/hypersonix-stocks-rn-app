import {combineReducers} from '@reduxjs/toolkit';
import AuthReducer from './Auth/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;

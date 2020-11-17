import {createReducer} from '@reduxjs/toolkit';
import {IAuth} from './types';
import AuthActions from './actions';

const {login, logout, setAuthStatus, setCanAuthStatus} = AuthActions;

const initialState: IAuth = {
  isLoggedIn: false,
  isAuthenticated: false,
  canAuthenticate: true,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(login, (state) => {
      state.isLoggedIn = true;
    })
    .addCase(logout, (state) => {
      state.isLoggedIn = false;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.isAuthenticated = action.payload;
    })
    .addCase(setCanAuthStatus, (state, action) => {
      state.canAuthenticate = action.payload;
    }),
);

export default reducer;

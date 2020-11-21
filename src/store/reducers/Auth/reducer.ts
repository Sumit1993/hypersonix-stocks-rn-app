import {createReducer} from '@reduxjs/toolkit';
import {IAuth} from './types';
import AuthActions from './actions';

const {login, logout} = AuthActions;

const initialState: IAuth = {
    isLoggedIn: false,
};

const reducer = createReducer(initialState, (builder) =>
    builder
        .addCase(login, (state) => {
            state.isLoggedIn = true;
        })
        .addCase(logout, (state) => {
            state.isLoggedIn = false;
        }),
);

export default reducer;

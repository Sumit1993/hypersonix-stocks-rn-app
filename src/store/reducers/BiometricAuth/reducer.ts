import {createReducer} from '@reduxjs/toolkit';
import {IAuth} from './types';
import AuthActions from './actions';

const {setAuthStatus, setCanAuthStatus} = AuthActions;

const initialState: IAuth = {
    isAuthenticated: false,
    canAuthenticate: true,
};

const reducer = createReducer(initialState, (builder) =>
    builder
        .addCase(setAuthStatus, (state, action) => {
            state.isAuthenticated = action.payload;
        })
        .addCase(setCanAuthStatus, (state, action) => {
            state.canAuthenticate = action.payload;
        }),
);

export default reducer;

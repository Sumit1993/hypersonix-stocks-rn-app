import {createAction} from '@reduxjs/toolkit';

const login = createAction('AUTH/LOGIN');

const logout = createAction('AUTH/LOGOUT');

const setAuthStatus = createAction<boolean>('AUTH/SET_AUTH_STATUS');

const setCanAuthStatus = createAction<boolean>('AUTH/SET_CAN_AUTH_STATUS');

export default {
    login,
    logout,
    setAuthStatus,
    setCanAuthStatus,
};

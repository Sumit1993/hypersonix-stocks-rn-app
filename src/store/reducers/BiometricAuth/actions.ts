import {createAction} from '@reduxjs/toolkit';

const setAuthStatus = createAction<boolean>('AUTH/SET_AUTH_STATUS');

const setCanAuthStatus = createAction<boolean>('AUTH/SET_CAN_AUTH_STATUS');

export default {
    setAuthStatus,
    setCanAuthStatus,
};

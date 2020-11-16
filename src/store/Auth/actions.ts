import {createAction} from '@reduxjs/toolkit';

const login = createAction('AUTH/LOGIN');
const logout = createAction('AUTH/LOGOUT');

export default {
  login,
  logout,
};

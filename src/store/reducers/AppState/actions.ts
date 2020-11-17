import {createAction} from '@reduxjs/toolkit';

const setActive = createAction('APP_STATE/SET_ACTIVE');

const setBackground = createAction('APP_STATE/SET_BACKGROUND');

export default {
  setActive,
  setBackground,
};

import {createReducer} from '@reduxjs/toolkit';
import {AppStateStatus} from 'react-native';
import AppStateActions from './actions';

const {setActive, setBackground} = AppStateActions;

const initialState: {currentState: AppStateStatus} = {currentState: 'inactive'};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setActive, (state) => {
      state.currentState = 'active';
    })
    .addCase(setBackground, (state) => {
      state.currentState = 'background';
    }),
);

export default reducer;

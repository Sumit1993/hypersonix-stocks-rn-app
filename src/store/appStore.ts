import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER} from 'redux-persist';

import persistedReducer from './persistReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export default () => {
  return configureStore({
    reducer: persistedReducer,
    middleware,
  });
};

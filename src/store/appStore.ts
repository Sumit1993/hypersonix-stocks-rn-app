import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import middlewares from './middlewares';

import persistedReducer from './persistReducer';

const {Logics} = middlewares;

const logicsMiddleware = Logics();

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
    logicsMiddleware,
];

export default () => {
    return configureStore({
        reducer: persistedReducer,
        middleware,
    });
};

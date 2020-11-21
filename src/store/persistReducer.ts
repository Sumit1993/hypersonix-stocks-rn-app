import {PersistConfig, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';
import {RootState} from '.';

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['appState', 'biometricAuth', 'chartOptions'],
    version: 1,
    debug: __DEV__,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

import {useDispatch} from 'react-redux';
import {persistStore} from 'redux-persist';

import rootReducer from './rootReducer';
import store from './appStore';

const appStore = store();

export const persistor = persistStore(appStore);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appStore;

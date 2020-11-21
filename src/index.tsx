import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {enableScreens} from 'react-native-screens';

import App from './App';
import store, {persistor} from './store';

const Root = () => {
    enableScreens();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

export default Root;

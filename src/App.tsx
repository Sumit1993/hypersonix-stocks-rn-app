/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {AppState, AppStateStatus} from 'react-native';
// @ts-ignore
import {Root} from 'popup-ui';

import {useAppDispatch} from './store';
import AppNav from './navigation/AppNav';
import AppStateActions from './store/reducers/AppState/actions';

const App: React.FC = () => {
    useEffect(() => {
        handleAppStateChange('active');
        AppState.addEventListener('change', handleAppStateChange);
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    const dispatch = useAppDispatch();

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (nextAppState === 'active') {
            dispatch(AppStateActions.setActive());
        } else if (nextAppState === 'background') {
            dispatch(AppStateActions.setBackground());
        }
    };

    return (
        <Root>
            <NavigationContainer>
                <AppNav />
            </NavigationContainer>
        </Root>
    );
};

export default App;

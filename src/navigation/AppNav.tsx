import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screen/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HomeScreen from '../screen/Home';
import AuthScreen from '../screen/Auth';

const Stack = createStackNavigator();

/**
 * @todo handle canAuthenticate
 */
const AppNav = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const bioAuth = useSelector((state: RootState) => state.biometricAuth);
    return (
        <Stack.Navigator headerMode="none">
            {auth && auth.isLoggedIn ? (
                !true ? (
                    <Stack.Screen name="Auth" component={AuthScreen} />
                ) : (
                    <Stack.Screen name="Home" component={HomeScreen} />
                )
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default AppNav;

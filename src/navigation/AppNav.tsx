import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screen/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HomeScreen from '../screen/Home';
import AuthScreen from '../screen/Auth';
import OverviewScreen from '../screen/Overview';
import {CompanyOverview} from '../models/AlphaVantage';

export type RootStackParamList = {
    Auth: undefined;
    Login: undefined;
    Home: undefined;
    Overview: CompanyOverview;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNav = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const bioAuth = useSelector((state: RootState) => state.biometricAuth);
    return (
        <Stack.Navigator headerMode="none">
            {auth && auth.isLoggedIn ? (
                !bioAuth.isAuthenticated ? (
                    <Stack.Screen name="Auth" component={AuthScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="Overview"
                            component={OverviewScreen}
                        />
                    </>
                )
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default AppNav;

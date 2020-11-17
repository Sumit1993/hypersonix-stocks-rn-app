import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screen/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HomeScreen from '../screen/Home';
import AuthScreen from '../screen/Auth';

const Stack = createStackNavigator();

const AppNav = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator headerMode="none">
      {auth.isLoggedIn ? (
        auth.isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNav;

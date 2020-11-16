import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/Login';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HomeScreen from '../screen/Home';

const Stack = createStackNavigator();

const AppNav = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <Stack.Navigator headerMode="none">
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNav;

import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNav;

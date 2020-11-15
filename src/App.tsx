/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNav from './navigation/AppNav';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

export default App;

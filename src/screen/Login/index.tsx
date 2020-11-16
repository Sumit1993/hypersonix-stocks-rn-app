import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginActions from '../../component/LoginActions';
import LoginBG from '../../component/LoginBG';

import styles from './styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginBG />
      <LoginActions />
    </SafeAreaView>
  );
};

export default LoginScreen;

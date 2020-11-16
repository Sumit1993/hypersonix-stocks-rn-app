import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';

import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

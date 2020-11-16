import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import Images from '../../constants/images';
import styles from './styles';

const LoginBG = () => {
  return (
    <>
      <FastImage
        source={Images.loginBG}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
    </>
  );
};

export default LoginBG;

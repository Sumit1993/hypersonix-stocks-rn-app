import React from 'react';
import {SocialIcon} from 'react-native-elements';

import styles from './styles';
import AuthHelper from '../../helpers/Auth';

const {loginUser} = AuthHelper;

const LoginActions = () => {
  return (
    <SocialIcon
      title="Signin with Google"
      type="google"
      raised={true}
      button={true}
      light={true}
      style={styles.googleBtn}
      onPress={loginUser}
    />
  );
};

export default LoginActions;

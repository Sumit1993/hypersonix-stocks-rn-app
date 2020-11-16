import store from '../store';
import RNFAuth from '../utils/RNFAuth';
import AuthActions from '../store/Auth/actions';

const {login} = AuthActions;

const loginUser = async () => {
  const user = await RNFAuth.signIn();
  if (user) {
    store.dispatch(login());
  }
};

export default {loginUser};

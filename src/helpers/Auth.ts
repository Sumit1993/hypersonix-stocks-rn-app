import store from '../store';
import RNFAuthService from '../utils/RNFAuth';
import AuthActions from '../store/reducers/Auth/actions';

const {login} = AuthActions;

const loginUser = async () => {
    const user = await RNFAuthService.signIn();
    if (user) {
        store.dispatch(login());
    }
};

export default {loginUser};

import {createLogic} from 'redux-logic';

import {RootState} from '../..';
import {ILogicsDeps} from '../../../models/LogicsDeps';
import AppStateActions from '../../reducers/AppState/actions';
import BiometricAuthActions from '../../reducers/BiometricAuth/actions';

const {setActive} = AppStateActions;
const {setAuthStatus} = BiometricAuthActions;

const authenticateUser = createLogic<RootState, any, any, ILogicsDeps>({
    type: setActive.type,
    async process({getState}, dispatch, done) {
        const auth = getState().auth;
        const bioAuth = getState().biometricAuth;
        if (auth.isLoggedIn && bioAuth.isAuthenticated) {
            // @ts-ignore
            dispatch(setAuthStatus(false));
        }
        done();
    },
});

export default [authenticateUser];

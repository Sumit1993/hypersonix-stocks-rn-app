import {createLogic} from 'redux-logic';

import {RootState} from '../..';
import {ILogicsDeps} from '../../../models/LogicsDeps';
import AppStateActions from '../../reducers/AppState/actions';
import AuthActions from '../../reducers/Auth/actions';

const {setActive} = AppStateActions;
const {setAuthStatus} = AuthActions;

const authenticateUser = createLogic<RootState, any, any, ILogicsDeps>({
    type: setActive.type,
    async process({getState}, dispatch, done) {
        const auth = getState().auth;
        const {isAuthenticated, isLoggedIn} = auth;
        if (isLoggedIn && isAuthenticated) {
            // @ts-ignore
            dispatch(setAuthStatus(false));
        }
        done();
    },
});

export default [authenticateUser];

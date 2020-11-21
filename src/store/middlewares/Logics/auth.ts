import {createLogic} from 'redux-logic';

import {RootState} from '../..';
import {ILogicsDeps} from '../../../models/LogicsDeps';
import BiometricAuthActions from '../../reducers/BiometricAuth/actions';
// @ts-ignore
import {Popup} from 'popup-ui';

const {setCanAuthStatus} = BiometricAuthActions;

const cannotAuth = createLogic<RootState, any, any, ILogicsDeps>({
    type: setCanAuthStatus.type,
    async process({getState}, dispatch, done) {
        const bio = getState().biometricAuth;
        if (!bio.canAuthenticate) {
            Popup.show({
                type: 'Danger',
                title: 'Fingerprint sensor unavailable',
                textBody:
                    "Seems like you don't have a fingerprint sensor on your phone.",
                buttonText: 'Ok',
                callback: () => Popup.hide(),
            });
        }
        done();
    },
});

export default [cannotAuth];

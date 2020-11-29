import React, {useEffect} from 'react';
import {Platform, SafeAreaView} from 'react-native';

import FingerprintScannerHelper from '../../helpers/FingerprintScanner';
import FingerprintPopup from '../../component/FingerprintPopup';
import styles from './styles';
import {RootState, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import BiometricAuthActions from '../../store/reducers/BiometricAuth/actions';
import LoginBG from '../../component/LoginBG';

const {setCanAuthStatus, setAuthStatus} = BiometricAuthActions;

const AuthScreen = () => {
    const canAuthenticate = useSelector(
        (state: RootState) => state.biometricAuth.canAuthenticate,
    );

    const dispatch = useAppDispatch();

    const bootstrap = async () => {
        const result = await FingerprintScannerHelper.detectScanner();
        if (
            !(
                Platform.OS === 'ios' &&
                (result === 'Face ID' || result === 'Touch ID')
            ) &&
            !(Platform.OS === 'android' && result === 'Biometrics')
        ) {
            dispatch(setCanAuthStatus(false));
        }
    };

    useEffect(() => {
        bootstrap();
    }, []);

    const onAuthenticate = () => {
        dispatch(setAuthStatus(true));
    };

    return (
        <SafeAreaView style={styles.container}>
            <LoginBG />
            {canAuthenticate && (
                <FingerprintPopup onAuthenticate={onAuthenticate} />
            )}
        </SafeAreaView>
    );
};

export default AuthScreen;

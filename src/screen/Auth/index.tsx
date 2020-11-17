import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView} from 'react-native';

import FingerprintScannerHelper from '../../helpers/FingerprintScanner';
import FingerprintPopup from '../../component/FingerprintPopup';
import styles from './styles';
import {RootState, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import AuthActions from '../../store/reducers/Auth/actions';

const {setCanAuthStatus, setAuthStatus} = AuthActions;

const AuthScreen = () => {
    const canAuthenticate = useSelector(
        (state: RootState) => state.auth.canAuthenticate,
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
            {canAuthenticate && (
                <FingerprintPopup onAuthenticate={onAuthenticate} />
            )}
        </SafeAreaView>
    );
};

export default AuthScreen;

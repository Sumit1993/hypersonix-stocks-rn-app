import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {FingerprintScannerError} from 'react-native-fingerprint-scanner';

import FingerprintScannerHelper from '../../helpers/FingerprintScanner';
import ScannerAndroidLegacy from './Scanner.android.legacy';

interface IProps {
    onAuthenticate: () => void;
}

const Scanner: React.FC<IProps> = (props) => {
    const bootstrap = async () => {
        if (!requiresLegacyAuthentication()) {
            try {
                await FingerprintScannerHelper.authAndroid(
                    'Confirm your fingerprint, screen lock pattern, PIN or password.',
                );
                props.onAuthenticate();
            } catch (error) {
                alert(error);
            }
        }
    };

    const alert = (error: FingerprintScannerError) => {
        Alert.alert(
            error.name,
            'Please restart the app and try again',
            [{text: 'Retry', onPress: () => bootstrap()}],
            {cancelable: false},
        );
    };

    useEffect(() => {
        bootstrap();
    }, []);

    const requiresLegacyAuthentication = () => {
        return Platform.Version < 23;
    };

    if (requiresLegacyAuthentication()) {
        return <ScannerAndroidLegacy onAuthenticate={props.onAuthenticate} />;
    }

    return null;
};

export default Scanner;

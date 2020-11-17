import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';

import {FingerprintScannerError} from 'react-native-fingerprint-scanner';

import ShakingText from '../ShakingText';
import styles from './Scanner.styles';
import Images from '../../constants/images';
import FingerprintScannerHelper from '../../helpers/FingerprintScanner';

interface IProps {
    onAuthenticate: () => void;
}

const Scanner: React.FC<IProps> = (props) => {
    const [biometricLegacyErr, setBiometricLegacyErr] = useState<
        FingerprintScannerError
    >();
    const description = useRef<{
        shake: () => void;
    }>(null);

    const bootstrap = async () => {
        try {
            await FingerprintScannerHelper.authAndroidLegacy(
                handleAuthenticationAttemptedLegacy,
            );
            props.onAuthenticate();
        } catch (error) {
            setBiometricLegacyErr(error);
            description.current && description.current.shake();
        }
    };

    const alert = () => {
        Alert.alert(
            biometricLegacyErr ? biometricLegacyErr.name : 'Opps!!',
            biometricLegacyErr
                ? biometricLegacyErr.message
                : 'Something went wrong, please try again',
            [{text: 'Retry', onPress: () => bootstrap()}],
            {cancelable: false},
        );
    };

    useEffect(() => {
        bootstrap();
    }, []);

    const handleAuthenticationAttemptedLegacy = (
        error: FingerprintScannerError,
    ) => {
        setBiometricLegacyErr(error);
        description.current && description.current.shake();
    };

    const renderLegacy = () => {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.logo} source={Images.fingerPrint} />
                    <Text style={styles.heading}>
                        Biometric{'\n'}Authentication
                    </Text>
                    <ShakingText
                        ref={description}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            color:
                                biometricLegacyErr &&
                                !!biometricLegacyErr.message
                                    ? '#ea3d13'
                                    : '#a5a5a5',
                            ...styles.description,
                        }}>
                        {biometricLegacyErr && biometricLegacyErr.message}
                    </ShakingText>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => alert()}>
                        <Text style={styles.buttonText}>BACK TO MAIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return renderLegacy();
};

export default Scanner;

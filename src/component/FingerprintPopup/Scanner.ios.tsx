import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import FingerprintScannerHelper from '../../helpers/FingerprintScanner';

interface IProps {
    onAuthenticate: () => void;
}

const Scanner: React.FC<IProps> = (props) => {
    const bootstrap = async () => {
        try {
            await FingerprintScannerHelper.authIos();
            props.onAuthenticate();
        } catch (error) {
            Alert.alert(
                error.name,
                'Please restart the app and try again',
                [{text: 'Retry', onPress: () => bootstrap()}],
                {cancelable: false},
            );
        }
    };

    useEffect(() => {
        bootstrap();
    }, []);

    return null;
};

export default Scanner;

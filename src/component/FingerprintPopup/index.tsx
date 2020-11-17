/**
 * @format
 */

import React, {useEffect} from 'react';
import {Platform} from 'react-native';

import ScannerAndroid from './Scanner.android';
import ScannerIos from './Scanner.ios';
import FingerprintScannerHelper from '../../helpers/FingerprintScanner';

interface IProps {
    onAuthenticate: () => void;
}

const FingerprintPopup: React.FC<IProps> = (props) => {
    useEffect(() => {
        FingerprintScannerHelper.release();
    }, []);

    return (
        <>
            {Platform.OS === 'android' ? (
                <ScannerAndroid onAuthenticate={props.onAuthenticate} />
            ) : Platform.OS === 'ios' ? (
                <ScannerIos onAuthenticate={props.onAuthenticate} />
            ) : null}
        </>
    );
};

export default FingerprintPopup;

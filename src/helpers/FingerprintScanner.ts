import {FingerprintScannerError} from 'react-native-fingerprint-scanner';
import FingerprintScannerService from '../utils/FingerprintScanner';

const authIos = async () => {
    const result = await FingerprintScannerService.auth({
        description: 'Scan your fingerprint on the device scanner to continue',
        fallbackEnabled: true,
    });
    return result;
};

const authAndroid = async (description: string = 'Log in with Biometrics') => {
    const result = await FingerprintScannerService.auth({
        title: 'Unlock App',
        description,
    });
    return result;
};

const authAndroidLegacy = async (
    onAttempt: (error: FingerprintScannerError) => void,
) => {
    const result = await FingerprintScannerService.auth({onAttempt});
    return result;
};

const detectScanner = () => {
    return FingerprintScannerService.checkSensor();
};

const release = () => {
    return FingerprintScannerService.release();
};

export default {
    authIos,
    authAndroid,
    authAndroidLegacy,
    detectScanner,
    release,
};

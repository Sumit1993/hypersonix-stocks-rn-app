import FingerprintScanner, {
    AuthenticateAndroid,
    AuthenticateIOS,
} from 'react-native-fingerprint-scanner';

const auth = (platformProps: AuthenticateIOS | AuthenticateAndroid) => {
    return FingerprintScanner.authenticate(platformProps);
};

const checkSensor = () => {
    return FingerprintScanner.isSensorAvailable();
};

const release = () => {
    return FingerprintScanner.release();
};

export default {
    auth,
    checkSensor,
    release,
};

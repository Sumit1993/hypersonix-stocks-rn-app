import AuthReducer from './Auth/reducer';
import AppStateReducer from './AppState/reducer';
import BiometricAuthReducer from './BiometricAuth/reducer';

export default {
    auth: AuthReducer,
    appState: AppStateReducer,
    biometricAuth: BiometricAuthReducer,
};

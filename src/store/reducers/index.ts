import AuthReducer from './Auth/reducer';
import AppStateReducer from './AppState/reducer';
import BiometricAuthReducer from './BiometricAuth/reducer';
import ChartOptionsReducer from './ChartOptions/reducer';

export default {
    auth: AuthReducer,
    appState: AppStateReducer,
    biometricAuth: BiometricAuthReducer,
    chartOptions: ChartOptionsReducer,
};

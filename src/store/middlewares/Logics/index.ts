import {createLogicMiddleware} from 'redux-logic';

import {ILogicsDeps} from '../../../models/LogicsDeps';
import RNFAuthService from '../../../utils/RNFAuth';
import AppStateLogic from './appState';
import AuthLogic from './auth';
import ChartOptionsLogic from './chartOptions';

const Logics = () => {
    const deps: ILogicsDeps = {
        // optional injected dependencies for logic
        // anything you need to have available in your logic
        getFirebaseUser: RNFAuthService?.getCurrentUser,
    };

    return createLogicMiddleware(
        [...AppStateLogic, ...AuthLogic, ...ChartOptionsLogic],
        deps,
    );
};

export default Logics;

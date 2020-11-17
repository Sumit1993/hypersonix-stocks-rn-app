import {createLogicMiddleware} from 'redux-logic';

import {ILogicsDeps} from '../../../models/LogicsDeps';
import RNFAuthService from '../../../utils/RNFAuth';
import AppStateLogic from './appState';

const Logics = () => {
  const deps: ILogicsDeps = {
    // optional injected dependencies for logic
    // anything you need to have available in your logic
    getFirebaseUser: RNFAuthService?.getCurrentUser,
  };

  return createLogicMiddleware([...AppStateLogic], deps);
};

export default Logics;

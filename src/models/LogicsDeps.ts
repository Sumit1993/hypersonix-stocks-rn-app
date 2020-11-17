import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface ILogicsDeps {
  getFirebaseUser: () => FirebaseAuthTypes.User | null;
}

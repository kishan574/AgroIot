import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
        HISTORY_FETCH_SUCESS
} from './types';

console.ignoredYellowBox = ['Setting a timer'];

export const historyFetch = () => {
    
  return(dispatch) => {

firebase.database().ref(`/sensorData/`)
.on('value', snapshot => {
  dispatch({ type: HISTORY_FETCH_SUCESS , payload: snapshot.val() });
});
  };
};

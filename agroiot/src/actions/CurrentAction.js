import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
        CURRENT_FETCH_SUCESS
} from './types';

console.ignoredYellowBox = ['Setting a timer'];


     /*  export const currentFetch = () => {
      
  return(dispatch) => {
firebase.database().ref(`/sensorData/`)
.on('value', Snapshot => {
  dispatch({ type: CURRENT_FETCH_SUCESS , payload: Snapshot.val() });
});
};
};   
   */


    const list = [];
    const weeklyData = [];
    const x = [];
    const z = [];
  export const currentFetch = () => {
  return(dispatch) => {
 firebase.database().ref(`/sensorData/`)
 .on('value', Snapshot => {

   /* Snapshot.forEach(childSnapshot => {
   childSnapshot(data => {
          weeklyData.humidityData = data.val()
     // weeklyData.phScaleData = data.val()
      //weeklyData.temperatureData = data.val()
      list.push(weeklyData)
    })
  } )  */

  //list = Snapshot.val();
 
  Snapshot.forEach(childSnapshot => {
    childSnapshot.forEach(data => {
     weeklyData = {}
     weeklyData.sensData = data.val()
    
     list.push(weeklyData)
     })
    } )  

    const y = list.length;

console.log(y);


  x[0] = list [y-3];
  x[1] = list [y-2];
  x[2] = list [y-1];
  
  const jsonString = JSON.stringify(x);
    console.log(jsonString);

  dispatch({ type: CURRENT_FETCH_SUCESS , payload: x });

   { allowMore: true }
});

}
  
}
 
import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import firebase from 'firebase';
import  {Provider} from 'react-redux' ;
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux' ;
import reducers from './reducers';
import Router from './router';

class App extends Component {  
  componentWillMount() {
const config = {
  apiKey: "AIzaSyDWmiStPSLNhl3OvzeB2UgViTaVcTrKetE",
  authDomain: "agroiot-4f593.firebaseapp.com",
  databaseURL: "https://agroiot-4f593.firebaseio.com",
  projectId: "agroiot-4f593",
  storageBucket: "agroiot-4f593.appspot.com",
  messagingSenderId: "822708060517"
};
 
//firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
      <Router />
     </Provider>
    );

   
  }

}


export default App;
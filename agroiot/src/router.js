import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Scene,Router,Actions,Stack, Drawer} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CurrentList from './components/CurrentList';
import HistoryList from './components/HistoryList';

const RouterComponent = () => {

   return(
                 < Router>
        <Stack hideNavBar key="root"  >
            <Stack key="auth"  >
                <Scene 
                key="login" 
                component={LoginForm} 
                hideNavBar
                titleStyle={{alignSelf: 'center'}}
                
                />

            </Stack>

            <Stack key="main" >               
                <Scene 
                titleStyle={{marginLeft:'42%'}} 
                key="CurrentList" 
                component={CurrentList} 
                title="Information"                
                rightButtonImage= {require('../src/img/history.png')}
                onRight= {() => Actions.HistoryList() }
                  />
                
                <Scene 
                 titleStyle={{marginLeft:'31%'}} 
                 key="HistoryList" 
                 component={HistoryList} 
                 title="History"
                 
                 />

            </Stack>
            </Stack>                  
        </Router> 

    );
    }



export default RouterComponent;  

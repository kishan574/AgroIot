import {Scene,Router,Actions,Stack} from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import { Card, CardSection } from './common';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
    

class CurrentData extends Component {
   
      render() {
        const {sensData}  = this.props.sensorData;
        console.log(sensData);
        
        return(
          <TouchableWithoutFeedback>
          
          <View>
          <Card>
                          <CardSection> 
                              <Text style={styles.titleStyle}>
                              Sensor Data
                               </Text>  
                          </CardSection>
                         
                          <CardSection>
                               <Text style={styles.dataStyle}>
                         {sensData}
                               </Text>
                          </CardSection>

                          
          
                      </Card>
          </View>
          
          </TouchableWithoutFeedback>
        );

      } 
    }


    const styles = {
        titleStyle:{
          fontSize: 18,
          paddingLeft: 15
        },
        dataStyle:{
          fontSize: 18,
          paddingLeft: 15,
          
        }
      };
      
  export default CurrentData;
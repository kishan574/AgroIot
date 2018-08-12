import {Scene,Router,Actions,Stack} from 'react-native-router-flux';
import { Card, CardSection } from './common';
//import firebase from 'firebase';
import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity } from 'react-native';
import Timestamp from 'react-timestamp';


class HistoryData extends Component{
    render() {
       
         const x =   firebase.database.ServerValue.TIMESTAMP;
         console.log(x);

        const { humidityData , phScaleData , temperatureData } = this.props.sensorData; 

        const timeStamp  = new Date();
        console.log(timeStamp);

         return(
        <TouchableWithoutFeedback>
          
<View>
        <Card>
            
            <Card>
                <CardSection>
                    <Text style={styles.titleStyle1}> 
                    <Timestamp time={timeStamp} format='full' component={Text} />
                   {/* { timeStamp} */}
                     </Text>
                </CardSection>
            </Card>

            <Card>
                <CardSection> 
                    <Text style={styles.dataStyle}>
                    HUMIDITY
                     </Text>  
                </CardSection>
               
                <CardSection>
                     <Text style={styles.dataStyle}>
               {humidityData}
                     </Text>
                </CardSection>

            </Card>

            <Card>
               <CardSection> 
                    <Text style={styles.dataStyle}>
                    PH SCALE
                     </Text>  
                </CardSection>

               <CardSection>
                     <Text style={styles.dataStyle}>
              {phScaleData} 
                     </Text>
               </CardSection>

            </Card>
            
            <Card>
                <CardSection> 
                    <Text style={styles.dataStyle}>
                    TEMPERATURE
                    </Text>  
                </CardSection>

               <CardSection>
                     <Text style={styles.dataStyle}>
              {temperatureData} 
                     </Text>
               </CardSection>
            </Card>
               
        </Card>
    </View>

        </TouchableWithoutFeedback>
        );        
      }

}

const styles = {
    dataStyle:{
      fontSize: 18,
      paddingLeft: 15,
      
    },
    titleStyle:{
        fontSize:20,
        fontWeight: 'bold',
        fontColor:'#000'
    },
    titleStyle1:{
        fontSize:23,
        fontWeight: 'bold',
        color:'#000'
    }
  };
  


export default HistoryData;
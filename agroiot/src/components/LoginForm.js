import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';
import { View,Text, TouchableOpacity,StyleSheet, Image, text, TouchableNativeFeedback , Button} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import { Card , CardSection, Input, Spinner , /* Button */ } from './common';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
import { isEmpty } from '@firebase/util';




class LoginForm extends Component{
  

    renderForget() {
                return(
        <TouchableOpacity>    
        <Text style={ styles.forgetStyle} > Click Here! </Text>
        </TouchableOpacity>
        );
        
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    
    onloginPress() {
        const {email, password} = this.props;
        this.props.loginUser({ email, password });

      }
      
      onCreatePress() {
        const {email, password} = this.props;
        this.props.createUser({ email, password });
      }

    renderButton() {
        if (this.props.loading) {
        return (
        <CardSection>
          <Spinner />         
        </CardSection>
        
      );
        }
    
    return (
    //    <View style={{margin:5}}>
        <Card>

  <View style={styles.cardSecButtonStyle}>     
     <Button
  onPress={this.onloginPress.bind(this)}
  title="Login"
  color="#6495ED"
  accessibilityLabel="login user..."
  disabled={!this.refs.password}
/>
     </View> 

     <View style={styles.cardSecButtonStyle}> 
        <Button 
        onPress={this.onCreatePress.bind(this)}
        title="Create User"
        color="#FF7F50"
        accessibilityLabel="create a new user..."
        style={{margin:5}}
        disabled={!this.refs.password}
        />

     </View>  

   </Card>
    
    // </View>
      );
    }

    render() {
        
        return(        
             <Card /* style={this.styles.cardStyle} */>
                  <View style={{backgroundColor:'white'}}>
                     
                     <CardSection style={styles.cardSecStyle} >                       
                          <Image source={require('../img/logo.png')}                       
                                 style={{width: 154, height: 60}}  /> 
                     </CardSection>

                <TextField 
                    label="Email"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    fontSize={18}         
                    baseColor='#76706E'
                    containerStyle={{ marginLeft:'7.4%' , marginRight:'7.4%' }}
                    ref="email"                      
                />
                
                <TextField 
                    label= "Password least 6 char"
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    fontSize={18}  
                    baseColor='#76706E'
                    containerStyle={{ marginLeft:'7.4%' , marginRight:'7.4%' }}
                    ref="password"
                   
                    
                 />                 
             
              <Text style={styles.errorStyle}> {this.props.error} </Text>
                
                {this.renderButton()}                
               

                <CardSection style={{paddingTop:138, alignSelf:'center', borderBottomWidth: 0 }}>    

                <Text>
                    forget your password? 
                </Text>         

                { this.renderForget() }     

                 </CardSection> 

                 <CardSection style={{paddingTop:100, alignSelf:'center' }} />     
                </View>
             </Card>
        );
    }

}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  
    return{ email, password, error, loading };
  };
  
const styles={
    errorStyle:{
      alignSelf: 'center',
      fontSize: 20,
      color: 'red'
      
    },

    forgetStyle:{
        fontSize:13,
        color:'black' 
    },
    
    cardStyle:{
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0
           },
       
    cardSecStyle:{
        borderBottomWidth: 0,
        marginTop:'31%',
        marginLeft: '27%'
        },
    cardSecButtonStyle:{
        marginTop:12,
        backgroundColor:"#fff",
        }
    }


export default connect (mapStateToProps, { emailChanged,passwordChanged,loginUser, createUser }) (LoginForm);
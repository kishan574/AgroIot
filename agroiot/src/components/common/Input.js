import React, { Component } from 'react';
import { TextInput, View, Text  } from 'react-native';

//import { Button, CardSection, Card } from './common';

const Input = ({  label, value, onChangeText, placeholder, secureTextEntry }) => {
  return(
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}> {label} </Text>
        
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={styles.inputStyle}
          value={value}
          onChangeText={onChangeText}
          blurOnSubmit = {true} 
        />

    </View>
  );
};

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 19.5,
    lineHeight:23,
    flex: 2,
    },

  labelStyle:{
    fontSize: 19,
    paddingLeft: 20,
    flex: 1
  },

  containerStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

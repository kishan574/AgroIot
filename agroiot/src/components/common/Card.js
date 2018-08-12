import React from 'react';
import {
  //Text,
  View
} from 'react-native';


const Card = (props) => {
  return (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowRadius: 0,
    elevation: 2,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 3
    }
};

export { Card };

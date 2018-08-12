import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Button, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux';
import { currentFetch } from '../actions';
import CurrentData from './CurrentData';


class CurrentList extends Component {

  uploadLoc() {
    console.log('press');
}

  componentWillMount(){
  //  console.log(this.props);
   
   this.props.currentFetch();
   this.createDataSource(this.props);
   
  }

componentWillReceiveProps(nextProps) {
  //console.log(nextProps);
  this.createDataSource(nextProps);
}

createDataSource({ crnt }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

this.dataSource = ds.cloneWithRows(crnt);

}

renderRow(sensorData) {
return (
<View>
  <CurrentData sensorData={sensorData} />

<View style={{ backgroundColor:'white' }}>   
                    
{/* <TextField  
   label="location"
   //onChangeText={this.onEmailChange.bind(this)}
   value={}
   fontSize={18}         
   baseColor='#76706E'
   //containerStyle={{ marginLeft:'7.4%' , marginRight:'7.4%' }}
   ref="loc"      
/> */}

{/* <Button 
     onPress={this.uploadLoc.bind(this) }
     title="Submit"
     color="#FF7F50"
     accessibilityLabel="upload location name..."
     // style={{margin:'3%' }}
/> */}
</View>
</View>
);
}

  render(){
    
      return(
        <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />

      </View>
       
      );

     
    }
 


}
const mapStateToProps = state => {
const crnt = _.map(state.crnt ,(val) => {
  return {...val};
});
  return { crnt } ;
};


export default connect(mapStateToProps, {currentFetch})(CurrentList);
 
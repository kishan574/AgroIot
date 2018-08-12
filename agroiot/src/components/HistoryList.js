import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { historyFetch } from '../actions';
import HistoryData from './HistoryData';
import CollapseView from 'react-native-collapse-view';
import { Button } from './common';

class HistoryList extends Component {
    componentWillMount(){
     //   console.log(this.props);
        this.props.historyFetch();
        this.createDataSource(this.props);
      }


  componentWillReceiveProps(nextProps) {
  this.createDataSource(nextProps);
}

createDataSource({ hrst }) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
  
    this.dataSource = ds.cloneWithRows(hrst);
  }

  renderRow(sensorData) {
  return ( 
  <View>
  <HistoryData sensorData={ sensorData } /> 
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
    const hrst = _.map(state.hrst ,(val) => {
      return {...val};
    });
      return { hrst } ;
    };
    

export default connect(mapStateToProps, {historyFetch})(HistoryList);
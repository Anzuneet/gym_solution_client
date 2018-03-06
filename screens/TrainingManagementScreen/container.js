import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import TrainingManagementScreen from "./presenter";


class Container extends Component {

  /*state={
    trainingGroups:[
      {
        capacity:1,
        comment: "안녕",
        time:"10:30",
        charge:50000,
        daysofWeek:["MON","TUE"],
      }
      ,
      {
        capacity:2,
        comment: "안녕2",
        time:"10:34",
        charge:5000,
        daysofWeek:["MON","WED"],
      }
    ]
  }*/
 
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      trainingGroups: ds.cloneWithRows([
      {
        capacity:1,
        comment: "안녕",
        time:"10:30",
        charge:50000,
        daysofWeek:["MON","TUE"],
      },
      {
        capacity:2,
        comment: "안녕2",
        time:"10:34",
        charge:5000,
        daysofWeek:["MON","WED"],
      }]),
    };
  }

  render() {
    //const {navigate} = this.props.navigation;
    return (
      <TrainingManagementScreen 
      {...this.state} 
      />
    );
  }
}

export default Container;
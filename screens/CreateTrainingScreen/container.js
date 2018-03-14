import React, { Component } from "react";
import { ScrollView ,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert, StyleSheet } from "react-native";
import CreateTrainingScreen from './presenter';

class Container extends Component {
 
  
  state={
    uid : 1,//자동오름차순설정 어케함?
    capacity : 4,
    opener : "",// 아마 token으로 판단할듯
    gym : "",//일단 string
    start_date : null, //"#Y-#M-#D"형태
    end_date : null,
    charge : 10000, //비용
    time : "", //"%H-%M-%S"
    period : 30,
    groupsTitle : "",
    groupsComment : "",

  }

  _changeGroupsTitle = (title) => {
    this.setState({groupsTitle: title});
  };

  _changeGroupsComment = (comment) => {
    this.setState({groupsComment: comment});
  };

  _changeStartDate = (date) =>{
    date = date.toString();
    this.setState({start_date: date});
  };


  render() {
    
    return (
      <CreateTrainingScreen
        {...this.state}
        changeStartDate = {this._changeStartDate}
        changeGruopsTitle = {this._changeGroupsTitle}
        changeGruopsComment = {this._changeGroupsComment}
      />
    );
  }
}


export default Container;

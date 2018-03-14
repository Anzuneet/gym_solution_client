import React, { Component } from "react";
import { ScrollView ,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert, StyleSheet } from "react-native";
import CreateTrainingScreen from './presenter';

class Container extends Component {
 
  
  state={
    isSubmitting : false,
    uid : 1,//자동오름차순설정 어케함?
    capacity : 4,
    opener : "",// 아마 token으로 판단할듯
    gym : 1,// number
    start_date : null, //"#Y-#M-#D"형태
    end_date : null,
    charge : 10000, //비용
    time : "", //"%H-%M-%S"
    period : 30,
    groupsTitle : "",
    groupsComment : "",
    daysOfWeek : ["MON","TUE"],

  }

  _changeGroupsTitle = (title) => {
    this.setState({groupsTitle: title});
  };

  _changeGroupsComment = (comment) => {
    this.setState({groupsComment: comment});
  };

  _changeStartDate = (date) =>{
    var startdate = new Date(date)
    oStartDate = (`${startdate.getFullYear()}-${startdate.getMonth()+1}-${startdate.getDate()}`);
    this.setState({start_date: oStartDate});
  };

  _changeEndDate = (date) =>{
    var endDate = new Date(date)
    oEndDate = (`${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`);
    this.setState({end_date: oEndDate});
  };

  _changeDaysOfWeek = (data) => {
    this.setState({daysOfWeek : data});
  };

  _changeCharge = (cost) => {
    this.setState({charge : cost});
  };

  _submit = async () =>{
    const { username, password, isSubmitting } = this.state;
    const { login, getOwnProfile } = this.props;
    console.log(this.props);
    if(!isSubmitting){
      if(username  && password){
        this.setState({
          isSubmitting : true
        })
        const loginResult = await login(username, password);
        await getOwnProfile();
        if(!loginResult){
          this.setState({isSubmitting : false});
        }
        console.log(loginResult)
        //submit
        
      }else{
        Alert.alert('All fields are required!');
      }
    }
  }

  render() {
    
    return (
      <CreateTrainingScreen
        {...this.state}
        changeStartDate = {this._changeStartDate}
        changeEndDate = {this._changeEndDate}
        changeGruopsTitle = {this._changeGroupsTitle}
        changeGruopsComment = {this._changeGroupsComment}
        changeDaysOfweek = {this._changeDaysOfWeek}
        changeCharge = {this._changeCharge}
        submit = {this._submit}
      />
    );
  }
}


export default Container;

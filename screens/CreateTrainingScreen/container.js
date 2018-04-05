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
    start_date : "2018-4-4", //"#Y-#M-#D"형태
    end_date : "2018-04-25",
    start_time : "18:00", //"%H-%M
    charge : 10000, //비용
    period : 30,
    groupsTitle : "박종휘의 바벨생각",
    groupsComment : "무조건 20킬로",
    daysOfWeek : ["MON","TUE"],
    monday : false,
    tuesday : false,
    wednesday : false,
    thursday : false,
    friday : false,
    saturday : false,
    sunday : false,
    startTimePickerVisible :false,
    endTimePickerVisible :false,
    startClockPickerVisible: false,
  }
  _showStartTimePicker = () => this.setState({ startTimePickerVisible: true });

  _hideStartTimePicker = () => this.setState({ startTimePickerVisible: false });

  _showEndTimePicker = () => {
    if(this.state.start_date)
    this.setState({ endTimePickerVisible: true })
    else
    Alert.alert("input start day about your taining");
  };

  _hideEndTimePicker = () => this.setState({ endTimePickerVisible: false });

  _showStartClockPicker = () => this.setState({ startClockPickerVisible: true });

  _hideStartClockPicker = () => this.setState({ startClockPickerVisible: false });


  _handleStartDatePicked = (date) => {
    var startdate = new Date(date)
    oStartDate = (`${startdate.getFullYear()}-${startdate.getMonth()+1}-${startdate.getDate()}`);
    this.setState({start_date: oStartDate, startTimePickerVisible: false});
  };

  _handleEndDatePicked = (date) => {

    var enddate = new Date(date)
    var {start_date} = this.state;
    var s = this.state.start_date.split("-").map(it=>parseInt(it));
    var startdate = new Date();
    startdate.setFullYear(s[0]);
    startdate.setDate(s[2]);
    startdate.setMonth(s[1]-1);
    startdate.setHours(0,0,0,0);
    enddate.setHours(0,0,0,0);
    var period = (enddate - startdate)/86400000;

    oEndDate = (`${enddate.getFullYear()}-${enddate.getMonth()+1}-${enddate.getDate()}`);
    this.setState({end_date: oEndDate, endTimePickerVisible: false, period});
  };

  _handleStartClockPicked = (date) => {
    var startTime = new Date(date)
    oStartTime = (`${startTime.getHours()}:${startTime.getMinutes()}`);
    this.setState({start_time: oStartTime, startClockPickerVisible: false});
  };

  _changeMonday = () =>{
    this.state.monday ? this.setState({monday : false}) : this.setState({monday : true});
  };
  _changeTuesday = () =>{
    this.state.tuesday ? this.setState({monday : false}) : this.setState({tuesday : true});
  };
  _changeWednesday = () =>{
    this.state.wednesday ? this.setState({wednesday : false}) : this.setState({wednesday : true});
  };
  _changeThursday = () =>{
    this.state.thursday ? this.setState({thursday : false}) : this.setState({thursday : true});
  };
  _changeFriday = () =>{
    this.state.friday ? this.setState({friday : false}) : this.setState({friday : true});
  };
  _changeSaturday = () =>{
    this.state.saturday ? this.setState({saturday : false}) : this.setState({saturday : true});
  };
  _changeSunday = () =>{
    this.state.sunday ? this.setState({sunday : false}) : this.setState({sunday : true});
  };

  _changeGroupsTitle = (title) => {
    this.setState({groupsTitle: title});
  };

  _changeGroupsComment = (comment) => {
    this.setState({groupsComment: comment});
  };

  _changeCharge = (cost) => {
    this.setState({charge : cost});
  };

  _changeDuration = (duration) => {
    this.setState({duration : duration});
  };

  _changeCapacity = (capacity) => {
    this.setState({capacity : capacity});
  };
//t
  _submit = async () =>{
    console.log("in submit");
    var trainingInfo = new Object();
    var daysOfWeek =new Array();
    const {navigate} = this.props.navigation;
    const {  
      isSubmitting,
      capacity,
      start_date,
      start_time,
      charge,
      period,
      groupsTitle,
      groupsComment,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    } = this.state;

    daysOfWeek[0] = monday;
    daysOfWeek[1] = tuesday;
    daysOfWeek[2] = wednesday;
    daysOfWeek[3] = thursday;
    daysOfWeek[4] = friday;
    daysOfWeek[5] = saturday;
    daysOfWeek[6] = sunday;
    const {enrollGroup} = this.props;
    if(!isSubmitting){
      if(capacity &&
        start_date &&
        start_time &&
        charge &&
        period &&
        groupsTitle &&
        groupsComment &&
        daysOfWeek
      ){
      this.setState({
        isSubmitting : true
      })
      trainingInfo.title = groupsTitle;
      trainingInfo.comment = groupsComment;
      trainingInfo.capacity = capacity;
      trainingInfo.start_date = start_date;
      trainingInfo.charge = charge;
      trainingInfo.time = start_time;
      trainingInfo.period = period;
      trainingInfo.days = daysOfWeek;

      result = await enrollGroup(trainingInfo);
        if(!result){
          this.setState({isSubmitting : false});
        }else{
          navigate("management")
        }
        
      }else{
        Alert.alert('All fields are required!');
      }
    }
  }

  render() {
    
    return (
      <CreateTrainingScreen
        {...this.state}
        changeStartDate = {this._handleStartDatePicked}
        changeEndDate = {this._handleEndDatePicked}
        changeStartTime = {this._handleStartClockPicked}
        changeGroupsTitle = {this._changeGroupsTitle}
        changeGroupsComment = {this._changeGroupsComment}
        changeDaysOfweek = {this._changeDaysOfWeek}
        changeCharge = {this._changeCharge}
        changeMonday = {this._changeMonday}
        changeTuesday = {this._changeTuesday}
        changeWednesday = {this._changeWednesday}
        changeThursday = {this._changeThursday}
        changeFriday = {this._changeFriday}
        changeSaturday = {this._changeSaturday}
        changeSunday = {this._changeSunday}
        changeDuration = {this._changeDuration }
        changeCapacity = {this._changeCapacity}
        submit = {this._submit}
        showStartTimePicker = {this._showStartTimePicker}
        hideStartTimePicker= {this._hideStartTimePicker}
        showEndTimePicker = {this._showEndTimePicker}
        hideEndTimePicker = {this._hideEndTimePicker}
        showStartClockPicker = {this._showStartClockPicker}
        hideStartClockPicker = {this._hideStartClockPicker}
      />
    );
  }
}


export default Container;

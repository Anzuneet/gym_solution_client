
import React, { Component } from "react";
import PropTypes from "prop-types";
import RecordMemberScreen from "./presenter";
import NavButton from "../../components/NavButton";

 
class Container extends Component {
 static propTypes = {
  
};
 state = {
  chartIndex : 1,
  startTimePickerVisible :false,
 };

 _clickWeight = () =>{
  this.setState({chartIndex: 1});
};
_clickMuscle = () =>{
  this.setState({chartIndex: 2});
};
_clickFat = () =>{
  this.setState({chartIndex: 3});
};

_showStartTimePicker = () => this.setState({ startTimePickerVisible: true });
_hideStartTimePicker = () => this.setState({ startTimePickerVisible: false });
_handleStartClockPicked = (date) => {
  var startTime = new Date(date)
  oStartTime = (`${startTime.getHours()}:${startTime.getMinutes()}`);
  this.setState({start_time: oStartTime, startClockPickerVisible: false});
};
  render() {
    const {navigate} = this.props.navigation;
   return (
     <RecordMemberScreen {...this.props} {...this.state}
     navigate = {navigate}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     changeStartTime = {this._handleStartClockPicked}
      showStartTimePicker = {this._showStartTimePicker}
      hideStartTimePicker= {this._hideStartTimePicker}
     />
   );
 }
}
 
export default Container;
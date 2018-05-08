
import React, { Component } from "react";
import PropTypes from "prop-types";
import OneGroupForTrainer from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigation.navigate('showMembers')
  };

  render() {
    var startDate = new Date(this.props.data.start_date)
    var endDate = new Date();
    endDate.setDate(startDate.getDate() + this.props.data.period);
    var oStartDate = (`${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`);
    var oEndDate = (`${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`);
    var cDate = new Date();
    
    var cV = (cDate -startDate ) /1000;
    var percent  = (cV /(this.props.data.period * 86400))*100;
  
    return (
      <OneGroupForTrainer
      {...this.props}
      startDate = {oStartDate}
      endDate = {oEndDate}
      onPress = {this._onPress}
      percent = {percent.toFixed(2)}
      />
      
    );
  }
} 
export default Container;
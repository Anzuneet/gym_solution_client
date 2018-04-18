
import React, { Component } from "react";
import PropTypes from "prop-types";
import OneGroupForProfile from "./presenter";
 
class Container extends Component {


  render() {
    var startDate = new Date(this.props.data.start_date)
    var endDate = new Date();
    endDate.setDate(startDate.getDate() + this.props.data.period);
    var oStartDate = (`${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`);
    var oEndDate = (`${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`);
    return (
      <OneGroupForProfile
      capacity = {this.props.data.capacity}
      startDate = {oStartDate}
      endDate = {oEndDate}
      charge = {this.props.data.charge}
      days = {this.props.data.days}
      opener = {this.props.data.opener}
      data = {this.props.data}
      onPress = {this._onPress}
      />
      
    );
  }
} 
export default Container;
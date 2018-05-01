
import React, { Component } from "react";
import PropTypes from "prop-types";
import OneGroupForTrainee from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigate('showOneGroup',{group : this.props.data});
  };

  render() {
    var startDate = new Date(this.props.data.start_date)
    var endDate = new Date();
    endDate.setDate(startDate.getDate() + this.props.data.period);
    var oStartDate = (`${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`);
    var oEndDate = (`${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`);
    return (
      <OneGroupForTrainee {...this.props}
      onPress = {this._onPress}
      />
      
    );
  }
} 
export default Container;
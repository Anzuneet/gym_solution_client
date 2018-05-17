
import React, { Component } from "react";
import PropTypes from "prop-types";
import OneGroupForProfile from "./presenter";
 
class Container extends Component {

  state = {
    loadingMessage : "불러오는중..."
  }
  _onPress = () => {
    this.props.navigate('groupInfo',{group : this.props.data});
  };

  render() {
    var startDate,endDate,oStartDate,oEndDate,cDate,cV,percent
    if(this.props.data){
      startDate = new Date(this.props.data.start_date)
      endDate = new Date();
      endDate.setDate(startDate.getDate() + this.props.data.period);
      oStartDate = (`${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`);
      oEndDate = (`${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`);
  
      cDate = new Date();
      
      cV = (cDate -startDate ) /1000;
      percent  = (cV /(this.props.data.period * 86400))*100;
    }

  
    return (
      <OneGroupForProfile
      {...this.props}
      {...this.state}
      capacity = {this.props.data.capacity}
      startDate = {oStartDate}
      endDate = {oEndDate}
      percent = {percent.toFixed(2)}
      onPress = {this._onPress}
      />
      
    );
  }
} 
export default Container;
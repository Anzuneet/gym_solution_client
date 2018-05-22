
import React, { Component } from "react";
import PropTypes from "prop-types";
import OneGroupForTrainer from "./presenter";
 
class Container extends Component {

  state = {
    loadingMessage : "Loaidng...",
  }
  _onPress = () => {
    this.props.navigation.navigate('showMembers', {group : this.props.data})
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
      daysOfWeek = this.props.data.daysOfWeek;
      title = this.props.data.title;
      comment = this.props.data.comment;
      capacity = this.props.data.capacity;
      charge = this.props.data.charge;


    }

  
    return (
      <OneGroupForTrainer
      {...this.props}
      {...this.state}
      startDate = {oStartDate}
      endDate = {oEndDate}s
      onPress = {this._onPress}s
      percent = {percent.toFixed(2)}
      daysOfWeek = {daysOfWeek}
      title = {title}
      comment = {comment}
      capacity = {capacity}
      charge = {charge}
      />
      
    );
  }
} 
export default Container;

import React, { Component } from "react";
import PropTypes from "prop-types";
import TrainerListItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigate("showTrainerInfo",{id : this.props.data.trainer_id});
  };

  render() {
    /*
    var startDate = new Date(this.props.data.start_date)
    var endDate = new Date();
    endDate.setDate(startDate.getDate() + this.props.data.period);
    var oStartDate = (`${startDate.getFullYear()}년 ${startDate.getMonth()+1}월 ${startDate.getDate()}일`);
    var oEndDate = (`${endDate.getFullYear()}년 ${endDate.getMonth()+1}월 ${endDate.getDate()}일`);*/
    return (
      <TrainerListItem
      Trainer_Id = {this.props.data.trainer_id}
      onPress = {this._onPress}
      />
    );
  }
} 
export default Container;

import React, { Component } from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";
import DaysCheckBox from "./presenter";

class Container extends Component {
    render() {
      return (
        <DaysCheckBox 
        monday = {this.props.monday}
        tuesday = {this.props.tuesday}
        wednesday = {this.props.wednesday}
        thursday = {this.props.thursday}
        friday = {this.props.friday}
        saturday = {this.props.saturday}
        sunday = {this.props.sunday}
        changeMonday = {this.props.changeMonday}
        changeTuesday = {this.props.changeTuesday}
        changeWednesday = {this.props.changeWednesday}
        changeThursday = {this.props.changeThursday}
        changeFriday = {this.props.changeFriday}
        changeSaturday = {this.props.changeSaturday}
        changeSunday = {this.props.changeSunday}
        />      
      );
      

    }
} 


export default Container;
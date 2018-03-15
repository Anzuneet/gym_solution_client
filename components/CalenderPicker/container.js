
import React, { Component } from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
class Container extends Component {
   
    render() {
      console.log(this.props);
      const  selectDate  = this.props.Date;
      return (
        <View>
          <CalendarPicker
            onDateChange={this.props.changeDate}
            selectedDayColor = {this.props.selectedDayColor}
          />
   
          <View>
            <Text>SELECTED DATE:{ this.props.Date }</Text>
          </View>
        </View>
      );
    }
} 


export default Container;

import React, { Component } from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';
class Container extends Component {
   
    render() {
      const { selectedStartDate } = this.props.Date;
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      return (
        <View>
          <CalendarPicker
            onDateChange={this.props.changeDate}
          />
   
          <View>
            <Text>SELECTED DATE:{ startDate }</Text>
          </View>
        </View>
      );
    }
} 
export default Container;
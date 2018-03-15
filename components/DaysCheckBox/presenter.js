import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");



 const DaysCheckBox = props => (
  <View style = {styles.Container}>
      <TouchableOpacity onPress={props.changeMonday}>
        <Text style = {props.monday ? styles.checkedText : styles.uncheckText}>
        MON
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeTuesday}>
        <Text style = {props.tuesday ? styles.checkedText : styles.uncheckText}>
        Tue
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeWednesday}>
        <Text style = {props.wednesday ? styles.checkedText : styles.uncheckText}>
        WED
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeThursday}>
        <Text style = {props.thursday ? styles.checkedText : styles.uncheckText}>
        THU
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeFriday}>
        <Text style = {props.friday ? styles.checkedText : styles.uncheckText}>
        FRI
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeSaturday}>
        <Text style = {props.saturday ? styles.checkedText : styles.uncheckText}>
        SAT
        </Text>
        </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeSunday}>
        <Text style = {props.sunday ? styles.checkedText : styles.uncheckText}>
        SUN
        </Text>
        </TouchableOpacity>

  </View>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    height: 100,
    flexDirection : 'row',
    
  },
  checkedText : {
    flex : 1,
    fontSize : 20,
    fontWeight : "500",
    color : "#ffbb00",
    paddingHorizontal : 10,
    paddingTop : 10,
  },
  uncheckText : {
    flex : 1,
    fontSize : 20,
    fontWeight : "100",
    color : "#bbbbbb",
    paddingHorizontal : 10,
    paddingTop : 10,
  },

  

});

export default DaysCheckBox;
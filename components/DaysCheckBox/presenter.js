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
        월
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeTuesday}>
        <Text style = {props.tuesday ? styles.checkedText : styles.uncheckText}>
        화
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeWednesday}>
        <Text style = {props.wednesday ? styles.checkedText : styles.uncheckText}>
        수
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeThursday}>
        <Text style = {props.thursday ? styles.checkedText : styles.uncheckText}>
        목
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeFriday}>
        <Text style = {props.friday ? styles.checkedText : styles.uncheckText}>
        금
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeSaturday}>
        <Text style = {props.saturday ? styles.checkedText : styles.uncheckText}>
        토
        </Text>
        </TouchableOpacity>

      <TouchableOpacity onPressOut={props.changeSunday}>
        <Text style = {props.sunday ? styles.checkedText : styles.uncheckText}>
        일
        </Text>
        </TouchableOpacity>

  </View>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    //height: 100,
    flexDirection : 'row',
    marginHorizontal: 10,
    justifyContent : 'space-between',
  },
  checkedText : {
    flex : 1,
    fontSize : 22,
    //fontWeight : "500",
    color : "#ffbb00",
    paddingHorizontal : 15,
    marginBottom : 5,
    marginTop : 3,
    fontFamily: 'font-DoHyeon',
  },
  uncheckText : {
    flex : 1,
    fontSize : 22,
    //fontWeight : "100",
    color : "#bbbbbb",
    paddingHorizontal : 15,
    marginBottom : 5,
    marginTop : 3,
    fontFamily: 'font-DoHyeon',
  },

  

});

export default DaysCheckBox;
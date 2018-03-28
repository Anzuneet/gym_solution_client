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



 const TrainerListItem = props => (
  <TouchableOpacity style = {styles.Container} onPress  = {props.onPress}>
    <Text>
      {props.Trainer_Id}
    </Text>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    paddingVertical : 48,
    alignItems : 'center',
    justifyContent : 'center',
  },
  profileContainer :{
    flex:0.4,
    backgroundColor : "#eeeeee",

    paddingVertical : 5,
  },
  titleContainer : {
    flex:1,
    borderWidth : 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor : "#eeeeee"
  },
  detailContainer : {
    flex:0.8,
    paddingTop : 8,
    alignItems : 'flex-end',
    backgroundColor : "#eeeeee"
  },
  trainernameContainer :{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical : 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  trainernameText : {
    fontSize : 10,
    fontWeight:'500',
  },
  titleText :{
    paddingTop :20,
    paddingBottom : 10,
    paddingLeft : 8,

    fontSize :20,
    fontWeight : "500",
  },
  commentText : {
    paddingLeft : 13,
  },
  dateText : {
    fontSize : 9,
    fontWeight : "500",
    paddingRight: 10,
    paddingBottom : 10,
  },
  capacityText : {
    fontSize : 20,
    paddingRight: 20,
    paddingVertical : 10,
  },
  costText : {
    fontSize : 15,
    paddingTop : 7,
    paddingRight : 10,
  },

});

export default TrainerListItem;
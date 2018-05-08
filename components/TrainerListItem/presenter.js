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
  <TouchableOpacity onPress = {props.onPress}>
    <View style = {styles.Container}>
      <View style = {styles.profileContainer}>
        {props.profileImage ?
        <Text>ProfileImage</Text>
        :
        <Image
            source={
              require("../../assets/images/noPhoto.jpg")
            }
            style={styles.avatar}
        />
        }
      </View>
      <View style = {styles.titleContainer}>
      
        <Text style = {styles.titleText}>
            {props.trainerInfo.name}
        </Text>
        <Text style = {styles.commentText}>
            "안녕하세요"
        </Text>
      </View>
      <View style = {styles.detailContainer}>
        <View style = {styles.textContainer}>
          <Text style ={styles.capacityText}>
          자세히 보기
          </Text>
          </View>
      </View>
    </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    height: 100,
    backgroundColor : "white",
    flexDirection : 'row'
  },
  profileContainer :{
    flex:0.6,
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 5,
  },
  titleContainer : {
    flex:0.8,
    borderRadius : 20,
    backgroundColor : "#rgba(255,167,0,0.5)",
    marginVertical : 7,
    justifyContent : 'center',
    alignItems : 'center',
  },
  detailContainer : {
    flex:1.2,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : "white"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  titleText :{
    //paddingTop :10,
   // paddingBottom : 3,
   // paddingLeft : 8,
    fontFamily: 'font-DoHyeon',
    fontSize :30,
    //fontWeight : "500",
  },
  commentText : {
    fontSize : 15,
    //paddingLeft : 15,
    fontFamily: 'font-DoHyeon',
  },
  textContainer : {
    backgroundColor : "#fd8b1b",
    width : width/2.5,
    height:height/11,
    borderRadius :10,
    justifyContent : 'center',
    alignItems : 'center',
  },
  capacityText : {
    fontSize : 30,
    //fontWeight : "500",
    //paddingLeft : 8,
    color : "white",
    fontFamily: 'font-DoHyeon',
  },
  costText : {
    fontSize : 15,
    paddingTop : 7,
    paddingRight : 10,
  },

});

export default TrainerListItem;
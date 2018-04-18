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



 const OneGroupForProfile = props => (
  <TouchableOpacity onPress = {props.onPress}>
    <View style = {styles.Container}>
      <View style = {styles.profileContainer}>
        <Image
            source={
              require("../../assets/images/noPhoto.jpg")
            }
            style={styles.avatar}
            //defaultSource={require("../../assets/images/noPhoto.jpg")}
        />
        <View style ={styles.trainernameContainer}>
          <Text style = {styles.trainernameText}>
              {props.opener}
          </Text>
        </View>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>
            {props.days}
        </Text>
        <Text style = {styles.commentText}>
            "코멘트입니다. 20자이내로 적으세요...."
        </Text>
      </View>
      <View style = {styles.detailContainer}>
          <Text style ={styles.dateText}>
          {props.startDate} ~ {props.endDate}
          </Text>
          <Text style ={styles.capacityText}>
          현재 : {props.capacity} / {props.capacity}
          </Text>
          <Text style ={styles.costText}>
          비용 : {props.charge}
          </Text>
      </View>
    </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    height: 100,
    flexDirection : 'row'
  },
  profileContainer :{
    flex:0.4,
    backgroundColor : "#eeeeee",
    alignItems : 'center',
    justifyContent : 'center',
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

export default OneGroupForProfile;
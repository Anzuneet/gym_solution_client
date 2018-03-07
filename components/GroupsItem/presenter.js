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



 const GroupsItem = props => (
  <TouchableOpacity>
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
              박종휘
          </Text>
        </View>
      </View>
      <View style = {styles.titleContainer}>
      </View>
      <View style = {styles.detailContainer}>
      </View>
    </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection : 'row'
  },
  profileContainer :{
    flex:0.4,
    backgroundColor : "#eeeeee",
    alignItems : 'center',
    paddingVertical : 5,
  },
  titleContainer : {
    flex:1,
    backgroundColor : "red"
  },
  detailContainer : {
    flex:1,
    backgroundColor : "yellow"
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
  }

});

export default GroupsItem;
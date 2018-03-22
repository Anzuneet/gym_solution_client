import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";


const { width, height } = Dimensions.get("window");

 const ProfileScreen = props => (
  <View style = {styles.container}>
    <View style = {styles.upperContainer}>
      <View style = {styles.imageContainer}>
      {props.flag ?  
            (<Image source={{uri:props.image.uri} } style = {{width: width*0.75, height: height*0.75}}/>)
            :
            (<Image
              source={require("../../assets/images/logo-gym.png")}
              resizeMode="stretch"/>) }  
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPressOut = {props.pickImage} style = {styles.pickImageTab}>
          <Text style = {styles.pickImageText}>
            GALLARY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPressOut = {props.takeImage} style = {styles.takeImageTab}>
          <Text style = {styles.takeImageText}>
            CAMERA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity style = {styles.lowerContainer}>
      <Text style = {styles.submitText}> SUBMIT </Text>
    </TouchableOpacity>
    

  </View>

);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
    
  },
  upperContainer : {
    flex:3,
    flexDirection  : 'row',
    backgroundColor : "yellow",
  },
  lowerContainer :{
    flex :1,
    backgroundColor:"pink",
    justifyContent : 'center',
    alignItems : 'center',
  },

  imageContainer : {
    flex : 3,
    backgroundColor : "blue",
  },
  buttonContainer : {
    flex : 1,
    
  },
  pickImageTab : {
    flex : 1,
    backgroundColor : "pink",
    justifyContent : 'center',
    alignItems : 'center',

  },
  takeImageTab :{
    flex : 1,
    backgroundColor : "#ffbb00",
    justifyContent : 'center',
    alignItems : 'center',
  },
  pickImageText :{
    fontSize : 20,
  },

  takeImageText :{
    fontSize : 20
  },
  submitText : {
    fontSize : 30,
    color : "white",
  }
});

export default ProfileScreen;
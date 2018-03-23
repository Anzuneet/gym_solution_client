import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import {Feather,MaterialIcons} from "@expo/vector-icons"


const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

 const ProfileScreen = props => (
  <View style = {styles.container}>
     <PopupDialog
        dialogTitle={<DialogTitle title="이미지를 넣을 방식을 골라주세요!" />}
        ref={(popupDialog) => { props.parent.dialog = popupDialog; }}
        dialogAnimation={slideAnimation}
        dismissOnTouchOutside = {true}
        height = {150}
      >
      <View style = {styles.imagePickContainer}>
        <TouchableOpacity style ={styles.cameraTab} onPressOut = {props.takeImage}>
          <Feather name="camera" size={50} color="white" style = {styles.iconContainer}/>
          <Text style = {styles.cameraTabText}> CAMERA </Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.gallaryTab} onPressOut = {props.pickImage}> 
          <MaterialIcons name="photo-album" size={50} color="white" style = {styles.iconContainer}/> 
          <Text style = {styles.gallaryTabText}> GALLARY </Text>
        </TouchableOpacity>
      </View>
    </PopupDialog>
    <View style = {styles.upperContainer}>
      <TouchableOpacity style = {styles.imageContainer} onPressOut ={ () => {
        props.parent.dialog.show()
      }} >
      {props.flag ?  
            (<Image source={{uri:props.image.uri} } style = {{width: width, height: height*0.63}}/>)
            :( 
            <Image
              source={require("../../assets/images/photoPlaceholder.png")}
              style = {{width: width, height: height *0.63}}
            />
            )}  
      </TouchableOpacity>
      

      <View style = {styles.tableContainer}>
            <View style = {styles.upperRow}>
              <View style = {styles.column}>
              </View>
              <View style = {styles.column}>
                <Text style = {styles.tableAttribute}> Weight </Text>
              </View>
              <View style = {styles.column}>
                <Text style = {styles.tableAttribute}> Muscle </Text>
              </View>
              <View style = {styles.column}>
                <Text style = {styles.tableAttribute}> Fat </Text>
              </View>
            </View>
            <View style = {styles.lowerRow}>
              <View style = {styles.column}>
                <Text style = {styles.tableAttribute}> data </Text>
              </View>
              <View style = {styles.column}>
              <TextInput 
                style = {styles.textInput} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Weight" 
                autoCorrecto = {false}
                value = {props.weight}
                keyboardType='numeric'
                onChangeText={props.changeWeight}
              />
              </View>
              <View style = {styles.column}>
              <TextInput 
                style = {styles.textInput} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Muscle" 
                autoCorrecto = {false}
                value = {props.muscle}
                keyboardType='numeric'
                onChangeText={props.changeWeight}
              />
              </View>
              <View style = {styles.column}>
              <TextInput 
                style = {styles.textInput} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Fat" 
                autoCorrecto = {false}
                value = {props.fat}
                keyboardType='numeric'
                onChangeText={props.changeWeight}
              />
              </View>
            </View> 
      </View>
    </View>
    <TouchableOpacity onPressOut = {props.submit} style = {styles.lowerContainer}>
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
    flex:4,
    backgroundColor : "pink",
  },
  lowerContainer :{
    flex :0.5,
    backgroundColor:"pink",
    justifyContent : 'center',
    alignItems : 'center',
  },

  imageContainer : {
    flex : 4,
  },
  buttonContainer : {
    flex : 1,
  
  },
  submitText : {
    fontSize : 30,
    color : "white",
  },
  tableContainer  : {
    flex :1,
  },
  upperRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : "#rgba(255,10,10,0.5)"
  },
  lowerRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : '#rgba(0,0,0,0.2)',
  },
  column  : {
    flex : 1,
    backgroundColor : 'transparent',
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : "white",
    borderWidth : StyleSheet.hairlineWidth,
  },
  textInput : {
    width : width/4 -10,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    alignItems : 'center'
  },
  tableAttribute : {
    fontSize : 20,
    fontWeight : "500",
  },
  imagePickContainer  : {
    width : width,
    height : height,
    backgroundColor : "white",
    flexDirection :'row',
  },

  cameraTab : {
    paddingTop : 10,
    flex : 1,
    backgroundColor : 'rgba(255,187,0,0.5)',
    alignItems : 'center'
  },
  cameraTabText : {
    paddingTop : 10,
    fontSize : 20,
    fontWeight : "500",
  },
  gallaryTab : {
    paddingTop : 10,
    flex : 1,
    backgroundColor : 'rgba(255,230,0,0.5)',
    alignItems : 'center'
  },
  gallaryTabText : {
    paddingTop : 10,
    fontSize : 20,
    fontWeight : "500",
  },

});

export default ProfileScreen;
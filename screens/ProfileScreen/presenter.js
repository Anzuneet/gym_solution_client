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
  ActivityIndicator,
} from "react-native";
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import {Feather,MaterialIcons} from "@expo/vector-icons"
import DaysCheckBox from "../../components/DaysCheckBox";

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
          <Text style = {styles.cameraTabText}> 카메라 </Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.gallaryTab} onPressOut = {props.pickImage}> 
          <MaterialIcons name="photo-album" size={50} color="white" style = {styles.iconContainer}/> 
          <Text style = {styles.gallaryTabText}> 갤러리 </Text>
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
              <Text style = {styles.tableAttribute}> 몸무게 </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 근력 </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 지방 </Text>
            </View>
          </View>
          <View style = {styles.lowerRow}>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 입력 </Text>
            </View>
            <View style = {styles.column}>
            <TextInput 
              style = {styles.textInput} 
              underlineColorAndroid = 'rgba(0,0,0,0)' 
              placeholder="몸무게" 
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
              placeholder="근력" 
              autoCorrecto = {false}
              value = {props.muscle}
              keyboardType='numeric'
              onChangeText={props.changeMuscle}
            />
            </View>
            <View style = {styles.column}>
            <TextInput 
              style = {styles.textInput} 
              underlineColorAndroid = 'rgba(0,0,0,0)' 
              placeholder="지방" 
              autoCorrecto = {false}
              value = {props.fat}
              keyboardType='numeric'
              onChangeText={props.changeFat}
            />
            </View>
          </View> 
      </View>
    </View>
    <TouchableOpacity onPressOut = {props.submit} style = {styles.lowerContainer}>
        <View style={styles.button}>
            {props.isSubmitting ? 
            (<ActivityIndicator size = "large" color="white"/>)
            :
            (<Text style = {styles.submitText}> 전송! </Text>)
            }
        </View>
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
    backgroundColor : "#ffbb00",
  },
  lowerContainer :{
    flex :0.5,
    backgroundColor:"#ffbb00",
    justifyContent : 'center',
    alignItems : 'center',
    borderTopWidth : StyleSheet.hairlineWidth*2,
    borderColor : "white",
  },

  imageContainer : {
    flex : 4,
  },
  buttonContainer : {
    flex : 1,
  
  },
  submitText : {
    fontSize : 40,
    color : 'rgba(255,255,255,1)',
    fontFamily: 'font-DoHyeon',

  },
  tableContainer  : {
    flex :1,
  },
  upperRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : '#FFBB55',
  },
  lowerRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : '#FFCC55',
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
    width : width/4.6,
    marginBottom : 5,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    //paddingHorizontal: 30,
    backgroundColor: "#fafafa",
    justifyContent : 'center',
    alignItems : 'center',
    textAlign: "center",
    fontFamily: 'font-DoHyeon',
  },
  tableAttribute : {
    fontSize : 20,
    fontFamily: 'font-DoHyeon',
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
    fontFamily: 'font-DoHyeon',
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
    fontFamily: 'font-DoHyeon',
  },

});

export default ProfileScreen;
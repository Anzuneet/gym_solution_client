import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import ProfileChart from "../../components/ProfileChart";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import {Feather,MaterialIcons} from "@expo/vector-icons"


const { width, height } = Dimensions.get("window");
const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

 const RecordMemberScreen = props => (
  <ScrollView style = {styles.container}>
  <PopupDialog
      dialogTitle={<DialogTitle title="인바디 기록하기" />}
      ref={props.setDialog}
      dialogAnimation={slideAnimation}
      dismissOnTouchOutside = {true}
      height = {750}
    >
    
    <View>
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
    <View style = {{justifyContent : 'center', alignItems: 'center'}}>
    <TextInput 
              style = {{width :width -20}} 
              underlineColorAndroid = 'rgba(0,0,0,0)' 
              placeholder="코멘트를 입력해주세요" 
              autoCorrecto = {false}
              value = {props.fat}
              keyboardType='numeric'
              onChangeText={props.changeFat}
            />
    </View>
    <View  style = {{flexDirection : 'row'}}>
      <View>
      {props.flag ?  
            (<Image source={{uri:props.image.uri} } style = {{width: width * 0.8, height: height*0.63 * 0.8}}/>)
            :( 
            <Image
              source={require("../../assets/images/photoPlaceholder.png")}
              style = {{width: width * 0.8, height: height *0.63 * 0.8}}
            />
            )}  
      </View>
      <View style = {{flex: 1}}>
        <TouchableOpacity
        style = {{backgroundColor : "#rgba(253,139,27,1)",flex: 1, borderColor : "skyblue", borderWidth : 4, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {props.stateInitialization()}}>
        <Feather name="camera" size={50} color="white" style = {styles.iconContainer}/>
        <Text style = {styles.cameraTabText}> 카메라 </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {{backgroundColor : "#rgba(253,139,27,1)",flex: 1, borderColor : "skyblue", borderWidth : 4, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {props.postExercise}}>
        <MaterialIcons name="photo-album" size={50} color="white" style = {styles.iconContainer}/> 
          <Text style = {styles.gallaryTabText}> 갤러리 </Text>
        </TouchableOpacity>
      </View>
      

      </View>
    </PopupDialog>
   <View style = {styles.headerContainer}>
    <Text style = {styles.nameText}>김선태 Profile</Text>
   </View>
   <View style = {styles.graphContainer}>
      
      <ProfileChart
        data = {props.chartIndex == 1 ?
          (
            props.Weight
          ):
          (
            props.chartIndex == 2 ? props.Muscle : props.Fat
          )
        }
        name = {props.chartIndex == 1 ?
          (
            "Weight"
          ):
          (
            props.chartIndex == 2 ? "Muscle" : "Fat"
          )
        }
      />
    </View>
    <View style = {styles.grapheTitleContainer}>
        <TouchableOpacity style = {props.chartIndex == 1 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
        onPressOut ={props.clickWeight}>
          <Text  style = {props.chartIndex == 1 ? styles.clickedText : styles.unClickedText}> 
          Weight </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {props.chartIndex == 2 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
        onPressOut ={props.clickMuscle}>
        <Text  style = {props.chartIndex == 2 ? styles.clickedText : styles.unClickedText}>  
          Muscle </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {props.chartIndex == 3 ? styles.clickedTextContainer : styles.unClickedTextContainer}
        onPressOut ={props.clickFat}>
          <Text  style = {props.chartIndex == 3 ? styles.clickedText : styles.unClickedText}> 
          Fat </Text>
        </TouchableOpacity>
      </View>
    <View>
    <Calendar
      style = {{marginVertical : 50}}
      markedDates={props.dates2}
      onDayPress={props.pullDayInfo}
    />
    </View>
  </ScrollView>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer : {
    flexDirection : 'row',
    backgroundColor : "white",
    justifyContent : 'center',
  },
  graphContainer : {
    alignItems : "center",
    
  }, grapheTitleContainer : {
    flexDirection : 'row',
    width : width,
    height : 50,
    borderRadius : 20,
  },
  clickedTextContainer : {
    flex:1,
    backgroundColor : "#ffbb00",
    justifyContent : 'center',
    alignItems : 'center',
  },
  unClickedTextContainer : {
    flex:1,
    backgroundColor : "#ffffff",
    justifyContent : 'center',
    alignItems : 'center',
  },
  nameText : {
    fontSize : 20,
    paddingVertical : 10,
  },
  clickedText : {
    color : "#ffffff",
    fontSize : 20,
  },
  unClickedText : {
    color : "#ffbb00",
    fontSize : 20,
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
  cameraTabText : {
    paddingTop : 10,
    fontSize : 20,
    fontFamily: 'font-DoHyeon',
  },
  gallaryTabText : {
    paddingTop : 10,
    fontSize : 20,
    fontFamily: 'font-DoHyeon',
  },
});


export default RecordMemberScreen;
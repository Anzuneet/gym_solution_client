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
import MemberList from "../../components/MemberList"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';

const { width, height } = Dimensions.get("window");
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

 const ShowMembersScreen = props => (
  <View style = {styles.container}>
    <PopupDialog
      dialogTitle={<DialogTitle title="운동 기록" />}
      ref={props.setDialog}
      dialogAnimation={slideAnimation}
      dismissOnTouchOutside = {true}
      height = {600}
    >
    
    <View style = {styles.upperRow}>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data0.name}
          onChangeText={props.changeNames0}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data1.name}
          onChangeText={props.changeNames1}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data2.name}
          onChangeText={props.changeNames2}
        />
      </View>
    </View>
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data0.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes0}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data0.set}
          keyboardType='numeric'
          onChangeText={props.changeSets0}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data1.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes1}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data1.set}
          keyboardType='numeric'
          onChangeText={props.changeSets1}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data2.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes2}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data2.set}
          keyboardType='numeric'
          onChangeText={props.changeSets2}
        />
      </View>
    </View> 
    <View style = {styles.upperRow}>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data3.name}
          onChangeText={props.changeNames3}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data4.name}
          onChangeText={props.changeNames4}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.textInput} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="운동 명" 
          autoCorrecto = {false}
          value = {props.data5.name}
          onChangeText={props.changeNames5}
        />
      </View>
    </View> 
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data3.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes3}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data3.sets}
          keyboardType='numeric'
          onChangeText={props.changeSets3}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data4.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes4}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data4.set}
          keyboardType='numeric'
          onChangeText={props.changeSets4}
        />
      </View>
      <View style = {styles.column}>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="횟수" 
          autoCorrecto = {false}
          value = {props.data5.count}
          keyboardType='numeric'
          onChangeText={props.changeTimes5}
        />
        <Text style ={styles.multiText}>*</Text>
        <TextInput 
          style = {styles.NOT} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="세트" 
          autoCorrecto = {false}
          value = {props.data5.set}
          keyboardType='numeric'
          onChangeText={props.changeSets5}
        />
      </View>
    </View> 
    <View style = {styles.ButtonContainer}>
      <TouchableOpacity
      style = {{backgroundColor : "#rgba(253,139,27,1)", marginHorizontal :90, paddingVertical :10, borderRadius : 20}}
      onPress={() => {props.stateInitialization()}}>
      <Text style = {{paddingHorizontal : 20, fontFamily: 'font-DoHyeon'}}>설정초기화</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {{backgroundColor : "#rgba(253,139,27,1)", marginHorizontal :90, paddingVertical :10, borderRadius : 20}}
      onPressOut = {props.postExercise}>
      <Text style = {{paddingHorizontal : 20, fontFamily: 'font-DoHyeon'}}>설정완료</Text>
      </TouchableOpacity>

      </View>
    </PopupDialog>
    <View style = {styles.headerContainer}>
    <Text style = {styles.nameText}>회원 목록</Text>
   </View>
    <View style = {{flex: 1, backgroundColor : 'white'}}>
      <MemberList navigate = {props.navigation.navigate}
      trainees = {props.trainees}
      guid = {props.navigation.state.params.group.uid}/>
   </View>
   
   <View style = {{backgroundColor: "skyblue",}}>
   <Text style = {{textAlign : "center", fontSize: 35, color: "white", fontFamily: 'font-DoHyeon',}}> 달력에 기록해주세요 </Text>
   <Calendar
      style = {{}}
      markedDates={props.dates2}
      onDayPress={props.pullDayInfo}
    />
   
   </View>
  </View>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  upperRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : "#rgba(255,167,10,0.8)"
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
    flexDirection : 'row'
  },
  textInput : {
    width : width/3 -10,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    alignItems : 'center',
    fontFamily: 'font-DoHyeon'
  },
  NOT :{
    width : width/4 -50,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingLeft:5,
    backgroundColor: "#fafafa",
    alignItems : 'center',
    fontFamily: 'font-DoHyeon'
  },
  multiText : {
    paddingHorizontal : 4,
  },
  ButtonContainer :{

    flexDirection : 'row',
    justifyContent : 'center',
    borderTopWidth : 1,
    borderBottomWidth : 1,
    borderColor : "#ffbb00",
    paddingVertical : 10,
    
  },
  headerContainer : {
    flexDirection : 'row',
    backgroundColor : "black",
    justifyContent : 'center',
  },
  nameText : {
    fontSize : 30,
    paddingVertical : 10,
    color: "white",
    fontFamily: 'font-DoHyeon'
  },
});


export default ShowMembersScreen;
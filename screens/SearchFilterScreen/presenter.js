import React, { Component } from "react";
import { ScrollView ,
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  Alert, 
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TextInput,
  Dimensions
 } from "react-native";
import { List, SearchBar, Divider,} from "react-native-elements";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DaysCheckBox from "../../components/DaysCheckBox";

const { width, height } = Dimensions.get("window");

const SearchFilterScreen = props => (
  
    <View style = {styles.rowContainer}>

        <DateTimePicker
          isVisible={props.startClockPickerVisible}
          onConfirm={props.changeStartTime}
          onCancel={props.hideStartClockPicker}
          mode = {'time'}
          is24Hour = {false} 
        />   
          <DateTimePicker
          isVisible={props.endClockPickerVisible}
          onConfirm={props.changeEndTime}
          onCancel={props.hideEndClockPicker}
          mode = {'time'}
          is24Hour = {false} 
        />  
      <View style = {styles.subTitleContainer}>
        <Text  style = {styles.subTitleText}>요일</Text>
      </View>
        <DaysCheckBox 
          monday = {props.daysOfWeek.MON}
          tuesday = {props.daysOfWeek.TUE}
          wednesday = {props.daysOfWeek.WED}
          thursday = {props.daysOfWeek.THU}
          friday = {props.daysOfWeek.FRI}
          saturday = {props.daysOfWeek.SAT}
          sunday = {props.daysOfWeek.SUN}
          changeMonday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, MON:!props.daysOfWeek.MON}})}
          changeTuesday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, TUE:!props.daysOfWeek.TUE}})}
          changeWednesday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, WED:!props.daysOfWeek.WED}})}
          changeThursday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, THU:!props.daysOfWeek.THU}})}
          changeFriday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, FRI:!props.daysOfWeek.FRI}})}
          changeSaturday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, SAT:!props.daysOfWeek.SAT}})}
          changeSunday = {()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, SUN:!props.daysOfWeek.SUN}})}
        />
      <View style = {styles.subTitleContainer}>
        <Text  style = {styles.subTitleText} >가격대 </Text>
      </View>
      <View style = {styles.TextInputcontainer}>
     
      <TouchableOpacity 
      style = {styles.TouchableOpacityContainer}      >
         <TextInput 
            style = {styles.TouchableOpacityText} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="최소 가격" 
            autoCorrecto = {false}
            value = {props.charge.min}
            keyboardType='numeric'
            onChangeText={props.changechargeMin}
         />
      </TouchableOpacity>

      <Text style ={styles.btnText}>~</Text>

      <TouchableOpacity  
      style = {styles.TouchableOpacityContainer}>
          <TextInput 
          style = {styles.TouchableOpacityText} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="최대 가격" 
          autoCorrecto = {false}
          value = {props.charge.max}
          keyboardType='numeric'
          onChangeText={props.changechargeMax}
          />
      </TouchableOpacity>   
      </View>
      <View style = {styles.subTitleContainer}>
        <Text  style = {styles.subTitleText}>운동 시간 </Text>
      </View>
      <View style = {styles.TextInputcontainer}>
      <TouchableOpacity 
      onPressOut={props.showStartClockPicker}
      style = {styles.TouchableOpacityTimeContainer}      >
      <Text style = {props.time.start ? styles.dateText : styles.titleText}>
                    {props.time.start ? props.time.start : "시작 시간"}
                </Text>
      </TouchableOpacity>

      <Text style ={styles.btnText}>~</Text>

      <TouchableOpacity  
      onPressOut={props.showEndClockPicker}
      style = {styles.TouchableOpacityTimeContainer}>
      <Text style = {props.time.end ? styles.dateText : styles.titleText}>
                    {props.time.end ? props.time.end : "종료 시간"}
                </Text>
      </TouchableOpacity>    
      </View>

      <View style = {styles.ButtonContainer}>
      <TouchableOpacity
      style = {{backgroundColor : "#rgba(253,139,27,1)", marginHorizontal :90, paddingVertical :10, borderRadius : 20, marginBottom : 5,}}
      onPress={() => {props.stateInitialization()}}>
      <Text style = {{paddingHorizontal : 20}}>설정초기화</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {{backgroundColor : "#rgba(253,139,27,1)", marginHorizontal :90, paddingVertical :10, borderRadius : 20, marginBottom : 5,}}
      onPress={() => {props.searchScreen()}}>
      <Text style = {{paddingHorizontal : 20}}>설정완료</Text>
      </TouchableOpacity>

      </View>
    
    </View>
)

const styles = StyleSheet.create({

   container: {
        flex :1,
        height:60,
        width:100,
    },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  logo: {
    width: 180,
    height: 65,
    marginTop: 20
    },
  rowContainer :{
    flex:1,
    backgroundColor : "#f2f2f2",
  },
  weightContainer :{
      flexDirection : 'row',
      backgroundColor: 'red',
      //justifyContent : 'space-between',
      backgroundColor : '#f2f2f2',
      //paddingHorizontal : 7
    },
  checkBoxContainer :{
    //flex:2,
    //flexDirection : 'column',
    height:30,
    width: width/10,
    paddingVertical: 5,
    marginBottom : 10,
  },
  textStyle:{
    fontSize:12,
  },
  
  ButtonContainer :{

    flexDirection : 'row',
    justifyContent : 'center',
    borderTopWidth : StyleSheet.hairlineWidth,
    borderColor : "#ffbb00",
    paddingTop : 10,
  },
  filterContainer: {
    flex : 1,
    backgroundColor : "#fefefe",
    justifyContent: "center",
    alignItems: "center",

},
TouchableOpacityContainer : {
    width : 160,
    backgroundColor : "#ffffff",
    justifyContent : 'center',
    height : 30,
},
TouchableOpacityTimeContainer : {
  width : 160,
  backgroundColor : "#ffffff",
  justifyContent : 'center',
  alignItems : 'center',
  height : 30,
},
TouchableOpacityText : {
    fontSize : 25,
    textAlign: "center",
    color: "black",
    fontFamily: 'font-DoHyeon',
},
filterText : {
    fontSize : 30,
    color : "rgba(0,0,0,0.5)"
    },
TextInputcontainer: {
      flexDirection : 'row',
      //backgroundColor: '#fff',
      paddingVertical : 10,
      backgroundColor : '#f2f2f2',
      paddingLeft : 20,
      
    },
btnText:{
      color: "black",
      fontWeight : "600",
      textAlign: "center",
      fontSize :25,
      marginLeft: 3,
  },
  dateText: {
    fontSize : 25,
    fontFamily: 'font-DoHyeon',
  },
  titleText: {
    fontSize : 25,
    fontFamily: 'font-DoHyeon',
    color : "#cccccc"
  },
  subTitleContainer : {
    paddingLeft : 10,
    marginTop : 10,
  },
  subTitleText : {
    fontSize : 15,
    color : "#ffbb00",
    fontFamily: 'font-DoHyeon',
  },
});

export default SearchFilterScreen;


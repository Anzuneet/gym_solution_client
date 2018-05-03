import React from "react";
import PropTypes from 'prop-types';
import {
      View,
      Text,
      Image,
      StyleSheet,
      Dimensions,
      TouchableOpacity,
      TextInput,
      Button,
      ScrollView,
      ActivityIndicator,
      CheckBox,
    } from "react-native";
import PopupDialog , { SlideAnimation } from 'react-native-popup-dialog';
import DaysCheckBox from "../../components/DaysCheckBox";
import DateTimePicker from 'react-native-modal-datetime-picker';

const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});


const CreateTrainingScreen = props => (
    <ScrollView>
       <DateTimePicker
          isVisible={props.startTimePickerVisible}
          onConfirm={props.changeStartDate}
          onCancel={props.hideStartTimePicker}
          mode = {'date'}
          
        />
       <DateTimePicker
          isVisible={props.endTimePickerVisible}
          onConfirm={props.changeEndDate}
          onCancel={props.hideEndTimePicker}
          mode = {'date'}
          
        />
        <DateTimePicker
          isVisible={props.startClockPickerVisible}
          onConfirm={props.changeStartTime}
          onCancel={props.hideStartClockPicker}
          mode = {'time'}
          is24Hour = {false}
          
        />          
        <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}> 트레이닝 만들기 </Text>
        </View>

        <View style = {styles.titleContainer}>
        <Text style ={styles.textContentFont}> 트레이닝 제목 </Text>
        <TextInput 
              style = {styles.textInputTitle} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="트레이닝 제목을 입력해주세요" 
              value = {props.groupsTitle}
              onChangeText={props.changeGroupsTitle}
          />
        </View>
        <Text style ={styles.textContentFont}> 트레이닝 설명 </Text>
        <View style = {styles.commentContainer}>
            <TextInput 
              style = {styles.textInputComment} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="트레이닝 설명을 입력해주세요" 
              value = {props.groupsComment}
              onChangeText={props.changeGroupsComment}           
              multiline = {true}    
              numberOfLines = {6}        
              maxLength = {150}
              
          />    
        </View>
        <Text style ={styles.textContentFont}> 트레이닝 날짜 </Text>
        <View style = {styles.dateContainer}>
            <View style = {styles.startDateContainer}>
                <Text style = {props.start_date ? styles.dateText : styles.dateText}>
                    {props.start_date ? "시작 날짜 : " +  props.start_date : "트레이닝의 시작 날짜를 정해주세요!"}
                </Text>
                <TouchableOpacity style = {styles.callCalenderContainer} onPressOut={props.showStartTimePicker}>
                    <Text style = {styles.callCalender}> 설정하기!</Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.endDateContainer}>
                <Text style = {props.end_date ? styles.dateText : styles.dateText}>
                    {props.end_date ? "종료 날짜 : " + props.end_date : "트레이닝의 종료 날짜를 정해주세요!"}
                </Text>

                <TouchableOpacity style = {styles.callCalenderContainer} onPressOut={props.showEndTimePicker}>
                    <Text style = {styles.callCalender}> 설정하기!</Text>
                </TouchableOpacity>
            </View>

            <Text style ={styles.textContentTime}> 트레이닝 시간 </Text>
            <View style ={styles.startTimeContainer}>
                <Text style = {props.start_time ? styles.dateText : styles.dateText}>
                    {props.start_time ? "시작 시간 : " + props.start_time : "트레이닝의 시작 시간을 정해주세요!!"}
                </Text>
                <TouchableOpacity style = {styles.callCalenderContainer} onPressOut={props.showStartClockPicker}>
                    <Text style = {styles.callCalender}> 설정하기!</Text>
                </TouchableOpacity>
            </View>

            <Text style ={styles.textContentFont}> 트레이닝 요일</Text>
                <DaysCheckBox 
                 monday = {props.monday}
                 tuesday = {props.tuesday}
                 wednesday = {props.wednesday}
                 thursday = {props.thursday}
                 friday = {props.friday}
                 saturday = {props.saturday}
                 sunday = {props.sunday}
                 changeMonday = {props.changeMonday}
                 changeTuesday = {props.changeTuesday}
                 changeWednesday = {props.changeWednesday}
                 changeThursday = {props.changeThursday}
                 changeFriday = {props.changeFriday}
                 changeSaturday = {props.changeSaturday}
                 changeSunday = {props.changeSunday}
                />

        

        <Text style ={styles.textContentFont}> 트레이닝 조건 </Text>
        <View style = {styles.rowContainer}>
            <View style = {styles.chargeContainer}>
                <Text style = {styles.textContentCharge}> 비용 :</Text>
                <TextInput 
                style = {styles.chargeInputComment} 
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder=" 비용입력하기" 
                value = {props.charge}
                onChangeText={props.changeCharge}
                keyboardType='numeric'
            />    
                <Text style = {styles.textContentCapacity}> 인원 :</Text>
                <TextInput 
                style = {styles.capacityInputComment} 
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder="      인원수" 
                value = {props.capacity}
                keyboardType='numeric'
                onChangeText={props.changeCapacity}/>
                </View>
        </View>
        </View>
        
        <TouchableOpacity style = {styles.touchable} onPressOut={props.submit}>
                <View style={styles.button}>
                    {props.isSubmitting ? 
                    (<ActivityIndicator size = "large" color="white"/>)
                    :
                    (<Text style ={styles.btnText}>트레이닝 만들기!</Text>)
                    }
                </View>
            </TouchableOpacity>
    </ScrollView>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
    titleContainer: {
        },
    rowContainer : {
        flexDirection : 'row',
    },
    textInputTitle: {
        width : width-60,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 25,
        fontFamily: 'font-DoHyeon',
        },
    commentContainer: {
        justifyContent : 'center',
        //paddingVertical : 20,
        },
    chargeContainer : {
        justifyContent : 'flex-start',
        flexDirection : "row",
        //marginLeft : 30,
        marginBottom : 10,
        },
    textInputComment: {
        width : width-60,
        //paddingBottom : 90,
        //height: 90,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 25,
        fontFamily: 'font-DoHyeon',
        },



    chargeInputComment : {
        width : 100,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 10,
        fontFamily: 'font-DoHyeon'
    },
    capacityInputComment : {
        width : 100,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 10,
        fontFamily: 'font-DoHyeon'
    },

    dateContainer: {
        justifyContent : 'center',
        },
    startDateContainer : {
        flexDirection : 'row',
        //paddingBottom : 10,
    },
    endDateContainer : {
        flexDirection : 'row',
        //paddingBottom : 10,
    },
    startTimeContainer : {
        //flexDirection : 'row',
        //paddingBottom : 20,
        flexDirection : 'row',
    },
    durationContainer : {
        justifyContent : 'flex-start',
        flexDirection : "row",
        marginLeft : 30,
    },
    dateText: {
        width : width-150,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingTop: 9,
        backgroundColor: "#dadada",     
        marginLeft : 25,
        marginBottom : 8,
        //marginTop : 5,
        fontFamily: 'font-DoHyeon',
        },
        
    defaultText: {
        fontSize : 20,
        fontWeight : "500",
        marginLeft : 30,
        },
    titleText: {
        //height : 70,
        fontSize : 34,
        textAlign : 'left',
        //fontWeight : 'bold',
        marginBottom : 5,
        marginTop : 15,
        fontFamily: 'font-DoHyeon',
        
        },
    calenderButtontitleTextContainer :{
        width : 100,
        justifyContent : 'center',
        alignItems : 'center',
    },
    callCalenderContainer : {
        width : 80,
        //height : 30,
        backgroundColor :'transparent',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 20,
        //marginBottom : 20,
  
      },
      callCalender : {
        fontSize : 20,
        color : '#ffbb00',
        //height : 70,
        //textAlign : 'left',
        //fontWeight : 'bold',
        //marginBottom : 5,
        //marginTop : 15,
        fontFamily: 'font-DoHyeon',

      },
      touchable:{
        //borderRadius:3,
        backgroundColor:"#FFBB00",
        //width: width
    },
    button:{
        width,
        //height : 60,
        backgroundColor :'#FFBB00',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 14,
    },
    btnText:{
        fontSize : 40,
        color : 'rgba(255,255,255,1)',
        fontFamily: 'font-DoHyeon',
        marginBottom : 7,
    },

    textContentFont : {
        fontFamily: 'font-DoHyeon',
        fontSize : 20,
        marginLeft : 20,
        marginBottom : 5,
        marginTop : 15,
      },

      textContentTime : {
        fontFamily: 'font-DoHyeon',
        fontSize : 20,
        marginLeft : 20,
        marginBottom : 5,
        marginTop : 15,
      },
      textContentCharge : {
        fontFamily: 'font-DoHyeon',
        fontSize : 20,
        marginLeft : 19,
        marginBottom : 5,
        marginTop : 5,
      },
      textContentCapacity : {
        fontFamily: 'font-DoHyeon',
        fontSize : 20,
        marginLeft : 10,
        marginBottom : 5,
        marginTop : 5,
      },
      subtitle:{
        //height : 70,
        fontSize : 34,
        textAlign : 'left',
        //fontWeight : 'bold',
        marginBottom : 5,
        marginTop : 15,
        fontFamily: 'font-DoHyeon',
      },
});
    
export default CreateTrainingScreen;

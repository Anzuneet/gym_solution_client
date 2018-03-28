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
import CalenderPicker  from '../../components/CalenderPicker';
import DaysCheckBox from "../../components/DaysCheckBox";

const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});


const CreateTrainingScreen = props => (
    <ScrollView>
        <PopupDialog
            ref={(popupDialog) => { this.StartDateDialog = popupDialog; }}
            dialogAnimation={slideAnimation}
        >
            <CalenderPicker 
                Date = {props.start_date}
                changeDate = {props.changeStartDate}
            />

        </PopupDialog>
        <PopupDialog
            ref={(popupDialog) => { this.EndDateDialog = popupDialog; }}
            dialogAnimation={slideAnimation}
        >
            <CalenderPicker 
                Date = {props.end_date}
                changeDate = {props.changeEndDate}
            />

        </PopupDialog>
        <View style = {styles.titleContainer}>
        <Text style ={styles.titleText}> Training Title </Text>
        <TextInput 
              style = {styles.textInputTitle} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="당신의 traing 이름을 설정해주세요!" 
              value = {props.groupsTitle}
              onChangeText={props.changeGroupsTitle}
          />
        </View>
        <Text style ={styles.titleText}> Training Comment </Text>
        <View style = {styles.commentContainer}>
            <TextInput 
              style = {styles.textInputComment} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="당신의 training에대해서 더 설명할것이 있나요?" 
              value = {props.groupsComment}
              onChangeText={props.changeGroupsComment}
          />    
        </View>
        <View style = {styles.dateContainer}>
            <View style = {styles.startDateContainer}>
                <Text style = {props.start_date ? styles.dateText : styles.titleText}>
                    {props.start_date ? "시작 일 : " +  props.start_date : "traing의 시작일을 정해주세요!"}
                </Text>
                <TouchableOpacity style = {styles.callCalenderContainer} onPressOut={() => {
                        this.StartDateDialog.show();
                        }}>
                    <Text style = {styles.callCalender}> click!</Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.endDateContainer}>
                <Text style = {props.end_date ? styles.dateText : styles.titleText}>
                    {props.end_date ? "종료 일 : " + props.end_date : "traing의 종료일을 정해주세요!"}
                </Text>

                <TouchableOpacity style = {styles.callCalenderContainer} onPressOut={() => {
                        this.EndDateDialog.show();
                        }}>
                    <Text style = {styles.callCalender}> click!</Text>
                </TouchableOpacity>
            </View>

            <Text style ={styles.titleText}>어느 요일에 진행하실 건가요?</Text>
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

        </View>
        <Text style ={styles.titleText}> 비용을 정해주세요 ! </Text>
        <View style = {styles.chargeContainer}>
            <Text style = {styles.chargeText}> 비용 : </Text>
            <TextInput 
              style = {styles.chargeInputComment} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="비용입력하기" 
              value = {props.charge}
              onChangeText={props.changeCharge}
          />    
        </View>
        
        <TouchableOpacity style = {styles.touchable} onPressOut={props.submit}>
                <View style={styles.button}>
                    {props.isSubmitting ? 
                    (<c size = "small" color="white"/>)
                    :
                    (<Text style ={styles.btnText}>Make it!</Text>)
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
        height: 100,
        justifyContent : 'center',
        },
    textInputTitle: {
        width : width-150,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginTop :15,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 20,
        },
    commentContainer: {
        height: 100,
        justifyContent : 'center',
        },
    chargeContainer : {
        height : 200,
        justifyContent : 'flex-start',
        flexDirection : "row",
        marginLeft : 30,
        },
    textInputComment: {
        width : width-30,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 20,
        },
    chargeInputComment : {
        width : 150,
        height: 30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 20,
    },
    dateContainer: {
        height: 200,
        justifyContent : 'center',
        },
    startDateContainer : {
        flexDirection : 'row',
    },
    endDateContainer : {
        flexDirection : 'row',
    },
    dateText: {
        fontSize : 20,
        fontWeight : "500",
        marginLeft : 30,
        },
    defaultText: {
        fontSize : 20,
        fontWeight : "100",
        marginLeft : 30,
        },
    titleText: {
        fontSize : 20,
        marginLeft : 5,
        fontWeight : "500",
        },
    calenderButtonContainer :{
        width : 100,
        justifyContent : 'center',
        alignItems : 'center',
    },
    callCalenderContainer : {
        width : 80,
        height : 30,
        backgroundColor :'transparent',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 20,
        marginBottom : 20,
  
      },
      callCalender : {
        fontSize : 20,
        color : '#ffbb00'

      },
      touchable:{
        borderRadius:3,
        backgroundColor:"#FFBB00",
        width: width
    },
    button:{
        paddingHorizontal:7,
        paddingVertical: 20
    },
    btnText:{
        color: "white",
        fontWeight : "600",
        textAlign: "center",
        fontSize :50,
    },
});
    
export default CreateTrainingScreen;

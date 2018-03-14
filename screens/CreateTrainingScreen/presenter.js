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
    } from "react-native";
import PopupDialog , { SlideAnimation } from 'react-native-popup-dialog';
import CalenderPicker  from '../../components/CalenderPicker';

const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});


const CreateTrainingScreen = props => (
    <View>
        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            dialogAnimation={slideAnimation}
        >
            <CalenderPicker 
                Date = {props.start_date}
                changeDate = {props.changeStartDate}
            />

        </PopupDialog>
        <View style = {styles.titleContainer}>
        <TextInput 
              style = {styles.textInputTitle} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="당신의 traing 이름을 설정해주세요!" 
              value = {props.groupsTitle}
              onChangeText={props.changeGroupsTitle}
          />
        </View>
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

            <Text style = {props.start_date ? styles.dateText : styles.defaultText}>
                {props.start_date ? props.start_date : "traing의 시작일을 정해주세요!"}
            </Text>

            <View style = {styles.calenderButtonContainer}>
                <Button 
                    color = "#ffbb00"
                    title="Set startDate"
                    onPress={() => {
                    this.popupDialog.show();
                    }}
                />
            </View>

            <Text style = {props.end_date ? styles.dateText : styles.defaultText}>
                {props.end_date ? props.end_date : "traing의 종료일을 정해주세요!"}
            </Text>


            <Text style ={styles.titleText}>어느 요일에 진행하실 건가요?</Text>

        </View>
        <View style = {styles.chargeContainer}>
        </View>
        <View style ={styles.gymContainer}>
        </View>

        
        

        <Text> {props.start_date ? props.start_date : "시간없음"} </Text>
    </View>
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
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 20,
        },
    commentContainer: {
        height: 100,
        justifyContent : 'center',
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
    dateContainer: {
        height: 200,
        justifyContent : 'center',
        },
    dateText: {
        fontSize : 20,
        fontWeight : "500",
        },
    defaultText: {
        fontSize : 8,
        fontWeight : "100",
        },
    titleText: {
        fontSize : 20,
        fontWeight : "500",
        },
    calenderButtonContainer :{
        width : 100,
        justifyContent : 'center',
        alignItems : 'center',
    },
});
    
export default CreateTrainingScreen;

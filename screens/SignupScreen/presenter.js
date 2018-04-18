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
      StatusBar,
      ActivityIndicator,
      ScrollView,
    } from "react-native";
import {LinearGradient, Font} from 'expo';
import { Ionicons,Feather } from "@expo/vector-icons";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


    
var radio_types = [
  {label: 'trainee', value: "trainee" },
  {label: 'trainer', value: "trainer" }
];

var radio_genders = [
  {label: '남성', value: "M" },
  {label: '여성', value: "F" }
]

const { width, height } = Dimensions.get("window");

const SignupScreens = props => (

    <View style = {styles.container}>
  
      <StatusBar barStyle={"light-content"} />

      <View style={styles.header}>  
          <Text style = {styles.titleText}>GYMSOLUSION</Text>
      </View>

      <ScrollView
      style = {styles.scrollContainer}
      >
      <View style={styles.loginForm}>
        <Text style={styles.subtitle}> 회원 정보 입력 </Text>
        <Text>      이름</Text>
        <TextInput 
            style = {styles.textInputLoginInformation} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="성명을 입력해주세요" 
            autoCorrecto = {false}
            value = {props.username}
            onChangeText={props.changeUsername}
            />
        <Text>      비밀번호</Text>
        <TextInput 
            style = {styles.textInputLoginInformation} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry = {true} 
            value = {props.password}
            onChangeText={props.changePassword}
            />
        <View style={styles.paswConfirm}>
          <TextInput 
              style = {styles.textInputLoginInformation} 
              underlineColorAndroid = 'rgba(0,0,0,0)' 
              placeholder="비밀번호를 한번 더 입력해주세요"
              secureTextEntry = {true} 
              value = {props.password2}
              onChangeText={props.changePassword2}
              />
          {props.isChecked ? 
          <Feather style = {styles.checkPswed} name = "check-circle" size ={30} color = 'green'/> 
          :
          <Feather style = {styles.checkPswed} name = "x-circle" size = {30} color = 'red'/>}
        </View>
        <Text>      전화번호</Text>
          <TextInput 
              style = {styles.textInputLoginInformation} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="전화번호를 입력해주세요" 
              value = {props.phonenumber}
              onChangeText={props.changePhonenumber}
          />
        <Text>      성별</Text>

        <RadioForm
          style = {styles.radioGender}
          radio_props={radio_genders}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#50c900'}
          buttonSize={10}
          animation={false}
          labelStyle = {styles.radioText}
          
          onPress={props.changeGender}
        />

        <Text>      생년월일</Text>
        <View style = {styles.birthDayContent}>
          <TextInput 
              style = {styles.textInputBirthday} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="생년월일 8자를 입력해주세요" 
              value = {props.birthday}
              onChangeText={props.changeBirthday}
          />
        </View>
      </View>
      
      <View style = {styles.trainerForm}>
      <Text style={styles.subtitle}> 트레이너만 입력해주세요! </Text>
        <View style = {styles.typeContent}>
          <RadioForm
            radio_props={radio_types}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'pink'}

            buttonSize={10}
            animation={true}
            labelStyle = {styles.radioText}
            
            onPress={props.changeType}
          />
          <Text style= {styles.textType}> Your choice? </Text>
        </View>
        
        <View style = {styles.GYMContent}>
          <TextInput 
              style = {styles.textInputGYM} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              value = {props.fitness_club_name}
              placeholder="If your trainer input GYM" 
              onChangeText={props.changeFitness_club_name}
          />
          <TouchableOpacity style = {styles.touchSearch}>
            <Text style = {styles.textSearch}> Search!</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style = {styles.submit} onPressOut = {props.submit}>
            <Text style = {styles.textSubmit}> submit</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
);

SignupScreens.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    password2 : PropTypes.string.isRequired,
    phonenumber : PropTypes.string.isRequired,
    type : PropTypes.oneOf(['trainee' , 'trainer']).isRequired,
    fitness_club_name : PropTypes.string.isRequired,
    gender : PropTypes.oneOf(['M','F']).isRequired,
    birthday : PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
  
    changeUsername : PropTypes.func.isRequired,
    changePassword : PropTypes.func.isRequired,
    changePhonenumber : PropTypes.func.isRequired,
    changeType : PropTypes.func.isRequired,
    changeFitness_club_name : PropTypes.func.isRequired,
    changeGender : PropTypes.func.isRequired,
    changeBirthday : PropTypes.func.isRequired,
    submit : PropTypes.func.isRequired,
    isSearching : PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    },
    scrollContainer :{
      flex : 4,
      backgroundColor : "white",
    },
    header: {
      flex : 0.2,
      backgroundColor: "#FFBB00",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 180,
      height: 65,
      marginTop: 20
    },
    loginForm: {
      //height : height -300,
      paddingTop: 20,
    },
    trainerForm : {
    //  height : height-300,
    },
    persnalForm : {
      height : height-300,
    },
    textInputLoginInformation:{
      width : width -80,
      height:30,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 20,

    },
    paswConfirm :{
      flexDirection : "row",
      //height: 100,
    },
    phoneConfirm: {
      flexDirection : "row",  
    },
    textInputPhone : {
      width : width-150,
      height: 30,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 20,
    },
    textInputBirthday : {
      width : width-150,
      height: 30,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 20,
    },
    textInputGYM : {
      width : width-100,
      height: 30,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 20,
    },

    subtitle:{
      height : 70,
      fontSize : 34,
      textAlign : 'left',
      fontWeight : 'bold',
    },

    touchPhone:{
      alignItems : 'center',
      marginLeft : 20,
    },
    touchSearch:{
      alignItems : 'center',
      marginLeft : 20,
    },
    textType :{
      fontSize : 16,
      color:"pink"
    },
    textPhone : {
      fontSize : 16,
      color:"pink"
    },
    textGender : {
      fontSize : 16,
      fontWeight : '300',

    },
    typeContent:{
      height: 60,
      marginLeft : 20,
      flexDirection : 'row'
    },
    phoneContent:{
      height:60,
      flexDirection : 'row',
    },
    genderContent :{
      height: 60,
      flexDirection : 'row'
    },
    birthdayContent:{
      height: 60,
    },
    GYMContent : {
      height: 60,
      flexDirection : 'row',
    },
    radioGender : {
      marginLeft: 20,
    },
    radioText:{
      fontSize: 20,
      paddingHorizontal : 20,
    },
    fitnessClubName :{
      flex:0.3,
      marginLeft : 10,
      flexDirection : 'row'
    },

    textInputFitness :{
      width : width-120,
      height: 40,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 10,
    },
    buttonText : {
      fontSize:16,
      fontWeight:'500',
      color:"#000000",
    },
    buttonForm:{
      fontSize : 16,
      color:"#3E99EE",
      width: 80,
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor : 'transparent',
      justifyContent:'center',
    },

   
    checkPswed : {
      marginLeft : 15,
      
    },
    submit : {
      width,
      height : 50,
      backgroundColor :'#FFBB00',
      alignItems : 'center',
      justifyContent : 'center'

    },
    textSubmit : {
      fontSize : 40,
      color : 'rgba(255,255,255,0.7)'
    },
    textSearch :{
      fontSize : 10,
      color : 'rgba(255,255,255,0.7)'
    }, 
    titleText : {
      fontFamily: 'font-DoHyeon',
      fontSize : 55,
      color : "rgba(0,0,0,1)",
      marginTop : 25,
      textAlign: "center",
    }
});
    
export default SignupScreens;
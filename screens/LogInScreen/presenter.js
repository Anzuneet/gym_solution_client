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
      ActivityIndicator
    } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {Font} from 'expo'; 
    
const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
         <Text style = {styles.titleText}>GYMSOLUSION</Text>
    </View>
    
    <View style={styles.content}>

        <View style={styles.image}>
        <Image
        source={require("../../assets/images/icon-gym.png")}
        resizeMode="contain"
        style={styles.logo}
         />
         </View>

        <TextInput 
            style = {styles.textInput} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="전화번호" 
            autoCorrecto = {false}
            value = {props.username}
            keyboardType='numeric'
            onChangeText={props.changeUsername}
            />
        <TextInput 
            style = {styles.textInput} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="비밀번호"
            secureTextEntry = {true} 
            value = {props.password}
            onChangeText={props.changePassword}
            returnKeyType = {"send"}
            onEndEditing={props.submit}
            />
        <TouchableOpacity style = {styles.touchable} onPressOut={props.submit}>
        <View style={styles.button}>
            {props.isSubmitting ? 
            (<ActivityIndicator size = "small" color="white"/>)
            :
            (<Text style ={styles.btnText}>로그인</Text>)
            }
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.signupTextContent}>
            <Text style = {styles.introSignup}>계정이 없으신가요?</Text>
            <TouchableOpacity style = {styles.touchableSignUP} onPressOut={ ()=> props.navigate('SignUp')}>
                <Text style = {styles.signupText} > 회원가입 </Text>
            </TouchableOpacity>
        </View>
    </View>

);

LogInScreen.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    changeUsername : PropTypes.func.isRequired,
    changePassword : PropTypes.func.isRequired,
    submit : PropTypes.func.isRequired,
    navigate : PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
    header: {
    flex: 1,
    backgroundColor: "#FFBB00",
    alignItems: "center",
    justifyContent: "center",
    width
    },
    logo: {
    flex:1, 
    width: 330,
    height : 70,
    //width:180,
    //height: 65,
    marginTop: 20
    },
    content: {
    flex: 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
    },
    textInput:{
        width : 250,
        height:50,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        fontFamily: 'font-DoHyeon',
    },
    touchable:{
        borderRadius:20,
        backgroundColor: "#FFBB00",
        width: 250, 
        marginBottom : 25,
    },
    button:{
        paddingHorizontal:7,
        paddingVertical: 20
    },
    btnText:{
        color: "white",
        //fontWeight : "600",
        textAlign: "center",
        fontSize :30,
        fontFamily: 'font-DoHyeon',
        color: '#FFFFFF'
    },
    forgetPswd:{
      paddingVertical : 16,
      flexDirection : 'row'
    },
    signupTextContent:{
        flex:0.3,
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical: 20,
        flexDirection : 'row'
        
    },
    introSignup :{
        fontSize: 31,
        paddingRight : 15,
        borderRightWidth : 3,
        borderColor : "#ffffff",
        //fontWeight : "800",
        fontFamily: 'font-DoHyeon',
        color: 'rgba(0,0,0,0.5)'
    },
    signupText :{
        fontSize: 31,
        color : "#ffbb00",
        fontFamily: 'font-DoHyeon',
        //fontWeight : "500"
    },
    titleText : {
        fontFamily: 'font-DoHyeon',
        fontSize : 55,
        color : "rgba(0,0,0,1)",
        marginTop : 25,
        textAlign: "center",
    },
    touchableSignUP : {
        //backgroundColor : "#ffbb00",
        //flexDirection : 'row',
        justifyContent : "center",
        marginLeft : 5,
        //marginTop : 5,
        //paddingVertical: 5,
        //paddingHorizontal: 5,
    },
    image : {
        //marginTop : 25,
        marginBottom : 25,
        flex : 1,
    },
});
    
export default LogInScreen;
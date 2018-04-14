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
    

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
        <Image
        source={require("../../assets/images/logo-gym2.png")}
        resizeMode="stretch"
        style={styles.logo}
        />
    </View>
    <View style={styles.content}>
        <TextInput 
            style = {styles.textInput} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="PhoneNumber" 
            autoCorrecto = {false}
            value = {props.username}
            keyboardType='numeric'
            onChangeText={props.changeUsername}
            />
        <TextInput 
            style = {styles.textInput} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="Password"
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
            (<Text style ={styles.btnText}>Log In</Text>)
            }
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.signupTextContent}>
            <Text style = {styles.introSignup}>계정이 없으신가요?</Text>
            <TouchableOpacity onPressOut={ ()=> props.navigate('SignUp')}>
                <Text style = {styles.signupText} > SignUP </Text>
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
    backgroundColor: "#rgba(253,139,27,0.6)",
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
        backgroundColor: "#fafafa"
    },
    touchable:{
        borderRadius:20,
        backgroundColor: "#rgba(255,176,0,0.8)",
        width: 250
    },
    button:{
        paddingHorizontal:7,
        paddingVertical: 20
    },
    btnText:{
        color: "white",
        fontWeight : "600",
        textAlign: "center",
        fontSize :30
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
        fontSize: 30,
        paddingRight : 20,
        fontWeight : "800",
        color: 'rgba(0,0,0,0.5)'
    },
    signupText :{
        fontSize: 30,
        color : "#ffbb00",
        fontWeight : "500"
    }
});
    
export default LogInScreen;
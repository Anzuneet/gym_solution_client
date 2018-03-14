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
        source={require("../../assets/images/logo-gym.png")}
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
        <View style={styles.forgetPswd}>
            <Text style = {styles.introSignup}>Do you forget your password?</Text>
            <TouchableOpacity>
                <Text style = {styles.signupText} > Click it! </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
            <Ionicons name="logo-facebook" size={22} color="#ffbb00" />
            <Text style={styles.fbText}>Log in with Facebook</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.signupTextContent}>
            <Text style = {styles.introSignup}>Don't have a an account yet?</Text>
            <TouchableOpacity onPressOut={ ()=> props.navigate('SignUp')}>
                <Text style = {styles.signupText} > SignUP </Text>
            </TouchableOpacity>
        </View>
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
    width: 180,
    height: 65,
    marginTop: 20
    },
    content: {
    flex: 4,
    backgroundColor: "white",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start"
    },
    fbContainer: {
    marginTop: 50
    },
    fbView: {
    flexDirection: "row",
    alignItems: "center"
    },
    fbText: {
    color: "#ffbb00",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14
    },
    textInput:{
        width : width -80,
        height:50,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa"
    },
    touchable:{
        borderRadius:3,
        backgroundColor:"#FFBB00",
        width: width-80
    },
    button:{
        paddingHorizontal:7,
        paddingVertical: 20
    },
    btnText:{
        color: "white",
        fontWeight : "600",
        textAlign: "center",
        fontSize :14
    },
    forgetPswd:{
      paddingVertical : 16,
      flexDirection : 'row'
    },
    signupTextContent:{
        flex:1,
        alignItems : 'flex-end',
        justifyContent : 'center',
        paddingVertical: 20,
        flexDirection : 'row'
        
    },
    introSignup :{
        color: 'rgba(0,0,0,0.5)'
    },
    signupText :{
        fontSize: 16,
        color : "#ffbb00",
        fontWeight : "500"
    }
});
    
export default LogInScreen;
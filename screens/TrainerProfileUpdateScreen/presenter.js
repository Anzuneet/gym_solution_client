import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,Dimensions}from "react-native";
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import {Feather,MaterialIcons} from "@expo/vector-icons"

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

const { width, height } = Dimensions.get("window");

const TrainerProfileUpdateScreen = props =>
    (<View style = {styles.container}>
        <PopupDialog
            dialogTitle={<DialogTitle title="Trainer 경력 입력" />}
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            dismissOnTouchOutside = {true}
            height = {500}
        >
        <TextInput 
            style = {styles.textInput} 
            underlineColorAndroid = 'rgba(0,0,0,0)'  
            autoCorrecto = {false}
            value = {props.comment}
            onChangeText={props.changeComment}
            multiline = {true}
        />

        </PopupDialog>

        <PopupDialog
        dialogTitle={<DialogTitle title="이미지를 넣을 방식을 골라주세요!" />}
        ref={(popupDialog) => { props.parent.dialog = popupDialog; }}
        dialogAnimation={slideAnimation}
        dismissOnTouchOutside = {true}
        height = {150}
        >
            <View style = {styles.imagePickContainer}>
                <TouchableOpacity style ={styles.cameraTab} onPressOut = {props.takeImage}>
                <Feather name="camera" size={50} color="white" style = {styles.iconContainer}/>
                <Text style = {styles.cameraTabText}> CAMERA </Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.gallaryTab} onPressOut = {props.pickImage}> 
                <MaterialIcons name="photo-album" size={50} color="white" style = {styles.iconContainer}/> 
                <Text style = {styles.gallaryTabText}> GALLARY </Text>
                </TouchableOpacity>
            </View>
        </PopupDialog>
        <View style = {styles.profileContainer}>
            <View style = {styles.profileImageContainer}>
            {props.profileImage ?
            <Text>ProfileImage</Text>
            :
            <Image
                source={
                    require("../../assets/images/noPhoto.jpg")
                }
                style={styles.avatar}
            />
            }
            </View>
            <View>
                <View style = {styles.commentContainer}>
                    <Text style={styles.TextStyle} numberOfLines = { 6 } > 

                    {props.comment}

                    </Text>
                </View>
                <TouchableOpacity style = {styles.tUpdateBContainer} onPress={() => {
                    this.popupDialog.show();
                }}>
                <Text style = {styles.tUpdateBText}>소개문 업데이트하기!! </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style = {styles.upperContainer}>
            <TouchableOpacity style = {styles.imageContainer} onPressOut ={ () => {
                props.parent.dialog.show()
            }} >
            {props.flag ?  
                    (<Image source={{uri:props.image.uri} } style = {{width: width, height: height*0.63}}/>)
                    :( 
                    <Image
                    source={require("../../assets/images/photoPlaceholder.png")}
                    style = {{width: width, height: height *0.63}}
                    />
                    )}  
            </TouchableOpacity>
        </View>
    
    </View>
    )

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "white",
    },
    profileContainer : {
        flexDirection : 'row',
        backgroundColor : "red",
    },
    profileImageContainer : {
        paddingTop : 20,
        paddingHorizontal :10,
    },
    commentContainer : {
        marginHorizontal :10,
        marginTop : 20,
        backgroundColor : "yellow",
        height : 120,
        width : 250,
        paddingHorizontal :5,
    },
    tUpdateBContainer : {
        marginHorizontal :10,
        backgroundColor: "rgba(253,139,27,0.5)",
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth:3,
        borderColor: "rgba(253,139,27,0.5)"

    }, 
    tUpdateBText : {
        fontSize :30,
    },
    textInput : {
        height : 400,
        width : width,
        backgroundColor : "yellow"
    },
    upperContainer : {
        flex:4,
        backgroundColor : "#ffbb00",
      },
      imageContainer : {
        flex : 4,
      },
      imagePickContainer  : {
        width : width,
        height : height,
        backgroundColor : "white",
        flexDirection :'row',
      },
      cameraTab : {
        paddingTop : 10,
        flex : 1,
        backgroundColor : 'rgba(255,187,0,0.5)',
        alignItems : 'center'
      },
      cameraTabText : {
        paddingTop : 10,
        fontSize : 20,
        fontWeight : "500",
      },
      gallaryTab : {
        paddingTop : 10,
        flex : 1,
        backgroundColor : 'rgba(255,230,0,0.5)',
        alignItems : 'center'
      },
      gallaryTabText : {
        paddingTop : 10,
        fontSize : 20,
        fontWeight : "500",
      },

})

export default TrainerProfileUpdateScreen;
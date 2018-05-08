import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,Dimensions}from "react-native";
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import {Feather,MaterialIcons} from "@expo/vector-icons"
import SnapShot from "../../components/SnapShot";

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
            height = {450}
            //containerStyle = {{ zIndex: 10, elevation: 100 }}
        >
        <TextInput 
            style = {styles.textInput} 
            multiline = {true}
            numberOfLines = {10}
            value = {props.comment}
            onChangeText={props.changeComment}
            editable = {true}
            maxLength = {40}
        />

        </PopupDialog>

        <PopupDialog
        dialogTitle={<DialogTitle title="프로필 이미지를 넣을 방식을 골라주세요!" />}
        ref={(popupDialog) => { props.parent.dialogProfile = popupDialog; }}
        dialogAnimation={slideAnimation}
        dismissOnTouchOutside = {true}
        height = {150}
        >
            <View style = {styles.imagePickContainer}>
                <TouchableOpacity style ={styles.cameraTab} onPressOut = {props.takeImageProfile}>
                <Feather name="camera" size={50} color="white" style = {styles.iconContainer}/>
                <Text style = {styles.cameraTabText}> CAMERA </Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.gallaryTab} onPressOut = {props.pickImageProfile}> 
                <MaterialIcons name="photo-album" size={50} color="white" style = {styles.iconContainer}/> 
                <Text style = {styles.gallaryTabText}> GALLARY </Text>
                </TouchableOpacity>
            </View>
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
        <View style = {{flexDirection:'row'}}>
            <View style = {styles.profileContainer}>
                <TouchableOpacity style = {styles.profileImageContainer}
                onPressOut ={ () => {
                    props.parent.dialogProfile.show()
                }}
                >
                {props.profileImage ?
                (<Image source={{uri:props.profileImage.uri} } style = {styles.avatar}/>)
                :
                <Image
                    source={
                        require("../../assets/images/noPhoto.jpg")
                    }
                    style={styles.avatar}
                    
                />
                }
                </TouchableOpacity>
                    <View style = {styles.gymNameContainer}>
                        <Text style = {{}}>{props.gym}</Text>
                    </View>
                    <TouchableOpacity style = {styles.tUpdateBContainer} onPress={() => {
                            this.popupDialog.show();
                        }}>
                        <Text style = {styles.tUpdateBText}>Update!! </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style = {styles.commentContainer}>
                        <Text style={styles.TextStyle} numberOfLines = { 6 } > 

                        {props.comment}

                        </Text>
                    </View>
                    
                </View>
            </View>
        <View style = {styles.bodyProfileContainer}>
            <SnapShot/>
            <TouchableOpacity onPressOut ={ () => {
                props.parent.dialog.show()
            }} style={{flexDirection: 'column', alignItems : 'center', justifyContent : 'center', backgroundColor : "#rgba(253,139,27,1)", marginVertical : 0,}}>
                {props.bodyText.split('').map((char,index) => <Text key = {index} style = {{paddingHorizontal : 10, fontSize : 15, color : "white", fontWeight : "800",}}>{char}</Text>)}
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
        flex :1,
        backgroundColor : "white",
        alignItems : 'center',
    },
    profileImageContainer : {
        paddingTop : 20,
        paddingHorizontal :10,
        alignItems : 'center',
    },
    commentContainer : {
        marginHorizontal :10,
        marginTop : 20,
        backgroundColor : "#eeeeee",
        height : 300,
        width : 230,
        paddingHorizontal :10,
        paddingVertical :10,
        borderRadius : 20,
    },
    gymNameContainer : {
        marginTop : 20,
        width: 130,
        height : 50,
        backgroundColor: "rgba(253,139,27,0.5)",
        alignItems: 'center',
        justifyContent : 'center',
    },
    tUpdateBContainer : {
        marginTop : 20,
        width: 130,
        height : 50,
        backgroundColor: "rgba(253,139,27,0.5)",
        alignItems: 'center',
        justifyContent : 'center',
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
        color: "white",
    },
    textInput : {
        width : width,
        backgroundColor: "#dedede"
    },
    bodyProfileContainer : {
        flexDirection : 'row',
        flex :1,
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
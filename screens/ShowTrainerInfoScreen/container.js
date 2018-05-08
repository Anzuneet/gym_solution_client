
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './styles/index.style';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SnapShot from "../../components/SnapShot";
import BeforeAVGList from "../../components/BeforeAVGList";
const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    dialog = null;

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            comment : "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요", //가로 20자 세로로 8자
            bodyText : "VARIETY PICTURES",
        };
    }





    _setDialog = (dialog)=>this.dialog = dialog;
    render () {

        const trainer = this.props.navigation.state.params;
        console.log(trainer);
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                <PopupDialog
                  dialogTitle={<DialogTitle title="Trainer 경력" />}
                  ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                  dismissOnTouchOutside = {true}
                  height = {500}
                >
                <View style = {{height: 400}}>
                    <Text>{trainer.trainer.self_introduction_text}</Text>
                </View>
                <TouchableOpacity style = {{justifyContent:'center', alignItems : 'center', backgroundColor : 'black'}} onPressOut = { () => {
                    this.popupDialog.dismiss();
                }}>
                    <Text style = {{paddingVertical : 18, color : 'white'}}> 닫기 </Text>
                </TouchableOpacity>
                </PopupDialog>
                <View style = {{flexDirection:'row'}}>
            <View style = {styles.profileContainer}>
                <View style = {styles.profileImageContainer}
                >
                {trainer.profileImage ?
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
                    <View style = {styles.gymNameContainer}>
                        <Text style = {styles.tUpdateBText}>{trainer.trainer.name}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style = {styles.commentContainer}
                    onPress={() => {
                        this.popupDialog.show();
                    }}>
                        <Text style={styles.TextStyle} numberOfLines = { 6 } > 

                        {trainer.trainer.self_introduction_text}

                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
                <View style = {{backgroundColor : "white", flex: 1, justifyContent:'center', alignItems : 'center'}}>
                    <BeforeAVGList/>
                </View>

                <View style = {{flexDirection : "row", flex: 1.7,}}>
                    <SnapShot/>
                    <View style={{flexDirection: 'column', alignItems : 'center', justifyContent : 'center', backgroundColor : "#rgba(253,139,27,1)",}}>
                        {this.state.bodyText.split('').map(char => <Text key = {char} style = {{paddingHorizontal : 15, fontSize : 15, color : "white", fontWeight : "800"}}>{char}</Text>)}
                    </View>
                </View>
                

            </View>
            </SafeAreaView>
        );
    }
}

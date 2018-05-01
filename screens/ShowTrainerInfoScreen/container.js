
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './styles/index.style';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SnapShot from "../../components/SnapShot";

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {

    dialog = null;

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            comment : "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요", //가로 20자 세로로 8자
            bodyText : "BEFOR / AFTER",
        };
    }





    _setDialog = (dialog)=>this.dialog = dialog;
    render () {

        const trainer = this.props.navigation.state.params;
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
                    <Text>{trainer.comment}</Text>
                </View>
                <TouchableOpacity style = {{justifyContent:'center', alignItems : 'center', backgroundColor : 'yellow'}} onPressOut = { () => {
                    this.popupDialog.dismiss();
                }}>
                    <Text style = {{paddingVertical : 18}}> 닫기 </Text>
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
                        <Text style = {styles.tUpdateBText}>{trainer.name}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style = {styles.commentContainer}
                    onPress={() => {
                        this.popupDialog.show();
                    }}>
                        <Text style={styles.TextStyle} numberOfLines = { 6 } > 

                        {trainer.comment}

                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
                <View style = {{backgroundColor : "yellow", flex: 1, justifyContent:'center', alignItems : 'center'}}>
                    <Text style = {{fontSize : 30,}}>
                    여기에 리스트채울거임 트레이너 관리한 그룹들의 평균데이터
                    </Text>
                </View>

                <View style = {{flexDirection : "row",}}>
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

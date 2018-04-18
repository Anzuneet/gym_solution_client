
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './styles/index.style';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SnapShot from "../../components/SnapShot";

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {


    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            comment : "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요", //가로 20자 세로로 8자
            bodyText : "BODY PROFILE",
        };
    }




    _onClickShowDialog = ()=>{
      if(this.dialog != null){
        this.dialog.show();
      }
      
    }
    _setDialog = (dialog)=>this.dialog = dialog;
    render () {

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                <PopupDialog
                  dialogTitle={<DialogTitle title="Trainer 경력" />}
                  ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                  dismissOnTouchOutside = {true}
                  height = {300}
                >
                <Text>{this.state.comment}</Text>
                </PopupDialog>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <View style = {{flexDirection : "row"}}>
                    <SnapShot/>
                    <View style={{flexDirection: 'column', alignItems : 'center', justifyContent : 'center', backgroundColor : "#rgba(253,139,27,1)", marginVertical : 15,}}>
                        {this.state.bodyText.split('').map(char => <Text key = {char} style = {{paddingHorizontal : 15, fontSize : 15, color : "white", fontWeight : "800",}}>{char}</Text>)}
                    </View>
                    </View>


                </View>
            </SafeAreaView>
        );
    }
}
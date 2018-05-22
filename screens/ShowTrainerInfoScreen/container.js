
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity,Dimensions  } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './styles/index.style';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SnapShot from "../../components/SnapShot";
import BeforeAVGList from "../../components/BeforeAVGList";
const SLIDER_1_FIRST_ITEM = 1;

const { width, height } = Dimensions.get("window");
export default class example extends Component {

    dialog = null;

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            bodyText : "PICTURES",
            trainerImages : null,
        };
    }

    componentDidMount(){
        const {trainer} = this.props.navigation.state.params;
        this.props.getTrainerImages(trainer.uid,(json)=>{
          this.setState({trainerImages:json.images});
        });
      }
      _refresh = () => {
        const { getFeed } = this.props;
        this.setState({
          isFetching: true
        });
        getFeed();
      }; 




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
                {trainer.trainer.profileImage ?
                (<Image source={{uri:trainer.trainer.profileImage.uri} } style = {styles.avatar}/>)
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
                    {this.state.trainerImage ?
                        <SnapShot images = {this.state.trainerImage}/>
                        :
                        <View style = {{}}>
                            <Text style = {{textAlign : 'center', fontSize: 20}}>현재 이미지가 없네요. </Text>
                            <Image
                            source={require("../../assets/images/photoPlaceholder.png")}
                            style = {{width: width * 0.9, height: height *0.34, marginTop :20,}}
                            
                            />
                        </View>
                    }
                    <View style={{flexDirection: 'column', alignItems : 'center', justifyContent : 'center', backgroundColor : "#rgba(253,139,27,1)",}}>
                        {this.state.bodyText.split('').map(char => <Text key = {char} style = {{paddingHorizontal : 15, fontSize : 15, color : "white", fontWeight : "800"}}>{char}</Text>)}
                    </View>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

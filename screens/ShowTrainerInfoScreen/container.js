
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';

const SLIDER_1_FIRST_ITEM = 1;

export default class example extends Component {


    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        };
    }


    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }





    layoutExample (type) {
        const isTinder = type === 'tinder';
        return (
            <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>

                <Carousel
                  data={isTinder ? ENTRIES2 : ENTRIES1}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                />
            </View>
        );
    }



    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    } 
    _onClickShowDialog = ()=>{
      if(this.dialog != null){
        this.dialog.show();
      }
      
    }
    _setDialog = (dialog)=>this.dialog = dialog;
    render () {
        const example3 = this.layoutExample('stack');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                <PopupDialog
                  dialogTitle={<DialogTitle title="찾고자하는 training의 조건을 입력해주세요" />}
                  ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                  dismissOnTouchOutside = {true}
                  height = {300}
                >
                <Text>Hello</Text>
                </PopupDialog>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <View style = {styles.profileContainer}>
                      <View style = {styles.profileImageContainer}>
                      {this.props.profileImage ?
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
                      <TouchableOpacity style = {styles.commentContainer} onPress={() => {
                        this.popupDialog.show();
                      }}>

                      </TouchableOpacity>

                    </View>
                    { example3 }


                </View>
            </SafeAreaView>
        );
    }
}
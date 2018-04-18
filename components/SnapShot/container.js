
import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components';
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

        return <SliderEntry data={item} even={(index + 1) % 2 === 0}/>;
    }

   

    layoutExample (type, isTrainer) {
        const isTinder = type === 'tinder';
        return (
            <View style={[styles.exampleContainer,styles.exampleContainerLight]}>

                <Carousel
                  data={ENTRIES1}/////////////////////////////////////////////////data
                  //data = {this.props.bodyImages}
                  renderItem={this._renderItem}
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
              colors={["#rgba(230,230,230,0)", "#rgba(0,0,0,0.4)"]}//253,139,27
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
        const isTrainer = this.props.isTrainer;

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    { this.gradient }
                    <View style = {{flexDirection : "row"}}>
                    {this.layoutExample('stack',isTrainer)}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
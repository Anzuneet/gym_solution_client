import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity , Alert } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }


    async _deleteConfirm(name){
        console.log("in DeleteConfirm");
        const {deleteTrainerImages} = this.props;
        const tuid = this.props.tuid;
        if(name){
            const deleteResult = await deleteTrainerImages(tuid,name.split("/").pop());
            if(!deleteResult)
                console.log("삭제 실패");
            else
                console.log("삭제 성공");
        }
        



    }
    render () {
        //삭제는 팦업창을 띄우고 trainerProfileUpdateScreen에서 삭제할것.
        const { data: { title,illustration, subtitle }, even, tuid, isTrainer } = this.props;
        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            

            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { 
                isTrainer ?
                Alert.alert(
                '삭제 확인',
                '정말로 삭제 하실 건가요?',
                [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'YES', onPress: () => this._deleteConfirm(illustration)},
                  
                ],
                { cancelable: false }
              ) :
                (alert("가입하세요!"))   }}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
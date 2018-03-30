/*import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine, 
}from "victory-native";
import ProfileChart from "../../components/ProfileChart";
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get("window");

 const ShowTrainerInfoScreeen = props => (
  <ScrollView
    style = {styles.container}>
    <View style = {styles.persnalInfoContainer}>
      <View style = {styles.bodyProfileContainer}>
      <Carousel
              ref={(c) => { this._carousel = c; }}
              data={props.item}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
      </View>
    </View>
    <View style = {styles.commentInfoContainer}>
    </View>
    <View style = {styles.careerInfoContainer}>
    </View>
    <Text> {props.navigation.state.params.id}</Text>
  </ScrollView>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  persnalInfo : {
    flexDirection : 'row',
    paddingVertical : 5,
    paddingHorizontal : 5,
    backgroundColor : '#eebc00',
  },
  font : {
    fontSize : 30,
  }
});

ShowTrainerInfoScreeen.propTypes = {

};

export default ShowTrainerInfoScreeen;*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from 'example/src/styles/SliderEntry.style';

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

    render () {
        const { data: { title, subtitle }, even } = this.props;

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
              onPress={() => { alert(`You've clicked '${title}'`); }}
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
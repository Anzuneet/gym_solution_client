import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
const { width, height } = Dimensions.get("window");



 const ReviewsListItem = props => (
   <TouchableOpacity>
    <View style = {{flexDirection: 'row', marginLeft : 10, paddingVertical: 5, alignItems: 'center',}} onPress = {props.onPress}>
      <Image
          source={require("../../assets/images/icon-gym.png")}
          style ={{width: width/10, height: height/17,}}
      />
      <Text style = {{fontSize:20,  fontFamily: 'font-DoHyeon' ,fontWeight : "800", paddingLeft: width/35,}}> {props.data.traineeName} </Text> 
      <View style = {styles.comments}>
        <Text>{props.data.comments}</Text>
      </View>
    </View>
    <View style = {{ alignItems: 'flex-end', paddingRight : width/20}}>
    <Text style = {{position : 'absolute', left: 20,fontSize : 30,}}> 평점: </Text>
    <StarRating
        disabled={false}
        maxStars={5}
        rating={props.data.grade}
        //selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    </View>
    </TouchableOpacity>

  

);

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height:1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  comments:{

  },
});

export default ReviewsListItem;
import React from "react";
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
import ReviewsList from "../../components/ReviewsList"
const { width, height } = Dimensions.get("window");

 const ShowOneGroup = props => (
  <View style = {styles.container}>
    <TouchableOpacity style = {styles.button} onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
      <Text style = {styles.font}> go TrainerInfo </Text>
    </TouchableOpacity>
    <ReviewsList/>
  </View>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button : {
    paddingVertical : 20,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'pink',
  },
  font : {
    fontSize : 30,
  }
});

ShowOneGroup.propTypes = {

};

export default ShowOneGroup;
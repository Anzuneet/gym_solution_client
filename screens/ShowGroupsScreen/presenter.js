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
const { width, height } = Dimensions.get("window");

 const ShowGroupsScreen = props => (
  <ScrollView
    style = {styles.container}>
    <TouchableOpacity style = {styles.button} onPressOut = {()=> props.navigate('showOneGroup')}>
      <Text style = {styles.font}> go showOneGroup </Text>
    </TouchableOpacity>
  </ScrollView>
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

ShowGroupsScreen.propTypes = {

};

export default ShowGroupsScreen;
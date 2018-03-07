import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");



 const GroupsItem = props => (
  <TouchableOpacity>
    <View style = {styles.Container}>
      <View style = {styles.profileContainer}>
        <Image/>
      </View>
      <View style = {styles.titleContainer}>
      </View>
      <View style = {styles.detailContainer}>
      </View>
    </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
  },
  profileContainer :{
back
  },
  titleContainer : {
back
  },
  detailContainer : {
    back
  },

});

export default GroupsItem;
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
import MemberList from "../../components/MemberList"
const { width, height } = Dimensions.get("window");

 const ShowMembersScreen = props => (
  <View style = {styles.container}>
   <MemberList navigate = {props.navigation.navigate}/>
  </View>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default ShowMembersScreen;
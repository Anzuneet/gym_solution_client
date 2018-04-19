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
import ProfileChart from "../../components/ProfileChart";
import DateTimePicker from 'react-native-modal-datetime-picker';

const { width, height } = Dimensions.get("window");


 const RecordMemberScreen = props => (
  <View style = {styles.container}>
   <View style = {styles.graphContainer}>
      <View style = {styles.grapheTitleContainer}>
        <TouchableOpacity style = {props.chartIndex == 1 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
        onPressOut ={props.clickWeight}>
          <Text  style = {props.chartIndex == 1 ? styles.clickedText : styles.unClickedText}> 
          Weight </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {props.chartIndex == 2 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
        onPressOut ={props.clickMuscle}>
        <Text  style = {props.chartIndex == 2 ? styles.clickedText : styles.unClickedText}>  
          Muscle </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {props.chartIndex == 3 ? styles.clickedTextContainer : styles.unClickedTextContainer}
        onPressOut ={props.clickFat}>
          <Text  style = {props.chartIndex == 3 ? styles.clickedText : styles.unClickedText}> 
          Fat </Text>
        </TouchableOpacity>
      </View>
      <ProfileChart
        data = {props.chartIndex == 1 ?
          (
            props.Weight
          ):
          (
            props.chartIndex == 2 ? props.Muscle : props.Fat
          )
        }
        name = {props.chartIndex == 1 ?
          (
            "Weight"
          ):
          (
            props.chartIndex == 2 ? "Muscle" : "Fat"
          )
        }
      />
    </View>
    <View>
    <DateTimePicker
          isVisible={true}
          onConfirm={props.changeStartDate}
          onCancel={props.hideStartTimePicker}
          mode = {'date'}
          
        />
    </View>
  </View>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer : {
    alignItems : "center",
    
  }, grapheTitleContainer : {
    flexDirection : 'row',
    width : width,
    height : 50,
    borderRadius : 20,
  },
  clickedTextContainer : {
    flex:1,
    backgroundColor : "#ffbb00",
    justifyContent : 'center',
    alignItems : 'center',
  },
  unClickedTextContainer : {
    flex:1,
    backgroundColor : "#ffffff",
    justifyContent : 'center',
    alignItems : 'center',
  },
  clickedText : {
    color : "#ffffff",
    fontSize : 20,
  },
  unClickedText : {
    color : "#ffbb00",
    fontSize : 20,
  },
});


export default RecordMemberScreen;
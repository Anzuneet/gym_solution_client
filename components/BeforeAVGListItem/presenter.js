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
const { width, height } = Dimensions.get("window");



 const BeforeAVGListItem = props => (
   <TouchableOpacity style = {{width: width, height: height/14, backgroundColor: "white",flexDirection:'row'}}>
    <Text style ={{ position:'absolute', left: width/40, top:3, zIndex: 999, fontWeight: "800"}}>
    {props.data.trainingName}
    </Text>
    <Text style ={{ position:'absolute', left: width/31, bottom: 3, zIndex: 999, fontWeight: "800"}}> 변화량 ⇒ </Text>
    
    <View style = {{backgroundColor : "skyblue", width : width * 0.2,height:'100%', marginBottom :3}}>
      
    </View>
    <View style = {{marginLeft: width/90, backgroundColor : "skyblue", width : width * 0.5,height:'100%', marginBottom :3}}>
      <View style = {{flexDirection:'row', height: "50%"}}>
        <View style = {styles.upperCellContainer}><Text style = {styles.cellNameText}>Fat</Text></View>
        <View style = {styles.upperCellContainer}><Text style = {styles.cellNameText}>Muscle</Text></View>
        <View style = {styles.upperCellContainer}><Text style = {styles.cellNameText}>Weight</Text></View>
      </View>

      <View style = {{flexDirection:'row', height: "50%"}}>
      <View style = {styles.lowerCellContainer}><Text style = {styles.dataText}>{props.data.dataDifference.fat}</Text></View>
      <View style = {styles.lowerCellContainer}><Text style = {styles.dataText}>{props.data.dataDifference.muscle}</Text></View>
      <View style = {styles.lowerCellContainer}><Text style = {styles.dataText}>{props.data.dataDifference.weight}</Text></View>
      </View>
    </View>

    <View style = {{marginLeft: width/90, backgroundColor : "skyblue", width : width * 0.27,height:'100%', justifyContent : 'center', alignItems : 'center'}}>
    <Text style = {{fontSize : 23, fontFamily : 'font-DoHyeon', fontWeight: "800"}}>기간  :  {props.data.trainingPeriod}</Text>
    
    </View>
  </TouchableOpacity>

  

);

const styles = StyleSheet.create({
  upperCellContainer :{
    backgroundColor: '#ffbb00',
    flex: 1,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  lowerCellContainer:{
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 3,
  },
  cellNameText : {
    fontFamily: 'font-DoHyeon',
    fontSize: 15,
    fontWeight: "800",
  },
  dataText : {
    fontFamily: 'font-DoHyeon',
    fontSize: 15,
    fontWeight: "800",
  },


});

export default BeforeAVGListItem;
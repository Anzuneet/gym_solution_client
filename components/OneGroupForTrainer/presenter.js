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

const { width, height } = Dimensions.get("window");



 const OneGroupForTrainer = props => (
  <TouchableOpacity onPress = {props.onPress}>
    <View style = {styles.Container}>
      <View style = {styles.upperContainer}>

        <Text style = {{paddingLeft: 10}}>[</Text>
            {props.data.daysOfWeek.map((st,index) => <Text key = {index} style = {{paddingHorizontal : 15, fontSize : 15, color : "Black", fontWeight : "800",}}>{st}</Text>)}
        <Text style = {{paddingRight: 10}}>]</Text>
        <Text style = {{ position: 'absolute', right : 10}}> {props.data.time} </Text>
      </View>
      <View style ={styles.downContainer}>
        <View style = {styles.titleContainer}>
          <Text style = {styles.commentText}>
              {props.data.comment}
          </Text>
        </View>
        <View style = {styles.detailContainer}>
            <Text style ={styles.capacityText}>
            정원 : {props.data.capacity}
            </Text>
            <Text style ={styles.costText}>
            비용 : {props.data.charge}
            </Text>
        </View>
      </View>
      
    </View>
    <View style = {{  width : width,
                      height : 20,
                      backgroundColor : "#eeeeee",
                      flexDirection : 'row',
                      justifyContent : "space-between"}}>
    <Text style = {{color : "black", paddingLeft : 5,}}> {props.startDate} </Text>
    <Text style = {{color: "black"}}> {props.percent}%</Text>
    <Text style = {{color: "black", paddingRight : 5,}}> {props.endDate}</Text>
    <View style = {{
      width : props.percent/100*width,
      backgroundColor: "#rgba(255,167,0,0.5)",
      height : 20,
      alignItems : "center",
      position : 'absolute',
    }}>
    
    </View>
    </View>
    
    
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    height: 100,
    
    backgroundColor : "#eeeeee",
  },
  upperContainer :{
    flexDirection : 'row',
    //position: 'absolute',
    backgroundColor : "red",
  },
  downContainer : {
    flexDirection : 'row',
    backgroundColor : 'pink',
  },
  titleContainer : {
    flex:1,
    borderWidth : 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor : "#eeeeee"
  },
  detailContainer : {
    flex:0.8,
    paddingTop : 3,
    alignItems : 'flex-end',
    backgroundColor : "#eeeeee"
  },
  trainernameContainer :{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical : 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  trainernameText : {
    fontSize : 10,
    fontWeight:'500',
  },
  titleText :{
    paddingTop :20,
    paddingBottom : 10,
    paddingLeft : 8,

    fontSize :20,
    fontWeight : "500",
  },
  commentText : {
    paddingLeft : 13,
  },
  dateText : {
    fontSize : 9,
    fontWeight : "500",
    paddingRight: 10,
    paddingBottom : 10,
  },
  capacityText : {
    fontSize : 20,
    paddingRight: 20,
    paddingVertical : 10,
  },
  costText : {
    fontSize : 15,
    paddingTop : 7,
    paddingRight : 10,
  },

});

export default OneGroupForTrainer;
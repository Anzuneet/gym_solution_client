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
            {props.data.daysOfWeek.map((st,index) => <Text key = {index} style = {{paddingHorizontal : 10, fontSize : 15, color : "black", fontWeight : "800",}}>{st}</Text>)}
        <Text style = {{paddingRight: 10}}>]</Text>
        <Text style = {{ position: 'absolute', right : 10, fontSize : 17,}}> {props.data.time} 시작 </Text>
      </View>
      <View style ={styles.downContainer}>
        <View style = {styles.titleContainer}>
          <View style = {{flex : 0.7, alignItems : 'center', justifyContent :'center'}}>
          <Text style = {styles.titleText} numberOfLines = {3}>
              {props.data.title}
          </Text>
          </View>
          <View style = {{flex : 1, marginHorizontal : 10,marginVertical : 5,backgroundColor : "white", borderRadius : 10,}}>
            <Text style = {styles.commentText} numberOfLines = {4}>
              {props.data.comment}
            </Text>
          </View>
        </View>
        <View>
          <View style = {styles.detailContainer}>
              <Text style ={styles.capacityText}>
              정원 : {props.data.capacity}
              </Text>        
              <Text style ={styles.costText}>
              비용 : {props.data.charge}
              </Text>
          </View>
          <Text style = {{textAlign : 'center', paddingTop : 7, fontSize : 20,}}> GYM : <Text style = {{fontSize: 22, fontWeight : "500"}}> {props.data.gym.name}</Text></Text>
        </View>
      </View>
      
    </View>
    <View style = {{  width : width,
                      height : 20,
                      backgroundColor : "#eeeeee",
                      flexDirection : 'row',
                      justifyContent : "space-between"}}>
    <Text style = {{color : "black", paddingLeft : 5,}}> {props.startDate} </Text>
    {props.percent <= 0 ?
    <Text style = {{color: "black"}}> NOT OPENED </Text> :
      (props.percent >= 100 ? 
        <Text style = {{color: "black"}}> 종료됨 </Text> :
        <Text style = {{color: "black"}}> {props.percent}%</Text>
      )
    }
    <Text style = {{color: "black", paddingRight : 5,}}> {props.endDate}</Text>
    <View style = {{
      width : props.percent/100*width,
      backgroundColor: "#rgba(255,167,0,0.7)",
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
    height : 25,
    alignItems : 'center',
    backgroundColor : "#rgba(255,167,0,0.7)",
  },
  downContainer : {
    flexDirection : 'row',
    backgroundColor : 'pink',
  },
  titleContainer : {
    flex : 1,
    flexDirection : 'row',
    borderWidth : 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor : "#eeeeee"
  },
  detailContainer : {
    backgroundColor : "#eeeeee",
    flexDirection : 'row',
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
    fontSize :20,
    fontWeight : "800",
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
    paddingTop : 10,
    fontSize : 20,
  },
  costText : {
    paddingTop : 10,
    paddingLeft : 10,
    fontSize : 20,
  },

});

export default OneGroupForTrainer;
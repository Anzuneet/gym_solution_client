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



 const OneGroupForTrainee = props => (
  <TouchableOpacity onPress = {props.onPress}>
    <View style = {styles.Container}>
      <View style = {styles.profileContainer}>

        <Image
            source={
              require("../../assets/images/noPhoto.jpg")
            }
            style={styles.avatar}
            //defaultSource={require("../../assets/images/noPhoto.jpg")}
        />
        <View style ={styles.trainernameContainer}>
          <Text style = {styles.trainernameText}>
              {props.data.opener.name}
          </Text>
        </View>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>
            {props.data.title}
        </Text>
        {props.data.comment ?
        <Text style = {styles.commentText}>
            {props.data.comment}
        </Text> :
        <Text style = {styles.commentText} numberOfLines = {3}>
            등록된 코멘트가 없네요.. ㅎㅎ
        </Text> }
      </View>
      <View style = {styles.detailContainer}>
        <View style = {{flexDirection : 'row', backgroundColor : "#rgba(255,150,2,0.5)", height : 20,justifyContent : 'center',alignItems : 'center'}}>
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>[</Text>
          {props.data.daysOfWeek.map((st,index) => <Text key = {index} style = {{paddingHorizontal : 5, fontSize : 8, color : "black", fontWeight : "800",}}>{st}</Text>)}
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>]</Text>
        </View>  
      <View> 
          <Text style ={styles.capacityText}>
          현재 : {props.data.user_count} / {props.data.capacity}
          </Text>
          <Text style ={styles.costText}>
          비용 : {props.data.charge}
          </Text>
          </View>
      </View>
    </View>
    <View style = {{  width : width,
                        height : 30,
                        backgroundColor : "#eeeeee",
                        justifyContent : "center",
                        alignItems : "flex-end"}}>
      <Text style = {{color : "black", fontWeight: "500", fontSize: 20, paddingRight : 5, paddingVertical : 5,}}> 오픈 예정일 : {props.data.start_date} </Text>
      
    </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection : 'row'
  },
  profileContainer :{
    flex:0.45,
    alignItems : 'center',
    paddingVertical : 5,
  },
  titleContainer : {
    flex:0.95,
    borderWidth : 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  detailContainer : {
    flex:0.8,
  },
  trainernameContainer :{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical : 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  }, 
  trainernameText : {
    paddingTop : 6,
    fontSize : 15,
    fontWeight:'500',
  },
  titleText :{
    paddingVertical : 10,
    paddingLeft : 8,

    fontSize :20,
    fontWeight : "500",
  },
  commentText : {
    paddingHorizontal : 10,
  },
  dateText : {
    fontSize : 9,
    fontWeight : "500",
    paddingRight: 10,
    paddingBottom : 10,
  },
  capacityText : {
    fontSize : 20,
    paddingLeft: 10,
    paddingVertical : 10,
  },
  costText : {
    fontSize : 15,
    paddingLeft: 10,
  },

});

export default OneGroupForTrainee;
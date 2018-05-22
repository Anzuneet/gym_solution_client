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



 const MemberListItem = props => (
  <TouchableOpacity style = {styles.Container} onPress = {props.onPress}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>
            {props.data.name} 회원님
        </Text>
      </View>
      <View style = {styles.detailContainer}>
        <View style = {styles.tableContainer}>
          <View style = {styles.upperRow}>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 몸무게 </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 근육량 </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> 지방 </Text>
            </View>
          </View>
          <View style = {styles.lowerRow}>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> {props.RD.Weight} </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> {props.RD.Muscle} </Text>
            </View>
            <View style = {styles.column}>
              <Text style = {styles.tableAttribute}> {props.RD.Fat} </Text>
            </View>
          </View>
        </View>
        <View style = {styles.commentContainer}>
        {props.RD.comment ?
        <Text style = {styles.commentText} numberOfLines = {3}>
        {props.RD.comment}
        </Text> :
        <Text style = {styles.commentText} numberOfLines = {3}>
        최근에 등록된 comment가 없어요... 새로운 코멘트를 등록해주세요!
        </Text>
        }
        </View>
      </View>
  </TouchableOpacity>
  

);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    height: 100,
    backgroundColor : "white",
    flexDirection : 'row'
  },
  profileContainer :{
    flex:0.6,
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 5,
  },
  titleContainer : {
    marginVertical : 5,
    marginLeft : 10,
    justifyContent : 'center',
    alignItems :'center',
    flex:1,
    borderRadius : 20,
    backgroundColor : "#rgba(255,167,0,0.5)",
  },
  detailContainer : {
    flex:1.2,

    backgroundColor : "white"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  titleText :{
    fontSize :25,
    fontFamily: 'font-DoHyeon'
  },
  tableContainer  : {
    flex :1,
    marginVertical : 5,
    marginHorizontal : 7,
  },
  commentContainer : {
    flex : 1,
    marginVertical : 3,
    marginHorizontal : 4,
    borderRadius : 5,
    backgroundColor : "#rgba(0,0,0,0.05)"
  },
  upperRow  : {
    flex: 1,
    flexDirection : 'row',
    borderRadius : 5,
    backgroundColor : "#rgba(255,10,10,0.5)"
  },
  lowerRow  : {
    flex : 1.2,
    flexDirection : 'row',
    borderRadius : 5,
    backgroundColor : '#rgba(0,0,0,0.2)',
  },
  column  : {
    flex : 1,
    backgroundColor : 'transparent',
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : "white",
    borderWidth : StyleSheet.hairlineWidth,
  },
  tableAttribute : {
    fontSize : 11,
    fontFamily: 'font-DoHyeon'
  },
  commentText : {
    paddingVertical : 2,
    paddingHorizontal : 5,
    fontSize : 10,
    fontFamily: 'font-DoHyeon'
  }




});

export default MemberListItem;
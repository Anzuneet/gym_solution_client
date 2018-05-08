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
  FlatList
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
import { List } from "react-native-elements";
import OneGroupForTrainee from "../../components/OneGroupForTrainee";

 const ShowOneGroup = props => (
  <ScrollView 
    style = {styles.ScrollViewContainer}>
 
    <TouchableOpacity style = {styles.touchableContainerr} onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
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
              {props.group.opener.name}
          </Text>
        </View>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>
            {props.group.title}
        </Text>
        
      </View>
      <View style = {styles.detailContainer}>
        <View style = {{flexDirection : 'row', backgroundColor : "#rgba(255,150,2,0.5)", height : 20,justifyContent : 'center',alignItems : 'center'}}>
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>[</Text>
          {props.group.daysOfWeek.map((st,index) => <Text key = {index} style = {{paddingHorizontal : 5, fontSize : 8, color : "black", fontWeight : "800",}}>{st}</Text>)}
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>]</Text>
        </View>  
      <View> 
          <Text style ={styles.capacityText}>
          현재 : {props.group.user_count}/{props.group.capacity}명
          </Text>
          <Text style ={styles.costText}>
          가격 : {props.group.charge}원
          </Text>
          <Text style ={styles.costText}>
          시작시간 : {props.group.time}
          </Text>
          </View>
      </View>
    </View>
    
  </TouchableOpacity>

  <View style = {styles.comment}>
      {props.group.comment ?
      <Text style = {styles.commentText}>
          {props.group.comment}
      </Text> :
      <Text style = {styles.commentText} numberOfLines = {3}>
          등록된 코멘트가 없네요.. ㅎㅎ
      </Text> }
    </View>

    <View style = {styles.openContainer}>
      <Text style = {{color : "black", fontSize: 20, fontFamily: 'font-DoHyeon', marginTop : 20,}}> 오픈 예정일 : {props.group.start_date} </Text>
    </View>
  
    <View style = {styles.ReviewsListContainer}>
    <ReviewsList/>
  </View>

  <View style = {styles.touchableContainer}>
    <TouchableOpacity style = {styles.touchable}>
      <View style={styles.button}>
          {props.isSubmitting ? 
          (<ActivityIndicator size = "large" color="white"/>)
          :
          (<Text style ={styles.btnText}>취소</Text>)
          }
      </View>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.touchable}>
      <View style={styles.button}>
          {props.isSubmitting ? 
          (<ActivityIndicator size = "large" color="white"/>)
          :
          (<Text style ={styles.btnText}>신청하기</Text>)
          }
      </View>
    </TouchableOpacity>
  </View>
  
  </ScrollView>
);
 
const styles = StyleSheet.create({
  button : {
    paddingVertical : 20,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
  },
  font : {
    fontSize : 30,
  },
  Container:{
    flex:1,
    flexDirection : 'row',
    backgroundColor : 'white',

  },
  touchableContainerr : {
    height: height * 0.15,
  },
  touchableContainer:{
    flexDirection : 'row',
    //height : height/10,
    flex: 10,
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
  openContainer :{
      
      flex: 1,
      //height : height/70,
      //backgroundColor : "#eeeeee",
      justifyContent : "center",
      alignItems : "flex-end",
      backgroundColor : 'white',
      paddingBottom : 25,
  },
  ReviewsListContainer :{
    //height : height/2.85,
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  }, 
  trainernameText : {
    paddingTop : 6,
    fontSize : 15,
    //fontWeight:'500',
    fontFamily: 'font-DoHyeon',
  },
  titleText :{
    paddingVertical : 10,
    paddingLeft : 8,
    fontFamily: 'font-DoHyeon',
    fontSize :20,
    //fontWeight : "500",
  },
  commentText : {
    paddingHorizontal : 10,
    paddingTop :5,
    fontSize : 17,
    fontFamily: 'font-DoHyeon',
  },
  dateText : {
    fontSize : 9,
    fontWeight : "500",
    paddingRight: 10,
    paddingBottom : 10,
  },
  capacityText : {
    fontSize : 17,
    paddingLeft: 10,
    paddingVertical : 10,
    fontFamily: 'font-DoHyeon',
  },
  costText : {
    fontSize : 17,
    paddingLeft: 10,
    fontFamily: 'font-DoHyeon',
  },
  button:{
    //height : 60,
    backgroundColor :'#FFBB00',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 14,
  },
  btnText:{
      fontSize : 40,
      color : 'rgba(255,255,255,1)',
      fontFamily: 'font-DoHyeon',
      marginBottom : 7,
  },
  touchable:{
    //borderRadius:3,
    backgroundColor:"#FFBB00",
    width:width/2,
    //width: width
    borderWidth : StyleSheet.hairlineWidth,
    borderColor : "black",
  },
  comment:{

    height : height * 0.4,
    borderWidth : StyleSheet.hairlineWidth,
    borderColor : "black",
    backgroundColor : 'white',
  },
  ScrollViewContainer:{
    flex : 1,
  },
});

ShowOneGroup.propTypes = {

};

export default ShowOneGroup;
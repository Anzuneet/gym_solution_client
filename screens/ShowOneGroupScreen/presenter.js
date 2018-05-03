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
    style = {styles.containerr}>
 
    <TouchableOpacity onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
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

    <View style = {styles.comment}>
      {props.group.comment ?
      <Text style = {styles.commentText}>
          {props.group.comment}
      </Text> :
      <Text style = {styles.commentText} numberOfLines = {3}>
          등록된 코멘트가 없네요.. ㅎㅎ
      </Text> }
    </View>

    <View style = {{  width : width,
                        height : 30,
                        backgroundColor : "#eeeeee",
                        justifyContent : "center",
                        alignItems : "flex-end"}}>
      <Text style = {{color : "black", fontWeight: "500", fontSize: 20, paddingRight : 5, paddingVertical : 5,}}> 오픈 예정일 : {props.group.start_date} </Text>
      
    </View>
  </TouchableOpacity>

  <ReviewsList/>
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
          (<Text style ={styles.btnText}>확인</Text>)
          }
      </View>
    </TouchableOpacity>
  </View>
  
  </ScrollView>
);
 
const styles = StyleSheet.create({
  containerr: {
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
  },
  Container:{
    flex:1,
    height: 100,
    flexDirection : 'row'
  },
  touchableContainer:{
    flexDirection : 'row',
    
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
    flex : 1,
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
    height:height/4.95
  },
});

ShowOneGroup.propTypes = {

};

export default ShowOneGroup;
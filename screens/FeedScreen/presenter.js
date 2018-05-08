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
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine, 
}from "victory-native";
import ProfileChart from "../../components/ProfileChart";
import Photo from "../../components/Photo"

const { width, height } = Dimensions.get("window");

 const FeedScreen = props => (
  <ScrollView
    style = {styles.container}
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
    //contentContainerStyle={styles.container} 
  >
    <View style={styles.profileContainer}>
      <View style = {styles.personContainer}>
          <View style = {styles.nameContainer}>
            <Text style ={styles.nameText}> {props.profile.name}님 환영합니다! </Text>
          </View>
      </View>
    </View>
    <View style = {{}}>
    <Text style = {{paddingVertical: 10, fontSize: 20, fontFamily: 'font-DoHyeon'}}> 트레이너의 최신 덧글! </Text>
    </View>
    <View style = {styles.commentsContainer}>
      {props.newComment ?
      (<Text style = {styles.commentText}>
      {props.newCommnet}</Text>
      ):
      <Text style = {styles.commentText}>
      처음보다 많이 좋아지셨어요!
      
      </Text>}
    </View>
    <View style = {styles.graphContainer}>
          <View style = {styles.grapheTitleContainer}>
            <TouchableOpacity style = {props.chartIndex == 1 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickWeight}>
              <Text  style = {props.chartIndex == 1 ? styles.clickedText : styles.unClickedText}> 
              몸무게 </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.chartIndex == 2 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickMuscle}>
            <Text  style = {props.chartIndex == 2 ? styles.clickedText : styles.unClickedText}>  
              근육량 </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.chartIndex == 3 ? styles.clickedTextContainer : styles.unClickedTextContainer}
            onPressOut ={props.clickFat}>
              <Text  style = {props.chartIndex == 3 ? styles.clickedText : styles.unClickedText}> 
              지방 </Text>
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
                "몸무게"
              ):
              (
                props.chartIndex == 2 ? "근육량" : "지방"
              )
            }
          />
    </View>
            
    
    <View style = {styles.bodyPictureContainer}>
      {props.list && 
      props.list.map((photo,index) => <Photo {...photo} key={index}/>)}
    </View>

  </ScrollView>
);
/* 
{props.feed &&
  props.feed.map((photo,index) => <Photo {...photo} key={index} />)}*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#rgba(255,176,0,0.6)'
  },
  profileContainer : {
    height : 60,
    flexDirection : 'row',
    backgroundColor : '#eeeeee',
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom : 6,
  },
  commentsContainer : {
    flexDirection : 'row',
    backgroundColor : "#eeeeee",
    backgroundColor : '#rgba(255,255,255,0.5)',
    marginBottom : 6,
    marginHorizontal : 6,
    borderRadius : 10,
  },
  graphContainer : {
    alignItems : "center",
    
  }, 
  bodyPictureContainer:{
    
  },
  avatarContainer : {
    width: 120,
    height : 150,
    justifyContent: 'center',
    alignItems: 'center',

  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  personContainer :{
    flex: 1,
    marginHorizontal : 10,
    marginVertical : 10,
  },
  nameContainer :{
    flex : 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  nameText :{
    fontSize: 35,
    fontFamily: 'font-DoHyeon',
  },
  commentText : {
    paddingLeft : 20,
    paddingVertical : 10,
    fontSize :20,
    fontFamily: 'font-DoHyeon',
  },
  recordContainer :{
    flex:2,
    flexDirection : 'row',
    //justifyContent : 'space-between',
    paddingHorizontal : 20,
    paddingTop : 10,
    borderRadius: 20,
    backgroundColor : '#rgba(255,255,255,0.5)',
  },
  weightNameText :{
    fontSize : 20,
  },
  grapheTitleContainer : {
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
    fontFamily: 'font-DoHyeon',
  },
  unClickedText : {
    color : "#ffbb00",
    fontSize : 20,
    fontFamily: 'font-DoHyeon',
  },
  trainingRecordContainer : {
    alignItems : 'center',
    flex : 1,
  },
  newRecordContainer : {
    alignItems : 'center',
    flex : 1,
  },
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired
};

export default FeedScreen;
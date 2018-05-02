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
const { width, height } = Dimensions.get("window");

 const TraineeOneGroupsScreen = props => (
  <ScrollView style = {styles.container}>
    <View style = {styles.headerContainer}>
      <Text> {props.group.title}</Text>
    </View>
    <TouchableOpacity onPress = {props.onPress} style = {styles.trainerContainer}>
        <View style = {styles.profileContainer}>
          {props.group.trainer.profileImage ?
          <Text>ProfileImage</Text>
          :
          <Image
              source={
                require("../../assets/images/noPhoto.jpg")
              }
              style={styles.avatar}
          />
          }
        </View>
        <View style = {styles.titleContainer}>
          <Text style = {styles.titleText}>
              {props.group.trainer.name}
          </Text>
          <Text style = {styles.commentText}>
              "안녕하세요"
          </Text>
        </View>
        <View style = {styles.detailContainer}>
          <View style = {styles.textContainer}>
            <Text style ={styles.capacityText}>
            자세히 보기
            </Text>
            </View>
        </View>
    </TouchableOpacity>
    <View style = {styles.beforeAfterContainer}>
      <View style = {{flexDirection : 'row'}}>
        <View style = {{backgroundColor: 'red',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text>BEFORE</Text>
          {props.group.trainer.profileImage ?  
        (<Image source={{uri:props.image.uri} } style = {{width: width/2, height: height*0.4}}/>)
        :( 
        <Image
          source={require("../../assets/images/photoPlaceholder.png")}
          style = {{width: width/2, height: height *0.4}}
        />
      )}  
        </View>
        <View style = {{backgroundColor: 'yellow',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text>AFTER</Text>
          {props.group.trainer.profileImage ?  
        (<Image source={{uri:props.image.uri} } style = {{width: width/2, height: height*0.4}}/>)
        :( 
        <Image
          source={require("../../assets/images/photoPlaceholder.png")}
          style = {{width: width/2, height: height *0.4}}
        />
      )}  
        </View>
      </View>
      
    </View>
    <View style = {styles.calenderContainer}>
    </View>
    <View style = {styles.reviewContainer}>
    </View>
    <TouchableOpacity style = {styles.button} onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
      <Text style = {styles.font}>  </Text>
    </TouchableOpacity>
  </ScrollView>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: 3,
    
  },
  trainerContainer: {
    flex:1,
    height: 100,
    backgroundColor : "white",
    flexDirection : 'row',
    marginVertical: 3,
  },
  beforeAfterContainer: {
    flex: 1,
    height: 500,
    backgroundColor: "skyblue",
    marginVertical: 3,
  },
  calenderContainer: {
    flex: 1,
  },
  reviewContainer: {
    flex: 1,
  },
  profileContainer :{
    flex:0.6,
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 5,
  },
  titleContainer : {
    flex:1,
    borderRadius : 20,
    backgroundColor : "#rgba(255,167,0,0.5)",
    marginVertical : 7,
  },
  detailContainer : {
    flex:1.2,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : "white"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  titleText :{
    paddingTop :10,
    paddingBottom : 3,
    paddingLeft : 8,

    fontSize :30,
    fontWeight : "500",
  },
  commentText : {
    fontSize : 10,
    paddingLeft : 15,
  },
  textContainer : {
    backgroundColor : "#fd8b1b",
    width : 160,
    borderRadius :10,
  },
  capacityText : {
    fontSize : 30,
    fontWeight : "500",
    paddingLeft : 8,
    color : "white",
  },
  costText : {
    fontSize : 15,
    paddingTop : 7,
    paddingRight : 10,
  },
});


export default TraineeOneGroupsScreen;
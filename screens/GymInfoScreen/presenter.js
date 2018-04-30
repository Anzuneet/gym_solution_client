// 어떻게 만들지...

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
import TrainerList from "../../components/TrainerList";
const { width, height } = Dimensions.get("window");

 const GymInfoScreen = props => (
  <View
    style = {styles.container}>
    <View style = {styles.headerContainer}>
        <Text style = {styles.titleText}>
          {props.gymInfo.name}
        </Text>
      <TouchableOpacity style = {styles.button} onPressOut = {()=> props.navigate('showGroups' ,{ groups : props.groups})}>
        <Text style = {styles.font}> Groups </Text>
      </TouchableOpacity>
    </View>
    <View style = {styles.imageContainer}>
      {props.image ?  
        (<Image source={{uri:props.image.uri} } style = {{width: width, height: height*0.3}}/>)
        :( 
        <Image
          source={require("../../assets/images/photoPlaceholder.png")}
          style = {{width: width, height: height *0.3}}
        />
      )}  
    </View>
  
          <View style = {styles.TitleContainer}>
            <TouchableOpacity style = {props.GymInfoIndex == 1 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickIntroduction}>
              <Text  style = {props.GymInfoIndex == 1 ? styles.clickedText : styles.unClickedText}> 
              소개 </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.GymInfoIndex == 2 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickTrainer}>
            <Text  style = {props.GymInfoIndex == 2 ? styles.clickedText : styles.unClickedText}>  
              트레이너 </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.GymInfoIndex == 3 ? styles.clickedTextContainer : styles.unClickedTextContainer}
            onPressOut ={props.clickReview}>
              <Text  style = {props.GymInfoIndex == 3 ? styles.clickedText : styles.unClickedText}> 
              리뷰 </Text>
            </TouchableOpacity>
          </View>

           {props.GymInfoIndex == 2 ?
          (<View style = {styles.trainerListContainer}>
            <TrainerList
            trainers = {props.trainers}
            navigate = {props.navigate}/>
          </View>)
          :
            (props.GymInfoIndex == 1 ?
            <View>
              <Text>{props.gymInfo.address}</Text>
            </View>
          :
          <View>
            <Text>리뷰 </Text>
          </View>
        
          )
          }
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer : {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 10,
    backgroundColor : "pink",
  },
  headerContainer : {
    width: width,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: "skyblue",
    paddingVertical : 10,
  
  },
  imageContainer : {
  },
  
  commentContainer : {
    paddingTop : 6,
    paddingLeft : 10,
    height : 100,
    backgroundColor : "#eeeeee",
  },
  trainerListContainer : {
    height : 250,
  },
  titleText : {
    fontSize : 21,
    fontWeight: "800"
  },
  commentText : {
    fontSize : 10,
  },
  button : {
    position: 'absolute',
    right : 5,
  },
  font : {
    fontSize : 20,
    color : "white",
  },


  TitleContainer : {
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
  }
});

GymInfoScreen.propTypes = {

};

export default GymInfoScreen;



/*

  <View style = {styles.commentContainer}>
      <Text style = {styles.commentText}>
      {props.
    </View>GYMComment}
      </Text>
    <View style = {styles.trainerListContainer}>
      <TrainerList
      Trainer_Id_List = {props.GYMsTrainer}
      navigate = {props.navigate}/>
    </View>


*/
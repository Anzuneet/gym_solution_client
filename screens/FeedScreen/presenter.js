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
      <TouchableOpacity style = {styles.avatarContainer}>
        <Image
          source={
            /*props.profileObject.profile_image
              ? {
                  uri: props.profileObject.profile_image
                }
              :*/ 
            require("../../assets/images/noPhoto.jpg")
          }
          style={styles.avatar}
          //defaultSource={require("../../assets/images/noPhoto.jpg")}
        />
      </TouchableOpacity>
      <View style = {styles.personContainer}>
          <View style = {styles.nameContainer}>
            <Text style ={styles.nameText}> 박종휘 </Text>
          </View>
          <View style ={styles.weightContainer}>
            <Text style ={styles.weightNameText}>
            시작
            </Text>
            <Text style ={styles.weightNameText}>
            현재
            </Text>
            <Text style ={styles.weightNameText}>
            목표
            </Text>
          </View>
    </View>
    </View>
    <View style = {styles.graphContainer}>
          <View style = {styles.grapheTitleContainer}>
            <TouchableOpacity style = {props.chartIndex == 1 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickWeight}>
              <Text  style = {props.chartIndex == 1 ? styles.clickedText : styles.unClickedText}> 
              Weight </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.chartIndex == 2 ? styles.clickedTextContainer : styles.unClickedTextContainer} 
            onPressOut ={props.clickMuscle}>
            <Text  style = {props.chartIndex == 2 ? styles.clickedText : styles.unClickedText}>  
              Muscle </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {props.chartIndex == 3 ? styles.clickedTextContainer : styles.unClickedTextContainer}
            onPressOut ={props.clickFat}>
              <Text  style = {props.chartIndex == 3 ? styles.clickedText : styles.unClickedText}> 
              Fat </Text>
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
                "Weight"
              ):
              (
                props.chartIndex == 2 ? "Muscle" : "Fat"
              )
            }
          />
          <TouchableOpacity onPressOut ={ props.logOut }>
            <Text> LOGOUT </Text>
          </TouchableOpacity>
    </View>
            
    
    <View style = {styles.bodyPictureContainer}>

    </View>
  </ScrollView>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'pink'
  },
  profileContainer : {
    height : 150,
    flexDirection : 'row',
    backgroundColor : '#eeeeee',
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom : 6,
  },
  commentsContainer : {
    height : 40,
  },
  graphContainer : {
    backgroundColor : 'pink',
    alignItems : "center",
  }, 
  bodyPictureContainer:{
    height : 1000,
    backgroundColor : 'blue',
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
    fontSize: 30,
    fontWeight:'bold',
  },
  weightContainer :{
    flex:2,
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 20,
    paddingTop : 10,
    borderRadius: 20,
    backgroundColor : '#f2f2f2',
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
  },
  unClickedText : {
    color : "#ffbb00",
    fontSize : 20,
  }
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired
};

export default FeedScreen;
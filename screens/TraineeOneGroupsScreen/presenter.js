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
  TextInput
} from "react-native";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine, 
}from "victory-native";
import ProfileChart from "../../components/ProfileChart";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

 const TraineeOneGroupsScreen = props => (
  <ScrollView style = {styles.container}>
  <PopupDialog
      dialogTitle={<DialogTitle title="운동 기록" />}
      ref={props.setDialog}
      dialogAnimation={slideAnimation}
      dismissOnTouchOutside = {true}
    >
    
    <View style = {styles.upperRow}>
      <View style = {styles.column}>
        <Text style = {styles.textInput}></Text>
      </View>
      <View style = {styles.column}>
      <Text style = {styles.textInput}></Text>
      </View>
      <View style = {styles.column}>
      <Text style = {styles.textInput}></Text>
      </View>
    </View>
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
      </View>
    </View> 
    <View style = {styles.upperRow}>
      <View style = {styles.column}>
        <Text style = {styles.textInput}></Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.textInput}></Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.textInput}></Text>
      </View>
    </View> 
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
    </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
    </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}></Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}></Text>
      </View>
    </View> 

    <View style = {styles.ButtonContainer}>
      <TouchableOpacity
      style = {{backgroundColor : "#rgba(253,139,27,1)",marginVertical : 5, marginHorizontal :20, paddingVertical :10, borderRadius : 20, alignItems : 'center'}}
      onPress={props.closeDialog}>
      <Text style = {{paddingHorizontal : 20}}>닫기</Text>
      </TouchableOpacity>

      </View>
    </PopupDialog>
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
    <View style = {styles.reviewContainer}>
      <View style = {styles.reviewContainer2}>
        {props.reviewFlag ?
        (
          <View style = {{flex: 1,justifyContent: "center", backgroundColor: "white", borderRadius: 10,marginRight: 10, paddingLeft: 5,}}>
            <Text>{props.comment}</Text>
          </View>
        )
        :
          <TextInput 
          style = {{flex: 1,justifyContent: "center", backgroundColor: "white", borderRadius: 10,marginRight: 10, paddingLeft: 5,}} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="코멘트를 달아주세요" 
          autoCorrecto = {false}
          value = {props.data5}
          onChangeText={props.changeSets5}
          />
        }
        {props.reviewFlag ?
         <StarRating
          disabled={false}
          maxStars={5}
          starSize = {25}
          rating={props.starCount}
          fullStarColor = "#fd8b1b" 
          /> :
        <StarRating
          disabled={false}
          maxStars={5}
          starSize = {25}
          rating={props.starCount}
          selectedStar={props.onStarRatingPress}
          fullStarColor = "#fd8b1b" 
          />}
        </View>
        <TouchableOpacity style = {{alignItems : "flex-end"}}>
          <Text style = {{paddingRight : 20,}}>등록 하기</Text>
        </TouchableOpacity>
      </View>
    <View style = {styles.beforeAfterContainer}>
      <View style = {{flexDirection : 'row'}}>
        <View style = {{backgroundColor: 'white',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>BEFORE</Text>
          {props.group.trainer.profileImage ?  
        (<Image source={{uri:props.image.uri} } style = {{width: width/2, height: height*0.4}}/>)
        :( 
        <Image
          source={require("../../assets/images/photoPlaceholder.png")}
          style = {{width: width/2, height: height *0.4}}
        />
      )}  
        </View>
        <View style = {{backgroundColor: '#fd8b1b',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text style = {{paddingVertical: 4, color : "white"}}>AFTER</Text>
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
      <View style = {{flex: 1,flexDirection: 'row', justifyContent: 'space-between',}}>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.group.beforeFat}</Text></View>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.group.beforeMuscle}</Text></View>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.group.beforeWeight}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.group.afterFat}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.group.afterMuscle}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.group.afterWeight}</Text></View>
      </View>    
    </View>
    <View style = {styles.calenderContainer}>
      <Calendar
        style = {{}}
        markedDates={props.dates2}
        onDayPress={props.pullDayInfo}
      />
    </View>

    <TouchableOpacity style = {styles.button} onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
      <Text style = {styles.font}>  </Text>
    </TouchableOpacity>
  </ScrollView>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  headerContainer: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 4,
    
  },
  trainerContainer: {
    flex:1,
    backgroundColor : "white",
    flexDirection : 'row',
    marginBottom: 4,
    borderRadius: 5,
  },
  beforeAfterContainer: {
    marginVertical: 3,
  },
  beforecellContainer : {
    marginVertical: 4,
    width :width/6 -5,
    justifyContent: 'center',
    alignItems : 'center',
    height: height/30,
    backgroundColor : "white",
    borderRadius: 5,
    

  },
  aftercellContainer : {
    marginVertical: 4,
    width :width/6 -5,
    justifyContent: 'center',
    alignItems : 'center',
    height: height/30,
    backgroundColor : "#fd8b1b",
    borderRadius: 5,
    

  },
  calenderContainer: {
    flex: 1,
  },
  upperRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : "#rgba(255,167,10,0.8)"
  },
  lowerRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : '#rgba(0,0,0,0.2)',
  },
  column  : {
    flex : 1,
    backgroundColor : 'transparent',
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : "white",
    borderWidth : StyleSheet.hairlineWidth,
    flexDirection : 'row'
  },
  textInput : {
    width : width/3 -10,
    height: 30,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    alignItems : 'center'
  },
  NOT :{
    width : width/4 -50,
    height: 30,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingLeft:5,
    backgroundColor: "#fafafa",
    alignItems : 'center'
  },
  multiText : {
    paddingHorizontal : 4,
  },
  reviewContainer: {

  },
  reviewContainer2: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
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
    backgroundColor : "#fd8b1b", //"#rgba(253,213,27)"
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
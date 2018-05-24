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
  TextInput,
  ActivityIndicator
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
        <Text style = {styles.textInput}>{props.data0.name}</Text>
      </View>
      <View style = {styles.column}>
      <Text style = {styles.textInput}>{props.data1.name}</Text>
      </View>
      <View style = {styles.column}>
      <Text style = {styles.textInput}>{props.data2.name}</Text>
      </View>
    </View>
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data0.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data0.set}</Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data1.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data1.set}</Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data2.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data2.set}</Text>
      </View>
    </View> 
    <View style = {styles.upperRow}>
      <View style = {styles.column}>
        <Text style = {styles.textInput}>{props.data3.name}</Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.textInput}>{props.data4.name}</Text>
      </View>
      <View style = {styles.column}>
        <Text style = {styles.textInput}>{props.data5.name}</Text>
      </View>
    </View> 
    <View style = {styles.lowerRow}>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data3.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data3.set}</Text>
    </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data4.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data4.set}</Text>
    </View>
      <View style = {styles.column}>
        <Text style = {styles.NOT}>{props.data5.count}</Text>
        <Text style ={styles.multiText}>*</Text>
        <Text style = {styles.NOT}>{props.data5.set}</Text>
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
      <Text style = {styles.nameText}> {props.group.title}</Text>
    </View>
    <TouchableOpacity onPress = {props.onPress} style = {styles.trainerContainer} onPressOut = {()=> props.navigate('showTrainerInfo', {trainer : props.group.opener})}>
        <View style = {styles.profileContainer}>
          {props.group.opener.profile_image_url ?
          (<Image source={{uri:props.group.opener.profile_image_url} } style = {styles.avatar}/>)
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
              {props.group.opener.name}
          </Text>
          <Text style = {styles.commentText}>
          {props.group.opener.self_introduction_text}
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
          value = {props.comment}
          onChangeText={props.changeComment}
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
        <TouchableOpacity style = {{alignItems : "flex-end"}} onPressOut = {props.reviewSubmit}>
          <View>
          {props.isSubmitting ?
          (<ActivityIndicator size = "small" color="white"/>)
          :
          (<Text style = {{paddingRight : 20,}}>등록 하기</Text>)
          }
          </View>
        </TouchableOpacity>
      </View>
    <View style = {styles.beforeAfterContainer}>
      <View style = {{flexDirection : 'row'}}>
        <View style = {{backgroundColor: 'white',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>BEFORE</Text>
          {props.beforeImage ?  
            (<Image source={{uri:props.beforeImage} } style = {{width: width/2, height: height*0.4}}/>)
            :( 
            <Image
              source={require("../../assets/images/photoPlaceholder.png")}
              style = {{width: width/2, height: height *0.4}}
            />
          )}  
        </View>
        <View style = {{backgroundColor: '#fd8b1b',flex:1,justifyContent:"center", alignItems : 'center'}}>
          <Text style = {{paddingVertical: 4, color : "white"}}>AFTER</Text>
        {props.afterImage ?  
        (<Image source={{uri:props.afterImage} } style = {{width: width/2, height: height*0.4}}/>)
        :( 
        <Image
          source={require("../../assets/images/photoPlaceholder.png")}
          style = {{width: width/2, height: height *0.4}}
        />
      )}  
        </View>
      </View>
      <View style = {{flex: 1,flexDirection: 'row', justifyContent: 'space-between',}}>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.BD_fat}</Text></View>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.BD_muscle}</Text></View>
        <View style = {styles.beforecellContainer}><Text style = {{paddingVertical: 4, color : "#fd8b1b"}}>{props.BD_weight}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.AD_fat}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.AD_muscle}</Text></View>
        <View style = {styles.aftercellContainer}><Text style = {{paddingVertical: 4, color : "white"}}>{props.AD_weight}</Text></View>
      </View>    
    </View>
    <View style = {styles.calenderContainer}>
      <Calendar
        style = {{}}
        markedDates={props.dates2}
        onDayPress={props.pullDayInfo}
      />
    </View>

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
    fontFamily: 'font-DoHyeon',
    fontSize :30,
    justifyContent : 'center',
    alignItems : 'center',
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
    fontSize : 25,
    paddingLeft : 8,
    color : "white",
    fontFamily: 'font-DoHyeon',
  },
  costText : {
    fontSize : 15,
    paddingTop : 7,
    paddingRight : 10,
  },
  headerContainer : {
    flexDirection : 'row',
    backgroundColor : "black",
    justifyContent : 'center',
  },
  nameText : {
    fontSize : 20,
    paddingVertical : 10,
    color: "white",
    fontFamily: 'font-DoHyeon'
  },
});


export default TraineeOneGroupsScreen;
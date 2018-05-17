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



 const OneGroupForProfile = props => (
  <TouchableOpacity onPress = {props.onPress}>
    <View style = {styles.Container}>
      <View style = {styles.profileContainer}>
        {props.data?
        (props.data.opener.profileImage ? 
          (<Image source={{uri:props.data.opener.profileImage}} style = {styles.avatar}/>)
          :
          <Image
          source={
            require("../../assets/images/noPhoto.jpg")
          }
          style={styles.avatar}
          //defaultSource={require("../../assets/images/noPhoto.jpg")}
        />
        )
        :
        <Image
        source={
          require("../../assets/images/noPhoto.jpg")
        }
        style={styles.avatar}
        //defaultSource={require("../../assets/images/noPhoto.jpg")}
        />}
        
        <View style ={styles.trainernameContainer}>
          <Text style = {styles.trainernameText}>
          {props.data ?
              (props.data.opener.name) :
              (props.loadingMessage)
          }
          </Text>
        </View>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>
          {props.data ?
              (props.data.title) :
              (props.loadingMessage)
          }
        </Text>
        {props.data ?
          props.data.comment ?
          <Text style = {styles.commentText} numberOfLines = {6}>
              {props.data.comment}
          </Text> :
          <Text style = {styles.commentText} numberOfLines = {3}>
              등록된 코멘트가 없네요.. ㅎㅎ
          </Text>
          :
          <Text style = {styles.commentText} numberOfLines = {3}>
              {props.loadingMessage}
          </Text>
        }

      </View>
      <View style = {styles.detailContainer}>
        <View style = {{flexDirection : 'row', backgroundColor : "#rgba(255,150,2,0.5)", height : 20,justifyContent : 'center',alignItems : 'center'}}>
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>[</Text>
          {props.data.daysOfWeek.map((st,index) => <Text key = {index} style = {{paddingHorizontal : 5, fontSize : 8, color : "black", fontWeight : "800",}}>{st}</Text>)}
          <Text style = {{paddingLeft: 1, fontSize : 8,}}>]</Text>
        </View>  
      <View> 
        {props.data ? 
          <Text style ={styles.capacityText}>
          현재 : {props.data.user_count} / {props.data.capacity}
          </Text> :
          <Text>
          {props.loadingMessage}
          </Text>
        }
        {props.data ? 
          <Text style ={styles.costText}>
          비용 : {props.data.charge}
         </Text> 
          :
          <Text>
          {props.loadingMessage}
          </Text>

        }
          </View>
      </View>
    </View>
    <View style = {{  width : width,
                      height : 20,
                      backgroundColor : "#eeeeee",
                      flexDirection : 'row',
                      justifyContent : "space-between"}}>
    <Text style = {{color : "black", paddingLeft : 5,}}> {props.startDate} </Text>
    {props.percent <= 0 ?
    <Text style = {{color: "black",zIndex : 100,}}> NOT OPENED </Text> :
      (props.percent >= 100 ? 
        <Text style = {{color: "black", fontWeight : "500", zIndex : 100,}}> 종료됨 </Text> :
        <Text style = {{color: "black", zIndex : 100,}}> {props.percent}%</Text>
      )
    }
    <Text style = {{color: "black", paddingRight : 5,}}> {props.endDate}</Text>
    <View style = {{
      width : props.percent/100*width,
      backgroundColor: "#rgba(255,167,0,0.7)",
      height : 20,
      alignItems : "center",
      position : 'absolute',
    }}>
    
    </View>
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

export default OneGroupForProfile;
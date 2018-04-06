import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import FadeIn from "react-native-fade-in-image";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const Photo = props => (
  <View style={styles.photo}>
      <View style={styles.header}>
        <View>
          <Text style={styles.date}>{props.dateCasting(props.upload_datetime)}</Text>
        </View>
      </View>
    <FadeIn>
      {props.image ?  
            (<Image source={{uri:props.image} } style = {{width: width, height: height*0.63}}/>)
            :( 
            <Image
              source={require("../../assets/images/photoPlaceholder.png")}
              style = {{width: width, height: height *0.63}}
            />
            )}  
    </FadeIn>
    <View style = {styles.tableContainer}>
        <View style = {styles.upperRow}>
          <View style = {styles.column}>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.tableAttribute}> Weight </Text>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.tableAttribute}> Muscle </Text>
          </View>
          <View style = {styles.column}>
            <Text style = {styles.tableAttribute}> Fat </Text>
          </View>
        </View>
        <View style = {styles.lowerRow}>
          <View style = {styles.column}>
            <Text style = {styles.tableAttribute}> data </Text>
          </View>
          <View style = {styles.column}>
          <Text style = {styles.tableData}> {props.weight} </Text>
          </View>
          <View style = {styles.column}>
          <Text style = {styles.tableData}> {props.muscle} </Text>
          </View>
          <View style = {styles.column}>
          <Text style = {styles.tableData}> {props.fat} </Text>
          </View>
        </View> 
      </View>
      <View style = {styles.commentContainer}>
        <View style = {styles.commentTrainerContainer}></View>
        {props.comment ? <Text>props.cooment.trainer</Text> : <Text style = {styles.commentText}></Text>} 
        <View style = {styles.commentTextContainer}></View>
        {props.comment ? <Text>props.cooment.comment</Text> : <Text style = {styles.commentText}>현재 등록된 코멘트가 없어요...</Text>} 
      </View>
  </View>
);

const styles = StyleSheet.create({
  photo: {
    width,
    marginBottom: 10,
    backgroundColor: "#ffffff"
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "flex-end",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  date: {
    fontWeight: "600",
    marginBottom: 3,
    fontSize: 30,
    color: "#rgba(0,0,0,0.5)"
  },
  location: {
    fontSize: 13
  },
  tableContainer  : {
    flex :1,
  },
  upperRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : "#rgba(255,176,0,1)"
  },
  lowerRow  : {
    height : 50,
    flexDirection : 'row',
    backgroundColor : '#rgba(0,0,0,0.15)',
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
    fontSize : 25,
    fontWeight : "500",
  },
  tableData : {
    fontSize : 20,
    color: "#rgba(0,0,0,0.5)",
    fontWeight : "300",
  },
  commentContainer : {
    flexDirection : 'row',
    backgroundColor : 'rgba(255,230,0,0.5)',
  },
  commentText : {
    paddingVertical : 10,
    paddingLeft : 15,
    fontSize : 20,
  }
});

Photo.propTypes = {

};

export default withNavigation(Photo);

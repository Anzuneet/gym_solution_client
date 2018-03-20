import React, { Component } from "react";
import { ScrollView ,
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  Alert, 
  StyleSheet,
  StatusBar,
  Image,
 } from "react-native";
import { List, SearchBar, Divider, Button, ButtonGroup } from "react-native-elements";
import GroupsItem from "../../components/GroupsItem";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements'

const SearchFilterScreen = props => (
    <View style = {styles.weightContainer}>
    <CheckBox
      title='월'
      checked={props.monCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({monCheck:!props.monCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='화'
      checked={props.tueCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({tueCheck:!props.tueCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='수'
      checked={props.wedCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({wedCheck:!props.wedCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='목'
      checked={props.thuCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({thuCheck:!props.thuCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='금'
      checked={props.friCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({friCheck:!props.friCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='토'
      checked={props.satCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({satCheck:!props.satCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />

      <CheckBox
      title='일'
      checked={props.sunCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({sunCheck:!props.sunCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex :1,
        height:60,
        width:100,
    },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  logo: {
    width: 180,
    height: 65,
    marginTop: 20
    },
  weightContainer :{
      flex:1,
      flexDirection : 'row',
     // justifyContent : 'space-between',
      backgroundColor : '#f2f2f2',
      paddingHorizontal : 7
    },
  checkBoxContainer :{
    //flex:2,
   // flexDirection : 'column',
    height:30,
    width:47,
    marginLeft: -6,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  textStyle:{
    fontSize:12,
  }
});

export default SearchFilterScreen;
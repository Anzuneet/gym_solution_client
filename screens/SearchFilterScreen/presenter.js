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
  Button,
  TextInput,
 } from "react-native";
import { List, SearchBar, Divider,} from "react-native-elements";
import GroupsItem from "../../components/GroupsItem";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';

const SearchFilterScreen = props => (
    <View style = {styles.rowContainer}>
      <View style = {styles.weightContainer}>
      <CheckBox
        title='월'
        checked={props.daysOfWeek.MON} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek, MON:!props.daysOfWeek.MON}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
        <CheckBox
        title='화'
        checked={props.daysOfWeek.TUE} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,TUE:!props.daysOfWeek.TUE}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
        <CheckBox
        title='수'
        checked={props.daysOfWeek.WED} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,WED:!props.daysOfWeek.WED}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
        <CheckBox
        title='목'
        checked={props.daysOfWeek.THU} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,THU:!props.daysOfWeek.THU}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
        <CheckBox
        title='금'
        checked={props.daysOfWeek.FRI} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,FRI:!props.daysOfWeek.FRI}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
        <CheckBox
        title='토'
        checked={props.daysOfWeek.SAT} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,SAT:!props.daysOfWeek.SAT}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />

        <CheckBox
        title='일'
        checked={props.daysOfWeek.SUN} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        onPress={()=>props.container.setState({daysOfWeek:{...props.daysOfWeek,SUN:!props.daysOfWeek.SUN}})}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.textStyle}
        size={15}
        />
      </View>



      <View style = {styles.TextInputcontainer}>
     
      <TouchableOpacity 
      style = {styles.TouchableOpacityContainer}      >
         <TextInput 
            style = {styles.TouchableOpacityText} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="최소 가격" 
            autoCorrecto = {false}
            value = {props.charge.min}
            keyboardType='numeric'
            onChangeText={props.changechargeMin}
         />
      </TouchableOpacity>

      <Text style ={styles.btnText}>~</Text>

      <TouchableOpacity  
      style = {styles.TouchableOpacityContainer}>
          <TextInput 
          style = {styles.TouchableOpacityText} 
          underlineColorAndroid = 'rgba(0,0,0,0)' 
          placeholder="최대 가격" 
          autoCorrecto = {false}
          value = {props.charge.max}
          keyboardType='numeric'
          onChangeText={props.changechargeMax}
          />
      </TouchableOpacity>   
        
      </View>

            <View style = {styles.TextInputcontainer}>
     
     <TouchableOpacity style = {styles.TouchableOpacityContainer}
     onPressOut={props.onClickShowDialog}>
           <Text style = {styles.TouchableOpacityText}>
               {props.time.start}
           </Text>
     </TouchableOpacity>

     <Text style ={styles.btnText}>~</Text>

     <TouchableOpacity style = {styles.TouchableOpacityContainer}
     onPressOut={props.onClickShowDialog}>
           <Text style = {styles.TouchableOpacityText}>
               {props.time.end}
           </Text>
     </TouchableOpacity>   
       
     </View>

  
    
      <View style = {styles.ButtonContainer}>
      <Button 
      color = "#ffbb00"
      title="설정 완료"
      onPress={() => {props.searchScreen()}}
      />
      </View>

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
  rowContainer :{
    flex:1
  },
  weightContainer :{
      //flex:1,
      flexDirection : 'row',
     // justifyContent : 'space-between',
      backgroundColor : '#f2f2f2',
      paddingHorizontal : 7
    },
  checkBoxContainer :{
    //flex:2,
    //flexDirection : 'column',
    height:30,
    width:47,
    marginLeft: -6,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  textStyle:{
    fontSize:12,
  },
  
  ButtonContainer :{
    width : 100,
    justifyContent : 'center',
    alignItems : 'center',
  },
  filterContainer: {
    flex : 1,
    backgroundColor : "#fefefe",
    justifyContent: "center",
    alignItems: "center",

},
TouchableOpacityContainer : {
   marginLeft: 6,
    width : 160,
    backgroundColor : "#ffffff",
    height : 30,
},
TouchableOpacityText : {
    fontSize : 25,
    textAlign: "center",
    color: "black",
},
filterText : {
    fontSize : 30,
    color : "rgba(0,0,0,0.5)"
    },
TextInputcontainer: {
      flexDirection : 'row',
      //backgroundColor: '#fff',
      height:35,
      backgroundColor : '#f2f2f2',
    },
btnText:{
      color: "black",
      fontWeight : "600",
      textAlign: "center",
      fontSize :25,
      marginLeft: 3,
  },
});

export default SearchFilterScreen;
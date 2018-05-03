import React from "react";
import PropTypes from 'prop-types';
import {Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TraineeGroupsManageScreen from "../screens/TraineeGroupsManageScreen";
import DrawerContainer from "../components/DrawerContainer";
import {Font} from 'expo'; 

const DrawerStack = DrawerNavigator({
    HomeScreen: { screen: HomeScreen },
    TraineeGroupsManageScreen: { screen : TraineeGroupsManageScreen},
    FeedScreen: { screen: FeedScreen },
    ProfileScreen : { screen : ProfileScreen },
    },
    {
        gesturesEnabled: false,
        contentComponent: DrawerContainer
    }
    )

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
headerMode: 'float',
navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: "#ffbb00"},//'#rgba(255,176,0,0.6)'
    title : 
    <Text style = {styles.title}> GYMSOLUTION </Text>
    ,
    headerLeft: 
    <TouchableOpacity style ={styles.icon} onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen')
        } else {
          navigation.navigate('DrawerClose')
        }}}> 
         <Image
         source={require("../assets/images/icon-gym.png")}
         style ={styles.icon}
         />
    </TouchableOpacity>
    
})
})


const RootNavigation = StackNavigator(
 {
    drawerStack: { screen: DrawerNavigation }
 }
 , {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
  }
)

const styles = StyleSheet.create({
    icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width : 60,
    height : 60,
    paddingLeft : 20,
    },
    title: {
    fontSize : 45,
    //color : "rgba(0,0,0,1)",
    marginTop : 25,
    textAlign: "center",
    paddingLeft: 20,
    fontFamily: 'font-DoHyeon',
    },
})

export default RootNavigation;
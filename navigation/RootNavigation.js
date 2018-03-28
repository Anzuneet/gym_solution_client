import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import SearchFilterScreen from "../screens/SearchFilterScreen";
import TabsNavigation from "./TabsNavigation";
import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationsScreen from "../screens/NotificationsScreen";;
import ProfileScreen from "../screens/ProfileScreen";
import OwnGroupScreen from "../screens/OwnGroupScreen";

//import OwnGroupRoute from "../routes/OwnGroupRoute"
/*
const RootNavigation = StackNavigator(
 {
    Tabs:{
        screen: TabsNavigation,
        navigationOptions: {
            header : null,
        }
    },
    searchFilter:{
        screen : SearchFilterScreen,
        navigationOptions :{
            title : "검색 조건을 설정해주세요!"
        }
    },
    searchScreen:{
        screen : SearchScreen,
        navigationOptions: {
            header : null
        }
    }
 },
);*/

const DrawerStack = DrawerNavigator({
    SearcScreen: { screen: SearchScreen },
    OwnGroupScreen: { screen : OwnGroupScreen},
    FeedScreen: { screen: FeedScreen },
    NotificationsScreen: { screen: NotificationsScreen },
    ProfileScreen : { screen : ProfileScreen },
    
})

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
headerMode: 'float',
navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#ffbb00'},
    title: 'Logged In to your app!',
    headerLeft: 
    <TouchableOpacity style ={styles.icon} onPressOut={() => navigation.navigate('DrawerOpen')}> 
         <Image
         source={require("../assets/images/icon-gym.png")}
         resizeMode="stretch"
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
    },
})

export default RootNavigation;
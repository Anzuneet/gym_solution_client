import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";
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
    HomeScreen: { screen: HomeScreen },
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
    headerStyle: {backgroundColor: '#rgba(255,176,0,0.6)'},
    title : 
    // <Text style = {{fontSize : 30, fontWeight : "800", color : "white"}}> GYM_SOLUTION </Text>
    <Image
    source={require("../assets/images/logo-gym2.png")}
    resizeMode="stretch"
    style ={{width : 700,height : 100}}
    />
    ,
    headerLeft: 
    <TouchableOpacity style ={styles.icon} onPressOut={() => navigation.navigate('DrawerOpen')}> 
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
})

export default RootNavigation;
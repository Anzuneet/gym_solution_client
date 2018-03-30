import React from "react";
import {Text, Image} from 'react-native';
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
    headerStyle: {backgroundColor: '#ffbb00'},
    title : <Text style = {{fontSize : 30, fontWeight : "800", color : "white"}}> GYM_SOLUTION </Text>,
    headerLeft: <Text style = {{paddingLeft : 10}} onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
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


export default RootNavigation;
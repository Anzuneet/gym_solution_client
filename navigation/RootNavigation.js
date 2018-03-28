import React from "react";
import {Text} from 'react-native';
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
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
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
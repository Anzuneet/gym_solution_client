import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TraineeGroupsManageScreen from "../screens/TraineeGroupsManageScreen";
import DrawerContainer from "../components/DrawerContainer";

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
    headerStyle: {backgroundColor: "#rgba(253,139,27,1)"},//'#rgba(255,176,0,0.6)'
    title : 
    // <Text style = {{fontSize : 30, fontWeight : "800", color : "white"}}> GYM_SOLUTION </Text>
    <Image
    source={require("../assets/images/logo-gym2.png")}
    resizeMode="stretch"
    style ={{width : 700,height : 100}}
    />
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
})

export default RootNavigation;
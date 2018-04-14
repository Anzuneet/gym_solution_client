import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import TrainerProfileScreen from "../screens/TrainerProfileScreen";
import TrainingManagementScreen from "../screens/TrainingManagementScreen";;
import DrawerContainerForTrainer from "../components/DrawerContainerForTrainer";

const DrawerStack = DrawerNavigator({
    TrainerProfileScreen: { screen: TrainerProfileScreen },
    TrainingManagementScreen: { screen: TrainingManagementScreen },
    },
    {
        gesturesEnabled: false,
        contentComponent: DrawerContainerForTrainer
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


const TrainerNavigation = StackNavigator(
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

export default TrainerNavigation;


/*import { StackNavigator } from "react-navigation";
import TrainingManagementScreen from "../screens/TrainingManagementScreen";
import CreateTrainingScreen from "../screens/CreateTrainingScreen";

const TrainerNavigation = StackNavigator({
  management: {
    screen: TrainingManagementScreen,
    navigationOptions: {
      header: null
    }
  },
  create:{
    screen: CreateTrainingScreen,
    navigationOptions: {
      title : "당신의 training을 만드세요!"
    }
  }
});

export default TrainerNavigation;*/

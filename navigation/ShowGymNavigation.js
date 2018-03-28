import { StackNavigator } from "react-navigation";
import searchScreen from "../screens/SearchScreen";
import gymInfoScreen from "../screens/GymInfoScreen";
import showGroupsScreen from "../screens/ShowGroupsScreen"
import showOneGroupScreen from "../screens/ShowOneGroupScreen";
import showTrainerInfoScreen from "../screens/ShowTrainerInfoScreen";



const ShowGymNavigation = StackNavigator({
  
  search: {
    screen: searchScreen,
    navigationOptions: {
      header : null,
    }
  },
  gymInfo: {
    screen: gymInfoScreen,
    navigationOptions: {
      header : null,
    }
  },
  showGroups:{
    screen: showGroupsScreen,
    navigationOptions: {
      header : null,
    }
  },
  showOneGroup:{
    screen: showOneGroupScreen,
    navigationOptions: {
      title : "showOneGroup"
    }
  },
  showTrainerInfo:{
    screen: showTrainerInfoScreen,
    navigationOptions: {
      title : "showTrainerInfo"
    }
  },
});

export default ShowGymNavigation;

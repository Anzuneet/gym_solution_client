import { StackNavigator } from "react-navigation";
import OwnGroupScreen from "../screens/OwnGroupScreen";
import TraineeOneGroupsScreen from "../screens/TraineeOneGroupsScreen";


const OwnGroupsNavigation = StackNavigator({
  
  ownGroups: {
    screen: OwnGroupScreen,
    navigationOptions: {
      header : null,
    }
  },
  groupInfo: {
    screen: TraineeOneGroupsScreen,
    navigationOptions: {
      header : null,
    }
  },

});

export default OwnGroupsNavigation;

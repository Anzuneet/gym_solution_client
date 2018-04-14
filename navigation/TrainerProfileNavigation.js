import { StackNavigator } from "react-navigation";
import TrainerProfileUpdateScreen from "../screens/TrainerProfileUpdateScreen";
import bodyProfileScreen from "../screens/bodyProfileScreen";



const TrainerProfileNavigation = StackNavigator({
  
  mainProfile: {
    screen: TrainerProfileUpdateScreen,
    navigationOptions: {
      header : null,
    }
  },
  bodyProfile: {
    screen: bodyProfileScreen,
    navigationOptions: {
      header : null,
    }
  },
});

export default TrainerProfileNavigation;

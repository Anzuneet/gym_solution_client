import { StackNavigator } from "react-navigation";
import TrainerProfileUpdateScreen from "../screens/TrainerProfileUpdateScreen";



const TrainerProfileNavigation = StackNavigator({
  
  mainProfile: {
    screen: TrainerProfileUpdateScreen,
    navigationOptions: {
      header : null,
    }
  },
});

export default TrainerProfileNavigation;

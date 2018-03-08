import { StackNavigator } from "react-navigation";
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

export default TrainerNavigation;

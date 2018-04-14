import { StackNavigator } from "react-navigation";
import GroupManage from "../screens/GroupManage";
import CreateTrainingScreen from "../screens/CreateTrainingScreen";
import ShowMembersScreen from "../screens/ShowMembersScreen";
import recordMemberScreen from "../screens/recordMemberScreen";


const TrainerGroupManage = StackNavigator({
  
  management: {
    screen: GroupManage,
    navigationOptions: {
      header : null,
    }
  },
  create: {
    screen: CreateTrainingScreen,
    navigationOptions: {
      header : null,
    },
  },
  showMembers: {
    screen: ShowMembersScreen,
    navigationOptions: {
      header : null,
    },
  },
  record: {
    screen: recordMemberScreen,
    navigationOptions: {
      header : null,
    },
  },
});

export default TrainerGroupManage;

import { StackNavigator } from "react-navigation";
import GroupManage from "../screens/GroupManage";
import CreateTrainingScreen from "../screens/CreateTrainingScreen";
import ShowMembersScreen from "../screens/ShowMembersScreen";
import RecordMemberScreen from "../screens/RecordMemberScreen";


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
    screen: RecordMemberScreen,
    navigationOptions: {
      header : null,
    },
  },
});

export default TrainerGroupManage;

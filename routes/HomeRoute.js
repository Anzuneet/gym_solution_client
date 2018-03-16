import React from "react";
import { Image,TouchableOpacity,Text} from "react-native";
import { StackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import { actionCreators as userActions} from "../redux/modules/user";

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: () => ({
        headerTitle :(
          <Image
            source = {require("../assets/images/logo-gym.png")}
            style = {{ height : 50,width : 130}}
          />
        ),
        /*
        headerLeft : (
          <TouchableOpacity onPressOut ={() => {
            userActions.logOut();
            }}>
            <Text> LOGOUT </Text>
          </TouchableOpacity>
        )*/

      })
    },
    ...sharedRoutes
  },
 {
   ...sharedOptions
 }
);
 
 export default HomeRoute;
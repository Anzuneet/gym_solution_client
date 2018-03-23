import React from "react";
import { Image,TouchableOpacity,Text} from "react-native";
import { StackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import { actionCreators as userActions} from "../redux/modules/user";
import SearchFilterScreen from "../screens/SearchFilterScreen"

const HomeRoute = StackNavigator(
  {
    Home: {
      screen: SearchScreen,
      navigationOptions: {
        header : null,
      }  
    },
    searchFilter:{
      screen : SearchFilterScreen,
      navigationOptions :{
          title : "검색 조건을 설정해주세요!"
      }
    },
    ...sharedRoutes
  },
  
  {
    ...sharedOptions
  }
);
 
 export default HomeRoute;

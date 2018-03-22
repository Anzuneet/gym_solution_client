import {StackNavigator} from "react-navigation";
import SearchFilterScreen from "../screens/SearchFilterScreen";
import TabsNavigation from "./TabsNavigation";
import upLoadImageScreen from "../screens/upLoadImage";


const RootNavigation = StackNavigator(
 {
    Tabs:{
        screen: TabsNavigation,
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
    upLoadImage : {
        screen : upLoadImageScreen,
        navigationOptions : {
            title: "매번 새로운 사진을 올려주세요!!"
        }
    }
 },
 {
     mode:"modal",
     
 } 
);

export default RootNavigation;
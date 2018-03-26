import {StackNavigator} from "react-navigation";
import SearchFilterScreen from "../screens/SearchFilterScreen";
import TabsNavigation from "./TabsNavigation";
import NavButton from "../components/NavButton";
import SearchScreen from "../screens/SearchScreen";


const RootNavigation = StackNavigator(
 {
    Tabs:{
        screen: TabsNavigation,
        navigationOptions: {
            header: null
        }
    },
    searchFilter:{
        screen : SearchFilterScreen,
        navigationOptions :{
            title : "검색 조건을 설정해주세요!"
        }
    },
    searchScreen:{
        screen : SearchScreen,
        navigationOptions: {
            header : null
        }
    }
 },
 {
     mode:"modal",
     
 } 
);

export default RootNavigation;
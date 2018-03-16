import {StackNavigator} from "react-navigation";
import SearchFilterScreen from "../screens/SearchFilterScreen";
import TabsNavigation from "./TabsNavigation";
import NavButton from "../components/NavButton";


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
            title : "filter"
        }
    },
 },
 {
     mode:"modal",
     
 } 
);

export default RootNavigation;
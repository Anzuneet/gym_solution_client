import {StackNavigator} from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes , {sharedOptions} from "./sharedRoutes";


const ProfileRoute = StackNavigator(
    {
        Profile:{
            screen: ProfileScreen,
            navigationOptions: {
                header : null,
            }
        }
        ,
        ...sharedRoutes
    }
    ,
    {
        ...sharedOptions
    },
)

export default ProfileRoute;
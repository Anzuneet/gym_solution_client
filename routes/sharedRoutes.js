import React from "react";
import {Text} from "react-native";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import NavButton from "../components/NavButton"

const sharedRoutes = {
    Likes:{
        screen:LikesScreen
    },
    Comments:{
        screen:CommentsScreen
    }
};

const sharedOptions = { // 공유옵션이므로 전체에 줌
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#ffbb00'},
        title: 'Logged In to your app!',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
};

export {sharedOptions};

export default sharedRoutes;
import React from "react";
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
    navigationOptions:{
        title : "hello because of me, Header can't be showen up.",
    }
};

export {sharedOptions};

export default sharedRoutes;
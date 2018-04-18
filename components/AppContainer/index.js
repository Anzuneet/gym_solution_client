import { connect }from "react-redux";
import AppContainer from "./presenter";
import {actionCreators as photoActions } from "../../redux/modules/photos";
import {actionCreators as userActions} from "../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    return {
        isLoggedIn: user.isLoggedIn,
        isTrainer: user.isTrainer,
        profile:user.user,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initAppForTrainee: () => {
            dispatch(photoActions.getFeed());
            dispatch(userActions.getGroups());
            dispatch(userActions.getGyms());
            //getSearch
            //getNotifications
            dispatch(userActions.getOwnProfile());
        },
        initAppForTrainer: () => {
            dispatch(userActions.getOwnProfile());
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(AppContainer);

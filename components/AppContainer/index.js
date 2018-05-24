import { connect }from "react-redux";
import AppContainer from "./presenter";
import {actionCreators as photoActions } from "../../redux/modules/photos";
import {actionCreators as userActions} from "../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    const { user: {groups, gyms, profile}} = state;
    return {
        isLoggedIn: user.isLoggedIn,
        isTrainer: user.isTrainer,
        profile:state,
        groups,
        gyms,
        profile,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initAppForTrainee: () => {
            dispatch(photoActions.getFeed());
            dispatch(userActions.getGroups());
            dispatch(userActions.getGyms());
            dispatch(userActions.getOwnProfile());
        },
    }
}

export default connect(mapStateProps,mapDispatchToProps)(AppContainer);

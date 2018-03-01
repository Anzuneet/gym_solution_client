import { connect }from "react-redux";
import AppContainer from "./presenter";
import {actionCreators as photoActions } from "../../redux/modules/photos";
import {actionCreators as userActions} from "../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    return {
        isLoggedIn: user.isLoggedIn,
        isTrainer: user.isTrainer,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            //dispatch(photoActions.getFeed());
            //getSearch
            //getNotifications
            dispatch(userActions.getOwnProfile());
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(AppContainer);

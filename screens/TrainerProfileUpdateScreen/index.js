import { connect }from "react-redux";
import Container from "./container";
import {actionCreators as photoActions } from "../../redux/modules/photos";
import {actionCreators as userActions} from "../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    return {
        profile:user.user,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            dispatch(userActions.getOwnProfile());
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Container);

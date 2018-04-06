import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      return dispatch(userActions.login(username, password));
    },
    getOwnProfile: () => {
      return dispatch(userActions.getOwnProfile());
    },
    getGyms: () => {
      return dispatch(userActions.getGyms());
    },
    getGroups: () => {
      return dispatch(userActions.getGroups());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
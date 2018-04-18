import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";
import {actionCreators as photoActions } from "../../redux/modules/photos";


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
    },
    getFeed : () =>{
      return dispatch(photoActions.getFeed());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
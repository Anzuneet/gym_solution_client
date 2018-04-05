
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";


const mapStateToProps = (state, ownProps) => {
  const { user: {groups, gyms, profile}} = state;
  console.log(profile);
  return {
    groups,
    gyms,
    profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getGroups: () => {
      return dispatch(userActions.getGroups());
    },
    getGyms : () => {
      return dispatch(userActions.getGyms());
    },
    getOwnProfile: () =>
    {
      return dispatch(userActions.getOwnProfile());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container);



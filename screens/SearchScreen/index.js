
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";


const mapStateToProps = (state, ownProps) => {
  const { user: {groups, gyms, profile}} = state;
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
    getFeed : () =>{
      return dispatch(photoActions.getFeed());
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container);



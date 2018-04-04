
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";


const mapStateToProps = (state, ownProps) => {
  const { user: {groups, gyms}} = state;
  return {
    groups,
    gyms
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getGroups: () => {
      return dispatch(userActions.getGroups());
    },
    getGyms : () => {
      return dispatch(userActions.getGyms());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Container);



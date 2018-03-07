
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getGroups: (uid) => {
      return dispatch(userActions.getGroups(uid));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);



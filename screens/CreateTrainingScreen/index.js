import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    enrollGroup: (trainingInfo) => {
      return dispatch(userActions.enrollGroup(trainingInfo));
    }
  };
};

export default connect(null,mapDispatchToProps)(Container);
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOwnGroups: (handler) => {
      dispatch(userActions.getOwnGroups(handler));
    },
  };
};

export default connect(null,mapDispatchToProps)(Container);
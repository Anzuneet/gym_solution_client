import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOwnTrainerGroups: (handler) => {
      dispatch(userActions.getOwnTrainerGroups(handler));
    },
  };
};

export default connect(null,mapDispatchToProps)(Container);
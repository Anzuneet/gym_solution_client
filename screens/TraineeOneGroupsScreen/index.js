import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postReview: (trainer_uid,grade,comments) => {
      dispatch(userActions.postReview(trainer_uid,grade,comments));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
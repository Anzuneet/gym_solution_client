import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 
const mapStateToProps = (state, ownProps) => {
  const { user : {profile}} =state;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postReview: (trainer_uid,grade,comments) => {
      dispatch(userActions.postReview(trainer_uid,grade,comments));
    },
    getBefore : (guid,uid,handler) => {
      dispatch(userActions.getBefore(guid,uid,handler))
    },
    getAfter : (guid,uid,handler) => {
      dispatch(userActions.getAfter(guid,uid,handler))
    },
    getGroupTraining : (guid,handler) => {
      dispatch(userActions.getGroupTraining(guid,handler))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
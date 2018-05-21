import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 
const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  const { user : {profile}} = state;
  return {
    feed,
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    joinTraining: (guid) => {
      dispatch(userActions.joinTraining(guid));
    },
    getReview: (trainer_uid,handler) => {
      dispatch(userActions.getReview(trainer_uid,handler));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
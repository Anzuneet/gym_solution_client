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
    getFeed: () => {
      dispatch(photoActions.getFeed());
    },
    logout: () => {
      dispatch(userActions.logOut());
    },
    getTrainers:(uid, handler)=>{
      dispatch(userActions.getTrainers(uid, handler));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
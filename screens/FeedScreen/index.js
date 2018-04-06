import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 
const mapStateToProps = (state, ownProps) => {
  const { user : {profile}} =state;
  const {list} = state.photos.feed;
  return {
    list,
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
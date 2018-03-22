import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  return {
    feed
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
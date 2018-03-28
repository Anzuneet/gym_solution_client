import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(userActions.logOut());
    },
    postBodyMeasurements : (img,fat,weight,muscle) => {
      dispatch(userActions.postBodyMeasurements(img,fat,weight,muscle));
    }
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
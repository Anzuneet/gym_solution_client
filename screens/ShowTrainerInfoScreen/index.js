import { connect } from "react-redux";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTrainerImages : (tuid,handler) => {
        dispatch(photoActions.getTrainerImages(tuid,handler));
      },
      getUsers : (uid,handler) => {
        dispatch(userActions.getUsers(uid,handler));
      }
      
    };
  };
export default connect(null,mapDispatchToProps)(Container);
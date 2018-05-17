import { connect } from "react-redux";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTrainerImages : (tuid,handler) => {
        dispatch(photoActions.getTrainerImages(tuid,handler));
      }
      
    };
  };
export default connect(null,mapDispatchToProps)(Container);
import { connect }from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
    const { user : {profile}} =state;
    return {
      profile
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTrainerImages : (tuid,handler) => {
        dispatch(photoActions.getTrainerImages(tuid,handler));
    },
        deleteTrainerImages : () => {
        dispatch(photoActions.deleteTrainerImages());
    },  
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Container);

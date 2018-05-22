import { connect }from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions } from "../../redux/modules/user";

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
        deleteTrainerImages : (tuid,name) => {
        dispatch(photoActions.deleteTrainerImages(tuid,name));
      },  
      updateProfileImage : (value) => {
        dispatch(userActions.updateProfileImage(value));
      },
      updateProfileComment : (value) => {
        dispatch(userActions.updateProfileComment(value));
      },
      postTrainerImage : (trainer_uid,img) => {
        dispatch(photoActions.postTrainerImage(trainer_uid,img));
      }

    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Container);

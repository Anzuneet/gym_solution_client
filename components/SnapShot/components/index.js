import { connect }from "react-redux";
import Container from "./SliderEntry";
import {actionCreators as photoActions} from "../../../redux/modules/photos";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    
    return {
        isTrainer : user.isTrainer,
        tuid : user.profile.uid,
    };
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTrainerImages : (tuid,name) => {
        dispatch(photoActions.deleteTrainerImages(tuid,name));
        },  
    };
  };

export default connect(mapStateProps,mapDispatchToProps)(Container);

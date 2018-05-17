import { connect }from "react-redux";
import Container from "./SliderEntry";
import {actionCreators as userActions} from "../../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    
    return {
        isTrainer : user.isTrainer
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

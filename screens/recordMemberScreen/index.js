import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        trainerPostBodymeasurements : (guid,tuid,date,Img,Fat,Weight,Muscle,comment) => {
        dispatch(userActions.trainerPostBodymeasurements(guid,tuid,date,Img,Fat,Weight,Muscle,comment));
      },
        trainerGetBodyMeasurements : (guid,uid,handler) => {
        dispatch(userActions.trainerGetBodyMeasurements(guid,uid,handler));
      }
      
    };
  };
export default connect(null, mapDispatchToProps)(Container);
import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        trainerPostBodymeasurements : (guid,tuid,date,Img,Fat,Weight,Muscle) => {
        dispatch(userActions.trainerPostBodymeasurements(guid,tuid,date,Img,Fat,Weight,Muscle));
      }
      
    };
  };
export default connect(null, mapDispatchToProps)(Container);
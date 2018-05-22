import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateGroupTraining : (guid,training,udate) =>{
            dispatch(userActions.updateGroupTraining(guid,training,udate));
        },
        getUsersInGroup : (guid, handler) => {
            dispatch(userActions.getUsersInGroup(guid, handler));
        },
        getGroupTraining : (guid,handler) => {
            dispatch(userActions.getGroupTraining(guid,handler));
        }
    };
  };
  
  export default connect(null, mapDispatchToProps)(Container);
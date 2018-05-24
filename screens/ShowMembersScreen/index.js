import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions} from "../../redux/modules/user";
 

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateGroupTraining : (guid,training,udate,handler) =>{
            dispatch(userActions.updateGroupTraining(guid,training,udate,handler));
        },
        getUsersInGroup : (guid, handler) => {
            dispatch(userActions.getUsersInGroup(guid, handler));
        },
        getGroupTraining : (guid,handler) => {
            dispatch(userActions.getGroupTraining(guid,handler));
        },
        getAfter : (guid,uid,handler) => {
            dispatch(userActions.getAfter(guid,uid,handler));
        }
    };
  };
  
  export default connect(null, mapDispatchToProps)(Container);
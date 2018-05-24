import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions} from "../../redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        getAfter : (guid,uid,handler) => {
            dispatch(userActions.getAfter(guid,uid,handler));
        }
    };
  };
  
  export default connect(null, mapDispatchToProps)(Container);
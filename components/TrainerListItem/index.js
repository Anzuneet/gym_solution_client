import { connect } from "react-redux";
import Container from "./container";

import { actionCreators as userActions} from "../../redux/modules/user";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getReview: (trainer_uid,handler) => {
            dispatch(userActions.getReview(trainer_uid,handler));
          },
    };
  };
  
export default connect(null, mapDispatchToProps)(Container);
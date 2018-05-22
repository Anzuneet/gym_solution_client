import { connect } from "react-redux";
import presenter from "./presenter";
import { actionCreators as userActions} from "../../redux/modules/user";
 
const mapStateToProps = (state, ownProps) => {
  const { user : {profile}} =state;
  return {
    profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(userActions.logOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(presenter);
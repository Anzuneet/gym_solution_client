import { connect }from "react-redux";
import Container from "./SliderEntry";
import {actionCreators as userActions} from "../../../redux/modules/user";

const mapStateProps = (state, ownProps) => {
    const { user} =state;
    
    return {
        isTrainer : user.isTrainer
    };
}



export default connect(mapStateProps,null)(Container);

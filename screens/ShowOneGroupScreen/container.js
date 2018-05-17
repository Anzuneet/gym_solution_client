
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowOneGroupScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
state = {
  isSubmitting : false
}
 
_goBack = () => {
  const {goBack} = this.props.navigation;
  goBack();
}
_submit = async () =>{
  const {uid} = this.props.navigation.state.params.group;
  const {goBack} = this.props.navigation;
  const {isSubmitting} = this.state;
  const {joinTraining} = this.props;

  if(!isSubmitting){
    this.setState({
      isSubmitting : true
    })
    const submitResult = await joinTraining(uid);
    if(!submitResult){
      this.setState({isSubmitting: false})
      
    }
    goBack();
  }
}
  render() {
    
    const {navigate} = this.props.navigation;
    const {group} = this.props.navigation.state.params;
   return (
     <ShowOneGroupScreen {...this.props} {...this.state}
     navigate = {navigate}
     group = {group}
     submit = {this._submit}
     goBack = {this._goBack}
     />
   );
 }
}
 
export default Container;

import React, { Component } from "react";
import PropTypes from "prop-types";
import TraineeOneGroupsScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
  dialog = null;

  state = {
    reviewFlag: false,
    starCount:false,
  }
  _pullDayInfo = (day) =>{
      
    if(this.dialog != null){
      this.dialog.show();
    }
  }
  _closeDialog = () =>
  {
    this.dialog.dismiss();
  }
  _setDialog = (dialog)=>this.dialog = dialog;

  _onStarRatingPress = (rating) =>{
    this.setState({starCount: rating});
  }

  render() {
    const {navigate} = this.props.navigation;
    const group = this.props.navigation.state.params.group;
   return (
    <TraineeOneGroupsScreen {...this.props} {...this.state}
    pullDayInfo = {this._pullDayInfo}
    setDialog = {this._setDialog}
    navigate = {navigate}
    group = {group}
    closeDialog={this._closeDialog}
    onStarRatingPress = {this._onStarRatingPress}
    />
   );
 }
}
 
export default Container;
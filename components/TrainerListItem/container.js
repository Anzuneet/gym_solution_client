
import React, { Component } from "react";
import PropTypes from "prop-types";
import TrainerListItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigate("showTrainerInfo",{trainer : this.props.data});
  };

  render() {
    return (
      <TrainerListItem
      trainerInfo = {this.props.data}
      onPress = {this._onPress}
      />
    );
  }
} 
export default Container;
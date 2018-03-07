
import React, { Component } from "react";
import PropTypes from "prop-types";
import GroupsItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    console.log("GroupsItem Container~~");
    return (
      <GroupsItem
      data = {this.props.data}/>
    );
  }
} 
export default Container;
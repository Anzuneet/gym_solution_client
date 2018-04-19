
import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberListItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigate("record",{member : this.props.data});
  };

  render() {
    return (
      <MemberListItem
      {...this.props}
      onPress = {this._onPress}
      />
    );
  }
} 
export default Container;
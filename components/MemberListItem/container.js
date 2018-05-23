
import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberListItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.navigate("record",{member : this.props.data, guid : this.props.guid});
  };

  
  render() {
    var RD = {
      Weight : "X",
      Muscle : "X",
      Fat : "X",
      comment:  null,
    };

   
    if(this.props.data.recentData)
    {
      RD = this.props.data.recentData;
    }
    return (
      <MemberListItem
      {...this.props}
      onPress = {this._onPress}
      RD = {RD}
      />
    );
  }
} 
export default Container;
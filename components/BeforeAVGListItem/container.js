
import React, { Component } from "react";
import PropTypes from "prop-types";
import BeforeAVGListItem from "./presenter";
 
class Container extends Component {

  
  render() {

    const data = this.props.data;
    return (
      <BeforeAVGListItem
      data = {data}
      />
    );
  }
} 
export default Container;
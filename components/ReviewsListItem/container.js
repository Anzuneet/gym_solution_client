
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReviewsListItem from "./presenter";
 
class Container extends Component {

  
  render() {
    const data = this.props.data;
    return (
      <ReviewsListItem
      data = {data}
      />
    );
  }
} 
export default Container;
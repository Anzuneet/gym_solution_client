
import React, { Component } from "react";
import PropTypes from "prop-types";
import BeforeAVGListItem from "./presenter";
 
class Container extends Component {

  
  render() {

    var fat,muscle,weight
    const data = this.props.data;
    if(data != null){
      fat = data.fat
      muscle = data.musle
      weight = data.weight
    }
    return (
      <BeforeAVGListItem
      fat ={fat}
      muscle = {muscle}
      weight ={weight}
      />
    );
  }
} 
export default Container;
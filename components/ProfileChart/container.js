
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileChart from "./presenter";
 
class Container extends Component {

  render() {
    const {data , name} = this.props;
    
   return (
     <ProfileChart 
     data = {data}
     name = {name}
     />
   );
 }
} 
export default Container;
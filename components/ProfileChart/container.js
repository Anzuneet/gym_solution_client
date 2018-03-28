
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileChart from "./presenter";
 
class Container extends Component {

  state = {
    Fat : [
      { x: "3/1", y: 13.8, l: "one" },
      { x: "3/5", y: 14.0, l: "one point five" },
      { x: "3/9", y: 12.9, l: "two" },
      { x: "3/14", y: 12.7, l: "three" }
    ],
    Muscle : [
      { x: "3/1", y: 34.1, l: "one" },
      { x: "3/5", y: 34.5, l: "one point five" },
      { x: "3/9", y: 34.6, l: "two" },
      { x: "3/14", y: 35.2, l: "three" }
    ],
    Weight : [
      { x: "3/1", y: 85.4, l: "one" },
      { x: "3/5", y: 85.6, l: "one point five" },
      { x: "3/9", y: 84.7, l: "two" },
      { x: "3/14", y: 84.6, l: "three" }
    ],
    
  };

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
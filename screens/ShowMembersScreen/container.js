
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowMembersScreen from "./presenter";
import NavButton from "../../components/NavButton";
 
class Container extends Component {

  render() {
   return (
     <ShowMembersScreen {...this.props} {...this.state}
     />
   );
 }
}
 
export default Container;
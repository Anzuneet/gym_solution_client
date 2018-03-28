
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowOneGroupScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
 state = {
 };
 

  render() {
    const {navigate} = this.props.navigation;
   return (
     <ShowOneGroupScreen {...this.props} {...this.state}
     navigate = {navigate}
     />
   );
 }
}
 
export default Container;
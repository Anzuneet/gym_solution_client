
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowOneGroupScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
 

  render() {
    const {navigate} = this.props.navigation;
    const {group} = this.props.navigation.state.params;
   return (
     <ShowOneGroupScreen {...this.props} {...this.state}
     navigate = {navigate}
     group = {group}
     />
   );
 }
}
 
export default Container;
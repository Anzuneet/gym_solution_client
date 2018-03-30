
import React, { Component } from "react";
import PropTypes from "prop-types";
import GymInfoScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
 
 

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props);
   return (
     <GymInfoScreen {...this.props} {...this.state}
     navigate = {navigate}
     />
   );
 }
}
 
export default Container;
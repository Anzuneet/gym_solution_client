
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
    const { gym , groups} = this.props.navigation.state.params;
   return (
     <GymInfoScreen {...this.props} {...this.state}
     navigate = {navigate}
     gymInfo = {gym}
     groups = {groups}
     />
   );
 }
}
 
export default Container;
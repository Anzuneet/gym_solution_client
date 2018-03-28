
import React, { Component } from "react";
import PropTypes from "prop-types";
import GymInfoScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
 state = {
   GYMImage:null,
   GYMName:"가라체육관",
   GYMComment:"안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
   GYMsTrainer:[
    {
      trainer_id : 1,
    },
    {
      trainer_id : 2,
    },
    {
      trainer_id : 3,
    },
    {
      trainer_id : 4,
    },
   ]
 };
 

  render() {
    const {navigate} = this.props.navigation;
   return (
     <GymInfoScreen {...this.props} {...this.state}
     navigate = {navigate}
     />
   );
 }
}
 
export default Container;
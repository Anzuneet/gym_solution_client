
import React, { Component } from "react";
import PropTypes from "prop-types";
import GymInfoScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
  };
  state ={
    GymInfoIndex : 1,
  }
 
  _clickIntroduction = () =>{
    this.setState({GymInfoIndex: 1});
    //this.props.navigation.navigate('showGroups',{ groups :this.props.navigation.state.params});
  };
  _clickTrainer = () =>{
    this.setState({GymInfoIndex: 2});
    //this.props.navigation.navigate('showGroups',{ groups :this.props.navigation.state.params});
  };
  _clickReview = () =>{
    this.setState({GymInfoIndex: 3});
    //this.props.navigation.navigate('showGroups',{ groups :this.props.navigation.state.params});
  };

  render() {
    const {navigate} = this.props.navigation;
    const { gym , groups} = this.props.navigation.state.params;
   return (
     <GymInfoScreen {...this.props} {...this.state}
     navigate = {navigate}
     gymInfo = {gym}
     groups = {groups}
     clickIntroduction = {this._clickIntroduction}
     clickTrainer = {this._clickTrainer}
     clickReview = {this._clickReview}
     />
   );
 }
}
 
export default Container;
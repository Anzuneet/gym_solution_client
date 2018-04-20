
import React, { Component } from "react";
import PropTypes from "prop-types";
import RecordMemberScreen from "./presenter";
import NavButton from "../../components/NavButton";

 
class Container extends Component {
 static propTypes = {
  
};
 state = {
  chartIndex : 1,
  lists : [
    {
      date:"2018-04-21",
    },
    {
      date:"2018-04-22",
    },
  ]
 };

 _clickWeight = () =>{
  this.setState({chartIndex: 1});
};
_clickMuscle = () =>{
  this.setState({chartIndex: 2});
};
_clickFat = () =>{
  this.setState({chartIndex: 3});
};

_pullDayInfo = (day) =>{
  this.props.navigation.navigate("recordDay");
}
  render() {
    const {navigate} = this.props.navigation;
    //...
    
    
   return (
     <RecordMemberScreen {...this.props} {...this.state}
     dates2 = {this.state.lists.reduce((obj, it)=>{
      obj[it.date] = {marked:true, selected:true, selectedColor:"blue"};
      return obj;
   }
   ,{})}
     navigate = {navigate}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     pullDayInfo = {this._pullDayInfo}
     />
   );
 }
}
 
export default Container;
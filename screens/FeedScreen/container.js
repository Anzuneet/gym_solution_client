
import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
   list: PropTypes.array,
   getFeed: PropTypes.func.isRequired
};
 state = {
  chartIndex : 1,
  isFetching: false,
  Fat : [
      { x: "3/1", y: 13.8},
      { x: "3/5", y: 14.0},
      { x: "3/9", y: 12.9},
      { x: "3/14", y: 12.7 }
  ],
  Muscle : [
    { x: "3/1", y: 34.1 },
    { x: "3/5", y: 34.5},
    { x: "3/9", y: 34.6 },
    { x: "3/14", y: 35.2}
  ],
  Weight : [
    { x: "3/1", y: 85.4 },
    { x: "3/5", y: 85.6},
    { x: "3/9", y: 84.7},
    { x: "3/14", y: 84.6 }
  ],
 };
 componentWillMount(){
  const list = this.props.list;
  let front_ten_items = list.slice(0,10);
  let fats = front_ten_items.map(it=>{
    console.log(it.upload_datetime);
    return {
      x: it.upload_datetime,
      y: it.fat
    };
  });
  let muscle = front_ten_items.map(it=>{

    return {
      x: it.upload_datetime,
      y: it.muscle
    };
  });
  let weight = front_ten_items.map(it=>{
    return {
      x: it.upload_datetime,
      y: it.weight
    };
  });
  this.setState({
    ...this.state, Muscle:muscle, Weight:weight, Fat:fats
  });
 }
 /*
  _makeChart = () =>{
    if(this.props.list){
      this.props.list.map((data,index) => {tihs.setState({...Muscle , Mucsle})}
    }
  }*/
  _clickWeight = () =>{
    this.setState({chartIndex: 1});
  };
  _clickMuscle = () =>{
    this.setState({chartIndex: 2});
  };
  _clickFat = () =>{
    this.setState({chartIndex: 3});
  };
  _logOut = () =>{
    const { logout } = this.props;
    logout();
  }
 componentWillReceiveProps = nextProps => {
   if (nextProps.feed) {
     this.setState({
       isFetching: false
     });
   }
 };
  render() {
   return (
     <FeedScreen {...this.props} {...this.state} refresh={this._refresh}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     logOut = {this._logOut}
     />
   );
 }
 _refresh = () => {
   const { getFeed } = this.props;
   this.setState({
     isFetching: true
   });
   getFeed();
 };
}
 
export default Container;
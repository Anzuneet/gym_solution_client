
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

 };

 componentWillMount(){
  const list = this.props.list;
  let front_ten_items = list.slice(0,10);
  let fats = front_ten_items.map(it=>{

    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.fat
    };
  });
  let muscle = front_ten_items.map(it=>{

    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.muscle
    };
  });
  let weight = front_ten_items.map(it=>{


    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.weight
    };
  });
  this.setState({
    ...this.state, Muscle:muscle, Weight:weight, Fat:fats
  });
 }
 _dateCasting(dext){
  if(dext){
    var sText = dext.split(" ");
    var ssText = sText[0].split("-");
    var outText = (`${ssText[1]}/${ssText[2]}`);
    return outText;
  }else
    return ;

}
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
   if (nextProps.list) {
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
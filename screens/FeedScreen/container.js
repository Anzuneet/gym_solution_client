
import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
   feed: PropTypes.array,
   getFeed: PropTypes.func.isRequired
};
 state = {
  chartIndex : 1,
  isFetching: false,
  Fat : [
      { x: "3/1", y: 13.8, l: "one" },
      { x: "3/5", y: 14.0, l: "one point five" },
      { x: "3/9", y: 12.9, l: "two" },
      { x: "3/14", y: 12.7, l: "three" }
  ],
  Muscle : [
    { x: "3/1", y: 34.1, l: "one" },
    { x: "3/5", y: 34.5, l: "one point five" },
    { x: "3/9", y: 34.6, l: "two" },
    { x: "3/14", y: 35.2, l: "three" }
  ],
  Weight : [
    { x: "3/1", y: 85.4, l: "one" },
    { x: "3/5", y: 85.6, l: "one point five" },
    { x: "3/9", y: 84.7, l: "two" },
    { x: "3/14", y: 84.6, l: "three" }
  ],
 };
 componentDidMount() {
   this.setState({feed : this.props.list})
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
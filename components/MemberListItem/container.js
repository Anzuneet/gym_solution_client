
import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberListItem from "./presenter";
 
class Container extends Component {

  state = {
    recentData: null,
  }

  componentDidMount(){

    const uid = this.props.data.uid;
    const {guid} = this.props;

    this.props.getAfter(guid,uid,(json) => {
      this.setState({recentData : json})
    })
  }

  _onPress = () => {
    this.props.navigate("record",{member : this.props.data, guid : this.props.guid});
  };

  
  render() {
    var RD = {
      weight : "X",
      muscle : "X",
      fat : "X",
      comment:  null,
      image: null,
    };
    if(this.state.recentData != null)
      RD = this.state.recentData

    return (
      <MemberListItem
      {...this.props}
      onPress = {this._onPress}
      RD = {RD}
      />
    );
  }
} 
export default Container;
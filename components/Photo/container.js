import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
_dateCasting(text){

  var sText = text.split(" ");
  var ssText = sText[0].split("-");
  var outText = (`${ssText[0]}년 ${ssText[1]}월 ${ssText[2]}일`);
  return outText;
}
  render() {
    return (
      <Photo {...this.props} {...this.state}
      dateCasting = {this._dateCasting} />
    );
  }
  /*
  _handlePress = () => {
    const { dispatchLike } = this.props;
    const { isLiked } = this.state;
    dispatchLike(isLiked);
    if (isLiked) {
      this.setState(prevState => {
        return {
          isLiked: false,
          likeCount: prevState.likeCount - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          isLiked: true,
          likeCount: prevState.likeCount + 1
        };
      });
    }
  };*/
}

export default Container;

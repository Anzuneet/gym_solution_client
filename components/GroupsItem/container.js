
import React, { Component } from "react";
import PropTypes from "prop-types";
import GroupsItem from "./presenter";
 
class Container extends Component {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    //const textColor = this.props.selected ? "red" : "black";
    console.log("GroupsItem Container~~");
    return (
      <GroupsItem
      data = {this.props.data}/>
      /*<TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>*/
    );
  }
} 
export default Container;
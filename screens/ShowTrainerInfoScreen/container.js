
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowTrainerInfoScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
 static propTypes = {
  
};
 state = {
   item : [
     {
       title : 1,
     },
     {
      title : 2,
     },
     {
      title : 3,
    }
   ]
 };
  _renderItem ({item, index}) {
    return (
        <View>
            <Text>{ item.title }</Text>
        </View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
   return (
     <ShowTrainerInfoScreen {...this.props} {...this.state}
     navigate = {navigate}
     renderItem = {this._renderItem}
     />
   );
 }
}
 
export default Container;
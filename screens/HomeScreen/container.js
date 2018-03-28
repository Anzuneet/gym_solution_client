import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import ShowGymNavigation from "../../navigation/ShowGymNavigation";


class Container extends Component {

 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ShowGymNavigation/>
    );
  }

}


export default Container;
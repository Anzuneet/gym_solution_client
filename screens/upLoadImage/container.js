import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import upLoadScreen from "./presenter";


class Container extends Component {

  state={

  }
 
  render() {
    console.log(this.props);
    return (
      <upLoadScreen/>
    );
  }

  
  _signup = () =>{

    this.setState({toSignUp:true});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Container;
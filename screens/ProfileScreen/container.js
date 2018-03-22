
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";
import { ImagePicker } from 'expo';
import { Dimensions} from "react-native"
 
class Container extends Component {

  
state = {
  image: null,
  flag: false,
};
componentDidMount(){
  
}
_pickImage = async () => {
  const {navigate} = this.props.navigation;
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [3,4],
    base64 :true,
    mediaTypes : ImagePicker.MediaTypeOptions.Images
  });
  
  if (!result.cancelled) {
    
    this.setState({ image:{uri:result.uri, base64:result.base64.base64 },flag : true  });
  }
  //navigate("upLoadImage", {image:this.state.image});
};

_takeImage = async ()=>{
  const {navigate} = this.props.navigation;
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [3,4],
    base64 :true,
    mediaTypes : ImagePicker.MediaTypeOptions.Images
  });
  
  if (!result.cancelled) {
    
    this.setState({ image:{uri:result.uri, base64:result.base64.base64 },flag : true   });
  }
  //navigate("upLoadImage", {image:this.state.image});
}

  render() {
    console.log(this.state.image);
   return (
     <ProfileScreen
      {...this.state}
      pickImage = {this._pickImage}
      takeImage = {this._takeImage}
     />
   );
 }
}
 
export default Container;
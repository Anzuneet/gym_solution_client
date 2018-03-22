
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";
import { ImagePicker } from 'expo';
import { Dimensions} from "react-native"
import { actionCreators as userActions } from "../../redux/modules/user";

class Container extends Component {
  state = {
    image: {
      uri:null,
      base64:null
    },
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
      
      this.setState({ image:{uri:result.uri, base64:result.base64 },flag : true  });
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
      
      this.setState({ image:{uri:result.uri, base64:result.base64 },flag : true   });
    }
    //navigate("upLoadImage", {image:this.state.image});
  }
  _submit = async ()=>{
    
    const uri = this.state.image.uri;
    const base64 = this.state.image.base64;
    
    let img_type = uri.split(".");
    img_type = img_type[img_type.length - 1];
    let response =
    await fetch(`${HOST_NAME}/user/images`,{
      method:"POST",
      headers:{
        "Content-Type":`image/${img_type};base64`,
        "x-gs-token": userActions.getToken()
      },
      body:base64
    });
    if(response.status == 500){
      return;
    }
    let result = await response.json();
    alert(result.msg);
  }
  render() {
    console.log(this.state.image);
   return (
     <ProfileScreen
      {...this.state}
      pickImage = {this._pickImage}
      takeImage = {this._takeImage}
      submit = {this._submit}
     />
   );
 }
}
 
export default Container;
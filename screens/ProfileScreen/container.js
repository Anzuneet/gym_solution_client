
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScreen from "./presenter";
import { ImagePicker } from 'expo';
import { Dimensions, Alert} from "react-native"
import { actionCreators as userActions } from "../../redux/modules/user";

class Container extends Component {
  dialog = null;
  state = {
    image: {
      uri:null,
      base64:null
    },
    flag: false,
    weight : null,
    muscle : null,
    fat : null,
    isSubmitting : false,
  };
  componentDidMount(){
    
  }
  _changeWeight = (text) => {
    this.setState({weight : text});
  };
  _changeMuscle = (text) => {
    this.setState({muscle : text});
  };
  _changeFat = (text) => {
    this.setState({fat : text});
  };

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
      this.dialog.dismiss();
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
      this.dialog.dismiss();
    }
    //navigate("upLoadImage", {image:this.state.image});
  }
  _submit = async () =>{
    const { image, weight, muscle, fat ,isSubmitting,flag } = this.state;
    const { postBodyMeasurements } = this.props;
    //type알아내기
    let img_type;
    let img;
    if(!flag){
      img = null;
    }else{
      img_type = image.uri.split(".");
      img_type = img_type[img_type.length - 1];
      img = {data : image.base64, type : img_type}
    }
    if(!isSubmitting){
      if(weight  && muscle && fat){
        this.setState({
          isSubmitting : true
        });
        await postBodyMeasurements(img,weight,muscle,fat);
        this.setState({
          isSubmitting : false
        });
      }else{
        Alert.alert('All fields are required!');
      }
    }
  }
  render() {
    console.log(this.state.isSubmitting);
   return (
     <ProfileScreen
      {...this.state}
      pickImage = {this._pickImage}
      takeImage = {this._takeImage}
      submit = {this._submit}
      changeWeight={this._changeWeight}
      changeMuscle={this._changeMuscle}
      changeFat={this._changeFat}
      parent = {this}
     />
   );
 }
}
 
export default Container;
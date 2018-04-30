import React, { Component } from "react";
import { Alert, BackHandler, ToastAndroid} from 'react-native';
import TrainerProfileUpdateScreen from "./presenter";
import { ImagePicker } from 'expo';

class Container extends Component {

  dialoggit = null;
  state = {
    bodyText : "POST BODYPRO"
  }

  componentDidMount(){
    
  }

  _changeComment = (text) =>{
    this.setState({comment: text});
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
  }

  render() {
    console.log(this.props);
    return <TrainerProfileUpdateScreen {...this.props} {...this.state}
        changeComment  = {this._changeComment}   
        pickImage = {this._pickImage}
        takeImage = {this._takeImage}
        parent = {this}

    />;
  }
}

export default Container;

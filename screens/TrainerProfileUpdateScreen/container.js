import React, { Component } from "react";
import { Alert, BackHandler, ToastAndroid} from 'react-native';
import TrainerProfileUpdateScreen from "./presenter";
import { ImagePicker } from 'expo';

class Container extends Component {

  dialog = null;
  dialogProfile = null;
  state = {
    bodyText : "POST BODYPRO",
    comment: "안녕하세요 여현동입니다. 아마잘지냅니다.",
    gym : "김선태 피트니스 클럽",

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
      
      // 이미지업로드
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
      
     // 이미지 업로드
      this.dialog.dismiss();
    }
  }


  _pickImageProfile = async () => {
    const {navigate} = this.props.navigation;
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3,4],
      base64 :true,
      mediaTypes : ImagePicker.MediaTypeOptions.Images
    });
    
    if (!result.cancelled) {
      
      // 이미지업로드
      this.setState({ profileImage:{uri:result.uri, base64:result.base64 },flag : true  });
      this.dialogProfile.dismiss();
    }
  };

  _takeImageProfile = async ()=>{
    const {navigate} = this.props.navigation;
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3,4],
      base64 :true,
      mediaTypes : ImagePicker.MediaTypeOptions.Images
    });
    
    if (!result.cancelled) {
      
     // 이미지 업로드
     this.setState({ profileImage:{uri:result.uri, base64:result.base64 },flag : true  });
      this.dialogProfile.dismiss();
    }
  }
  render() {
    console.log(this.props);
    return <TrainerProfileUpdateScreen {...this.props} {...this.state}
        changeComment  = {this._changeComment}   
        pickImage = {this._pickImage}
        takeImage = {this._takeImage}
        pickImageProfile = {this._pickImageProfile}
        takeImageProfile = {this._takeImageProfile}
        parent = {this}

    />;
  }
}

export default Container;

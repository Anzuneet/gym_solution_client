import React, { Component } from "react";
import { Alert, BackHandler, ToastAndroid, ActivityIndicator} from 'react-native';
import TrainerProfileUpdateScreen from "./presenter";
import { ImagePicker } from 'expo';

class Container extends Component {

  dialog = null;
  dialogProfile = null;
  commentDialog = null;
  state = {
    flag: false,
    flag2: false,
    trainerImages :null,
    bodyText: "POST IMAGES",
    profileImage: null,
    tempImage: null,
    profileImageSubmitting: false,
  }

  componentDidMount(){
    
    const tuid = this.props.profile.uid;
    this.props.getTrainerImages(tuid,(json)=>{
      let TI = json.images.map(it=>{
        return {
          illustration :it.image_name
        };
      })
      this.setState({trainerImage:TI});
    });

  }

  _refresh= () => {

    const tuid = this.props.profile.uid;

    this.props.getTrainerImages(tuid,(json)=>{
      let TI = json.images.map(it=>{
        return {
          illustration :it.image_name
        };
      })
      this.setState({trainerImage:TI});
    });
  };

  _changeComment = (text) =>{
    this.setState({self_introduction_text: text});
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
      this.setState({tempImage : {uri:result.uri, base64:result.base64 },flag : true})
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
     this.setState({tempImage : {uri:result.uri, base64:result.base64 },flag : true})
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
      this.setState({ profileImage:{uri:result.uri, base64:result.base64 },flag2 : true  });
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
    }
  }
  _submitProfileImage= async () =>{
    const { profileImage,flag2, profileImageSubmitting} = this.state;
    const { updateProfileImage } = this.props;
    //type알아내기
    let img_type;
    let img;
    if(!flag2){
      img = null;
    }else{
      img_type = profileImage.uri.split(".");
      img_type = img_type[img_type.length - 1];
      img = {data : profileImage.base64, type : img_type}
    }
    if(!profileImageSubmitting){
      this.dialogProfile.dismiss();
      this.setState({ profileImageSubmitting : true});
      if(profileImage != null){
        const imageUpdateResult = await updateProfileImage(profileImage.base64);
        if(!imageUpdateResult)
          this.setState({profileImageSubmitting : false});
      }else{
        Alert.alert('현재 프로필 이미지가 없어요');
      }
    }

  }

  _submitSelfComment= async () =>{
    const { self_introduction_text} = this.state;
    const { updateProfileComment } = this.props;

      if(self_introduction_text != null){
        this.commentDialog.dismiss();
        const commentUpdateResult = await updateProfileComment(self_introduction_text);
      

      }else{
        Alert.alert('현재 코멘트가 없어요');
      }

  }

  _submitImage= async () =>{
    const { tempImage,flag} = this.state;
    const { postTrainerImage,profile :{uid} } = this.props;
    //type알아내기
    let img_type;
    let img;
    if(!flag){
      img = null;
    }else{
      img_type = tempImage.uri.split(".");
      img_type = img_type[img_type.length - 1];
      img = {data : tempImage.base64, type : img_type}
    }
      this.dialog.dismiss();
      this.setState({ profileImageSubmitting : true});
      if(tempImage != null){
        const imageUpdateResult = await postTrainerImage(uid,tempImage.base64);
      }else{
        Alert.alert('현재 올라온 이미지가 없어요');
      }

  }

  render() {
    return <TrainerProfileUpdateScreen {...this.props} {...this.state}
        changeComment  = {this._changeComment}   
        pickImage = {this._pickImage}
        takeImage = {this._takeImage}
        pickImageProfile = {this._pickImageProfile}
        takeImageProfile = {this._takeImageProfile}
        parent = {this}
        submitProfileImage = {this._submitProfileImage}
        submitSelfComment = {this._submitSelfComment}
        submitImage = {this._submitImage}
        refresh = {this._refresh}
    />;
  }
}

export default Container;

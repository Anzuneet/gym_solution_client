import React, { Component } from "react";
import { Alert, BackHandler, ToastAndroid} from 'react-native';
import SignupScreen from "./presenter";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

class Container extends Component {


  // 이벤트 등록
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

// 이벤트 해제
componentWillUnmount() {
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}
  state={
    username: "",
    password: "",
    password2: "",
    phonenumber : "",
    type : "trainee",  //trainee or trainer.
    fitness_club_name : "", //integer,
    gender : "M", // M or F only,
    birthday : "", //date
    isSubmitting: false,
    isChecked: false,
  }
 
  handleBackButton = () => {
    const {navigate} = this.props.navigation;
    navigate('LogIn')
    return true;
  }
  render() {
    return <SignupScreen {...this.state} 
            changeUsername = {this._changeUsername}
            changePassword = {this._changePassword}
            changePassword2 = {this._changePassword2}
            changePhonenumber = {this._changePhonenumber}
            changeType = {this._changeType}
            changeFitness_club_name = {this._changeFitness_club_name}
            changeGender = {this._changeGender}
            changeBirthday = {this._changeBirthday}
            isSearching = {this._isSearching}
            submit = {this._submit}
            
    />;
  }

  
  _changeUsername = (text) =>{
    this.setState({username: text});
  };

  _changePassword = (text) => {
    this.setState({password:text});
  };

  _changePassword2 = (text) => {
    //this.setState({password2:text});
    const {password} = this.state;
    if(password === text)
    {
      this.setState({
        isChecked:true,
        password2:text
      });
    }else
    {
      this.setState({
        isChecked:false,
        password2:text,
      });
    }

  };

  _changePhonenumber = (text) => {
    this.setState({phonenumber:text});

  };

  _changeType = (text) => {
    this.setState({type:text});
  };

  _changeFitness_club_name = (text) => {
    this.setState({fitness_club_name:text});
  };
  _changeGender= (text) => {
    console.log(text);
    this.setState({gender:text});
  };
  _changeBirthday = (text) => {
    this.setState({birthday:text});
  };
  
  _isSearching = () =>{

  };
 
  _submit = () =>{
    const { username, 
            password,
            phonenumber,
            type,
            fitness_club_name,
            gender,
            birthday,
            isSubmitting } = this.state;
    if(!isSubmitting){
      if(username  && password && phonenumber 
         && type && fitness_club_name && gender
         && birthday)
         {
            this.setState({
            isSubmitting : true
        })
        //submit
      }else{
        Alert.alert('All fields are required!');
      }
    }
  };
}

export default Container;
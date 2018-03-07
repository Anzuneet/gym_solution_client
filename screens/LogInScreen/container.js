import React, { Component } from "react";
import { Alert, StyleSheet} from 'react-native';
import LogInScreen from "./presenter";


class Container extends Component {

  state={
    username: "",
    password: "",
    isSubmitting: false,
    toSignUp: false
  }
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <LogInScreen {...this.state} 
      changeUsername = {this._changeUsername}
      changePassword = {this._changePassword}
      submit = {this._submit}
      navigate = {navigate}
      />
    );
  }
  _changeUsername = (text) =>{
    this.setState({username: text});
  };

  _changePassword = (text) => {
    this.setState({password:text});
  };

  _submit = async () =>{
    const { username, password, isSubmitting } = this.state;
    const { login, getOwnProfile } = this.props;
    console.log(this.props);
    if(!isSubmitting){
      if(username  && password){
        this.setState({
          isSubmitting : true
        })
        const loginResult = await login(username, password);
        await getOwnProfile();
        if(!loginResult){
          this.setState({isSubmitting : false});
        }
        console.log(loginResult)
        //submit
        
      }else{
        Alert.alert('All fields are required!');
      }
    }
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
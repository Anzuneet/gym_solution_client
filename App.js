
import React from 'react';
import { AppLoading, Asset, Font} from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { StyleSheet,
         Text,
         View,
         BackHandler,
 } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";
import SignupNavigation from './navigation/SignupNavigation';

const {persistor, store} = configureStore();



class App extends React.Component 
{
  state ={
    isLoadingComplete : false
  }
  render() {
    //store.dispatch({type: "LOG_OUT"});
    const {isLoadingComplete} =this.state;
    if(!isLoadingComplete){
      return(
        <AppLoading 
          startAsync={this._loadAssetAsync}
          onError = {this._handleLoadingError}
          onFinish ={this._hnadleFinishLoading}
        />
      )}
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
 
  _loadAssetAsync = async() =>{
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/home.png"),
        require("./assets/images/icon-gym.png"),
        require("./assets/images/icon.png"),
        require("./assets/images/logo-gym2.png"),
        require("./assets/images/photoPlaceholder.png"),
        require("./assets/images/splash.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/icon-color.png"),
        require("./assets/images/icon-line.png"),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font,
        'font-DoHyeon' : require('./assets/fonts/DoHyeon-Regular.ttf'),
        'font-Exo2-Regular' : require('./assets/fonts/Exo2-Regular.ttf'),
        'font-Exo2-Light' : require('./assets/fonts/Exo2-Light.ttf'),
        'font-Aldrich' : require('./assets/fonts/Aldrich-Regular.ttf'),
      })
    ]);
  };

  _handleLoadingError = error => {
    consol.error(error);
  };

  _hnadleFinishLoading = async () =>{
    this.setState({
      isLoadingComplete:true
    });
  };
}
global.HOST_NAME ="https://gym.hehehee.net"; 
export default App;

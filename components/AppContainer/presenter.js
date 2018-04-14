import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import TrainerNavigation from "../../navigation/TrainerNavigation";
import LoadingScreen from "../../screens/LoadingScreen";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const { isLoggedIn, initApp, isTrainer } = this.props;
    if (isLoggedIn) {
      initApp();
    }
  }
  

  
  /*
  ( isTrainer ?
    <TrainerNavigation
    />
    :
    <RootNavigation
    /> 
  )*/
  render() {
    const { isLoggedIn, profile, isTrainer } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden = {false}/>
        
        {isLoggedIn ? 
          (isTrainer === null ?
            <LoadingScreen/>
            :
            (isTrainer === true) ? 
              <TrainerNavigation/> 
              :
              <RootNavigation/>
          )
          :
            <LoggedOutNavigation />
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topText : {
    height : 40,
    backgroundColor :'orange',
    alignItems : 'center',
    justifyContent : 'center'

  },
});


export default AppContainer;

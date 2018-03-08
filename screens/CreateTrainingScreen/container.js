import React, { Component } from "react";
import { ScrollView ,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert, StyleSheet } from "react-native";
import CreateTrainingScreen from './presenter';

class Container extends Component {
 
  /*
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
  }*/


  render() {

    return (
      <CreateTrainingScreen/>
    );
  }
}


export default Container;

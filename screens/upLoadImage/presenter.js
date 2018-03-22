import React from "react";
import PropTypes from 'prop-types';
import {
      View,
      Text,
      Image,
      StyleSheet,
      Dimensions,
      TouchableOpacity,
      TextInput,
      StatusBar,
      ActivityIndicator
    } from "react-native";
import { Ionicons } from "@expo/vector-icons";
    

const { width, height } = Dimensions.get("window");

const upLoadScreen = props => (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
        <Image
        source={require("../../assets/images/logo-gym.png")}
        resizeMode="stretch"
        style={styles.logo}
        />
    </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
    flex: 1
    },
    header: {
    flex: 1,
    backgroundColor: "#FFBB00",
    alignItems: "center",
    justifyContent: "center",
    width
    },
    logo: {
    width: 180,
    height: 65,
    marginTop: 20
    },
});
    
export default upLoadScreen;
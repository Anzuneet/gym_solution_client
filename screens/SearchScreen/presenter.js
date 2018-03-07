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
      ActivityIndicator,
      ScrollView,
    } from "react-native";
import { Ionicons,Feather } from "@expo/vector-icons";
import {MapView} from 'expo';
import { actionCreators as userActions } from "../../redux/modules/user";

const { width, height } = Dimensions.get("window");

const SearchScreens = props => (
    <View style = {styles.container}>
        <View style = {styles.mapContainer}>
        <MapView
            style={{ alignSelf: 'stretch', height: 500 }}
            //region={props.mapRegion}
            initialRegion = {props.mapRegion}
            onRegionChange={props.handleMapRegionChange}   
          >
            {props.gyms.map((marker, index) => (
                <MapView.Marker 
                key = {index}
                coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                title={marker.name}
                description={marker.address}
                onPress = {userActions.getGroups(marker.uid)}
                /> 
            ))}       
        </MapView>
        </View>
        <TouchableOpacity style = {styles.filterContainer} onPressOut = {props.searchFilter}>
            <Text style = {styles.filterText}>
                {props.gyms.lengths}
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "white",
    },
    mapContainer:{
        flex:10,
        backgroundColor : "#ebebeb",
    },
    filterContainer: {
        flex : 1,
        backgroundColor : "#fefefe",
        justifyContent: "center",
        alignItems: "center",

    },
    filterText : {
        fontSize : 30,
        color : "rgba(0,0,0,0.5)"
        },
})

export default SearchScreens;
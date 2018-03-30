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
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SearchFilterScreen from "../SearchFilterScreen";
import ShowGymNavigation from "../../navigation/ShowGymNavigation";
const { width, height } = Dimensions.get("window");

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

const SearchScreen = props => (
    <View style = {styles.container}>
        <PopupDialog
            dialogTitle={<DialogTitle title="찾고자하는 training의 조건을 입력해주세요" />}
            ref={props.setDialog}
            dialogAnimation={slideAnimation}
            dismissOnTouchOutside = {true}
            height = {300}
        >
        <SearchFilterScreen
        MON = {props.mon}
        TUE = {props.tue}
        WED = {props.wed}
        THU = {props.thu}
        FRI = {props.fri}
        SAT = {props.sat}
        SUN = {props.sun}
        onSubmitFilterCondition={props.onSubmitFilterCondition}
        />

        </PopupDialog>
        <View style = {styles.mapContainer}>
        <MapView
            ref={props.setMapView}
            style={{ alignSelf: 'stretch', height: 500 }}
            //region={props.mapRegion}
            //initialRegion = {props.mapRegion}
            onRegionChangeComplete={props.handleMapRegionChange}   
          >
            {props.gyms.map((marker, index) => (
                <MapView.Marker 
                key = {index}
                coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                title={marker.name}
                description={marker.address}
                onPress = {(index => console.log(index))}
                /> 
            ))}       
        </MapView>
        </View>
        <TouchableOpacity style = {styles.filterContainer} onPressOut={props.onClickShowDialog}>
            <Text style = {styles.filterText}>
                검색 조건 설정하기!
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

export default SearchScreen;
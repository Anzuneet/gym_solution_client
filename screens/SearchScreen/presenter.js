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
import { actionCreators as userActions } from "../../redux/modules/user";
import PopupDialog , { SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import SearchFilterScreen from "../SearchFilterScreen";
import ShowGymNavigation from "../../navigation/ShowGymNavigation";
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
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
        MON = {props.MON}
        TUE = {props.TUE}
        WED = {props.WED}
        THU = {props.THU}
        FRI = {props.FRI}
        SAT = {props.SAT}
        SUN = {props.SUN}
        START = {props.start}
        END = {props.end}
        MIN = {props.min}
        MAX = {props.max}
        onSubmitFilterCondition={props.onSubmitFilterCondition}
        />

        </PopupDialog>
        <View style = {styles.titleContainer}>
            {props.profile ? <Text style = {styles.nameText}> {props.profile.name}님 </Text> :
        <Text></Text>}
            
            <Text style = {styles.titleText}>Training 그룹을 찾아보세요!!</Text>
        </View>
        <View style = {styles.mapContainer}>
        <MapView
            ref={props.setMapView}
            style={{ alignSelf: 'stretch', height: 500 }}
            //region={props.mapRegion}
            //initialRegion = {props.mapRegion}
            onRegionChangeComplete={props.handleMapRegionChange}   
          >
            {props.gyms.map((marker, index) => (
                <Marker
                key = {index}
                coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                title={marker.name}
                description={marker.address}
                onPress = {()=>{ props.onPressMarker(marker)}}
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
    titleContainer : {
        backgroundColor : "transparent",
        flexDirection : 'row',
        justifyContent : "flex-end"
    },
    nameText : {
        fontSize : 25,
        paddingRight : 10,
        paddingVertical : 10,
        fontWeight : "500",
        color : "rgba(0,0,0,0.5)"
        
    },
    titleText : {
        paddingVertical : 10,
        fontSize : 20,
        paddingRight : 20,
        fontWeight : "800",
        
    },
    mapContainer:{
        backgroundColor : "#ebebeb",
        borderWidth : 5,
        borderColor : "#ffbb00",
        borderRadius :5,
    },
    filterContainer: {
        flex : 1,
        backgroundColor : "#fefefe",
        justifyContent: "center",
        alignItems: "center",

    },
    filterText : {
        fontSize : 40,
        color : "rgba(0,0,0,1)"
        },
})

export default SearchScreen;
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
import {Font} from 'expo'; 
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
            {props.profile ? <Text style = {styles.titleText}> {props.profile.name}님 </Text> :
        <Text></Text>}
            <Text style = {styles.titleText}>Training 그룹을 찾아보세요!!</Text>
        </View>

        <View style = {styles.mapContainer}>
        <MapView
            ref={props.setMapView}
            style={{ alignSelf: 'stretch', height: height * 0.65 }}
            //region={props.mapRegion}
            //initialRegion = {props.mapRegion}
            onRegionChangeComplete={props.handleMapRegionChange}   
          >
            {props.filteredGyms.map((marker, index) => (
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
        height: height * 0.1,
        backgroundColor : "#ffbb00",
        flexDirection : 'row',
        justifyContent : "flex-end",
        alignItems: "center",
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderColor : "#ffffff",
    },
    titleText : {
        fontFamily: 'font-DoHyeon',
        paddingVertical : 10,
        fontSize : 21,
        paddingRight : 20,
        fontWeight : "800",
        
    },
    mapContainer:{
        flex:1,
        backgroundColor : "white",
        borderWidth : 5,
        borderColor : "#ffbb00",
        justifyContent: "center",
        //borderRadius :5,
    },
    filterContainer: {
        height:height*0.1,
        backgroundColor : "#ffbb00",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth : StyleSheet.hairlineWidth,
        borderColor : "#ffffff",
    },
    filterText : {
        fontFamily: 'font-DoHyeon',
        fontSize : 40,
        color : "rgba(0,0,0,1)"
        },
})

export default SearchScreen;
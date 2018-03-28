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
            ref={(popupDialog) => { props.parent.filterDialog = popupDialog; }}
            dialogAnimation={slideAnimation}
            dismissOnTouchOutside = {true}
            height = {300}
        >
        <SearchFilterScreen 
        />
        </PopupDialog>
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
        <TouchableOpacity style = {styles.filterContainer} onPressOut ={ () => props.navigate("gymInfo")}>
            <Text style = {styles.filterText}>
                임시로 gyminfo 표시
            </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.filterContainer} onPressOut ={ () => {
            props.parent.filterDialog.show()
        }} >
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
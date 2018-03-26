import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";
import {Constants, Location, MapView} from 'expo';
import { actionCreators as userActions } from "../../redux/modules/user";
import SearchFilterScreen from "../SearchFilterScreen/container";

class Container extends Component {
  map = null;
  state = {
    mapRegion:null,       
    markers:
      [
        {

        }
      ]
    ,
    gyms:[
      {
        name:"가라",
        address:"asd",
        uid:1,
        latitude: 37.2926241,
        longitude: 126.8544851}
    ],
    groups:[{

    }],
    // 요일 조건
    monChecks: false,
    tueCheck: false,
    wedCheck: false,
    thuCheck: false,
    friCheck: false,
    satCheck: false,
    sunCheck: false,
    // 시간 조건
    startTime: "",
    endTime: "",
    // 가격 조건
    minCharge: "",
    maxCharge: "",
  };

  componentDidMount(){
    this._getLocationAsync();
    this._getGyms();
    this._getAllGroups();
    this._getStates();
  };

  _getGyms = async()=>{
    let response = await fetch("https://gym.hehehee.net/gyms");
    let gyms = await response.json();
    gyms = gyms.result;
    console.log(gyms);
    this.setState({gyms});
  }

  _getAllGroups = async()=> {
    let response = await fetch(`https://gym.hehehee.net/groups`, { 
      method: "GET",
      headers: {
        "x-gs-token": userActions.getToken()
      }
       });
    let groups = await response.json();
    groups = groups.groups;
    console.log(groups);
    this.setState({groups});
  }

  _getLocationAsync = async () => {
    const location = await Location.getCurrentPositionAsync({});

    console.log(location);
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },()=>{
      let markers = this.state.gyms.filter((gym)=>{
        let lat = gym.latitude - this.state.mapRegion.latitude;
        let lon = gym.longitude - this.state.mapRegion.longitude;
        lat = lat * lat;
        lon = lon * lon;
        let latD = this.state.mapRegion.latitudeDelta;
        let lonD = this.state.mapRegion.longitudeDelta;
        latD = latD * latD;
        lonD = lonD * lonD;
        return (lat < latD) && (lon< lonD) 
      });
      this.setState({markers});
    });    
  };

  _getStates = async()=>{
      console.log("SearchFilterScreen State Test");
      console.log(SearchFilterScreen.state.sunCheck);
      // 여기 하던중~
  }

  _onPress(data){
    let latitude=data.nativeEvent.coordinate.latitude;
    let longitude=data.nativeEvent.coordinate.longitude;
    arrayMarkers.push({
        latitude:latitude,
        longitude:longitude,
    });

    this.setState({markers:arrayMarkers})
}
  _handleMapRegionChange = mapRegion => {
    // this.setState({ mapRegion });
    // console.log(mapRegion);
    // console.log(this.state.mapRegion);
  
    let markers = this.state.gyms.filter((gym)=>{
      let lat = gym.latitude - mapRegion.latitude;
      let lon = gym.longitude - mapRegion.longitude;
      lat = lat * lat;
      lon = lon * lon;
      let latD = mapRegion.latitudeDelta;
      let lonD = mapRegion.longitudeDelta;
      latD = latD * latD;
      lonD = lonD * lonD;
      return (lat < latD) && (lon< lonD) 
    });
    
    this.setState({markers});

    // console.log(markers);
  };



  render() {
    return <SearchScreen
        mapRegion = {this.state.mapRegion}
        gyms = {this.state.gyms}
        handleMapRegionChange = {this._handleMapRegionChange}
        searchFilter = {this._searchFilter}
    />;
  }

  _searchFilter = () =>{
    const {navigate} = this.props.navigation;
      navigate("searchFilter");
  }

  
}

export default Container;
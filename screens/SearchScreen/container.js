import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";
import {Constants, Location, MapView} from 'expo';
import { actionCreators as userActions } from "../../redux/modules/user";

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
    ]
  };

  componentDidMount(){
    this._getLocationAsync();
    this._getGyms();
  };
  _getGyms = async()=>{
    let response = await fetch("https://gym.hehehee.net/gyms");
    let gyms = await response.json();
    gyms = gyms.result;
    this.setState({gyms});
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
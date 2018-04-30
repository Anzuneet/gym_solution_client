import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";
import {Constants, Location, MapView, Permissions, Font} from 'expo';
import { actionCreators as userActions } from "../../redux/modules/user";
import SearchFilterScreen from "../SearchFilterScreen/container";

class Container extends Component {
  filterDialog = null;
  infoDialog = null;
  map = null;
  state = {
    username : null,
    mapRegion:{
      latitude: 0,
      longitude: 0,
      latitudeDelta: 180,
      longitudeDelta: 180,
    },       
    markers:[],
    gyms:[],
    filteredGyms:[],
    groups:[],
    filteredGroups:[],
    daysOfWeek:{// 요일 조건
      MON: false,
      TUE: false,
      WED: false,
      THU: false,
      FRI: false,
      SAT: false,
      SUN: false,
    },
    time:{// 시간 조건
      start:null,
      end:null
    },
    charge:{// 가격 조건
      min: null,
      max: null
    },
    fontLoaded: false,
  };
  
  componentDidMount(){
    this._loadLocationAsync();
    if(this.props.gyms != null)
      this.setState({gyms: this.props.gyms.result});
    if(this.props.groups != null)
      this.setState({groups : this.props.groups.groups});
  };

  _loadLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    this.map.animateToRegion(
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    );
    //console.log(location);
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },()=>{this._updateMarkers()});    
  };
  _updateMarkers = (mapRegion)=>{
    if(mapRegion == undefined) mapRegion = this.state.mapRegion;

    let markers = this.state.filteredGyms.filter((gym)=>{
      if(mapRegion == null) return true;
      //console.log("update markers!");
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
    //console.log(`마커 갯수 ${markers.length}`);
    this.setState({markers});
  }
  _handleMapRegionChange = mapRegion => this.setState({mapRegion},()=>{this._updateMarkers()});
  _onClickShowDialog = ()=>{
    if(this.dialog != null){
      this.dialog.show();
    }
    
  }
  _onSubmitFilterCondition = (condition)=>{
    //console.log(this.state);

    let filteredGroups = this.state.groups.filter(it=>{

      let daysOfWeek = condition.daysOfWeek;
      let charge = condition.charge;
      let time = condition.time;

      // 요일 필터링
      for(var key in daysOfWeek){
        if(daysOfWeek[key] == false)continue;
        if(it.daysOfWeek.includes(key) == false){
          return false;
        }
      }

      // 가격 필터링
      if(charge.min == null) return false;
      else if(charge.max == null) return false;
      if (it.charge < charge.min || it.charge > charge.max){
        return false;
      }

      // 시간 필터링

      return true;
    });

    let filteredGyms = this.state.gyms.filter(gym=>filteredGroups.findIndex(group=>group.gym.uid == gym.uid) != -1)
    this.setState({filteredGroups:filteredGroups});
    this.setState({filteredGyms:filteredGyms},()=>this._updateMarkers());
    this.setState({daysOfWeek:condition.daysOfWeek});
    this.setState({charge:condition.charge});
    this.setState({time:condition.time});
    console.log("on Filtering")
    console.log(this.state.filteredGroups);
    //console.log(this.state.groups);
    this.dialog.dismiss();
  }

  _setDialog = (dialog)=>this.dialog = dialog;
  _setMapView = (mapview)=>this.map = mapview;
  

// 일단 기능 테스트를 위해 가격조건이 설정 안되있다면 필터링을 사용 안하는걸로 간주함

  _onPressMarker = (marker)=>{
    const {navigate} = this.props.navigation;
    if (this.state.charge.min == null && this.state.charge.max == null)
    {
      let markerGroups = this.state.groups.filter(it=>it.gym.uid == marker.uid);
      navigate("gymInfo", {gym : marker, groups : markerGroups});
    }
    else
    {
      
      let markerGroups = this.state.filteredGroups.filter(it=>it.gym.uid == marker.uid);
      navigate("gymInfo", {gym : marker, groups : markerGroups});
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return <SearchScreen
        {...this.props} 
        {...this.state}
        handleMapRegionChange = {this._handleMapRegionChange}
        onClickShowDialog={this._onClickShowDialog}
        onSubmitFilterCondition={this._onSubmitFilterCondition}
        setDialog={this._setDialog}
        setMapView={this._setMapView}
        navigate = {navigate}
        onPressMarker ={this._onPressMarker}
    />;
  }
}

export default Container;
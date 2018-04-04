import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchScreen from "./presenter";
import {Constants, Location, MapView, Permissions} from 'expo';
import { actionCreators as userActions } from "../../redux/modules/user";
import SearchFilterScreen from "../SearchFilterScreen/container";

class Container extends Component {
  filterDialog = null;
  infoDialog = null;
  map = null;
  state = {
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
      SUN: false
    },
    time:{// 시간 조건
      start:null,
      end:null
    },
    charge:{// 가격 조건
      min: null,
      max: null
    }
  };
  
  componentDidMount(){
    this._loadGyms();
    this._loadAllGroups();
    this._loadLocationAsync();
    console.log("componentDIdMoun have to started early");
    console.log(this.state);
  };

  _loadGyms = async()=>{
    let response = await fetch("https://gym.hehehee.net/gyms");
    let gyms = await response.json();
    gyms = gyms.result;
   // console.log(response.status);
    //console.log(gyms);
    this.setState({filteredGyms:gyms.map(it=>it)});
    this.setState({gyms : gyms});
  }

  // 여기서 오류가 발생한다면 토큰값의 문제이다. 로그아웃 후 다시해볼것.
  _loadAllGroups = async()=> {
    let response = await fetch(`https://gym.hehehee.net/groups`, { 
      method: "GET",
      headers: {
        "x-gs-token": userActions.getToken()
      }
       });
    //console.log(response.status);
    let groups = await response.json();
    console.log(groups.msg);
    groupss = groups.groups;
    //console.log("in loadAllGroups");
    //console.log(groupss);
    this.setState({groups : groupss});
  }

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
      let time = condigion.time;

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
    console.log(this.state.groups);
    this.dialog.dismiss();
  }

  _setDialog = (dialog)=>this.dialog = dialog;
  _setMapView=(mapview)=>this.map = mapview;
  //_changeGroups {this.dialog.dismiss();}
  
  _onPressMarker = (marker)=>{
    const {getGroups} = this.props;

    const {navigate} = this.props.navigation;
    let groups = this.state.filteredGroups.filter(it=>it.gym.uid == marker.uid);
    navigate("gymInfo", {gym : marker, groups:groups});
  }
  render() {
    const {navigate} = this.props.navigation;
    //console.log(this.state.groups);
    //console.log(this.state.filteredGroups);
    return <SearchScreen 
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
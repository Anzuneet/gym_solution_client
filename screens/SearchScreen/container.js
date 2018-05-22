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
      this.setState({gyms: this.props.gyms.result, filteredGyms: this.props.gyms.result});
    if(this.props.groups != null)
      this.setState({groups : this.props.groups.groups, filteredGroups: this.props.groups.groups});
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
    //console.log(condition);
    let filteredGroups = this.props.groups.groups.filter(it=>{
      let daysOfWeek = condition.daysOfWeek;
      // 요일 필터링
      //console.log(condition.daysOfWeek);
      for(var key in daysOfWeek){
        if(daysOfWeek[key] == undefined || daysOfWeek[key] == false)continue;
        //console.log(key);
        //console.log(it.daysOfWeek.includes(key));
        if(it.daysOfWeek.includes(key) == false){
          //console.log(
          //  "return false;"
          //);
          return false;
        }
      }
      return true;
    });
    //console.log(filteredGroups);

    filteredGroups = filteredGroups.filter(it=>{
      //console.log(it);
      //console.log(condition.charge);
      let charge = condition.charge;
      // 가격 필터링
      if(charge.min != null){
        if( it.charge < parseInt(charge.min)) return false;
      }
      if(charge.max != null){
        if( it.charge > parseInt(charge.max)) return false;
      }
      return true;
    });

    //console.log(filteredGroups);

    filteredGroups = filteredGroups.filter(it=>{

      let time = null;
      {
        let t = it.time.split(":").map(it=>parseInt(it));
        let t2 = t[1] + it.period;
        time = {
          begin:t[0] * 100 + t[1],
          end: (t[0] + t2 / 60) * 100 + t2 % 60
        };
        
      }
      //console.log(condition.time);
      if(condition.time.start != undefined){
        let begin= parseInt(condition.time.start.split(":")[0]) * 100 + parseInt(condition.time.start.split(":")[1])
        if(time.begin < begin) return false;
      }
      if(condition.time.end != undefined){
        let end=  parseInt(condition.time.end.split(":")[0]) * 100 + parseInt(condition.time.end.split(":")[1])
        if(time.end > end) return false;
      }
      return true;
    });
    //console.log(filteredGroups);
    let filteredGyms = this.state.gyms.filter(gym=>filteredGroups.findIndex(group=>group.gym.uid == gym.uid) != -1)
    this.setState({filteredGroups:filteredGroups},()=>{
      //console.log(this.state.filteredGroups)
    });
    this.setState({filteredGyms:filteredGyms},()=>this._updateMarkers());
    this.setState({daysOfWeek:condition.daysOfWeek});
    this.setState({charge:condition.charge});
    this.setState({time:condition.time});
    //console.log("on Filtering")
    
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
      let markerGroups = this.props.groups.groups.filter(it=>it.gym.uid == marker.uid);
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
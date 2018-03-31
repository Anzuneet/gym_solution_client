import React, { Component } from "react";
import { ScrollView ,
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  Alert, 
  StyleSheet,
  StatusBar,
  Image,
 } from "react-native";
import SearchFilterScreen from "./presenter";
import SearchScreen from "../SearchScreen/container"

/*
여기서 체크박스, 라디오버튼을 이용하여 state를 바꿔주고
이전 화면 (SearchScreen)으로 돌아갈때 그 state를 전부 넘겨준다.
그후 SearchScreen에선 받아온 state를 이용하여 다시 marker를 rander한다.
*/

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // 요일 조건
        daysOfWeek:{
          MON: props.MON,
          TUE: props.TUE,
          WED: props.WED,
          THU: props.THU,
          FRI: props.FRI,
          SAT: props.SAT,
          SUN: props.SUN
        },
        time:{// 시간 조건
          start:null,
          end: null,
        },
        charge:{// 가격 조건
          min: null,
          max: null,
        },
    };
  }

  componentDidMount() {
    //this.makeRemoteRequest();
  }

  _changechargeMin = (text) =>{
    this.setState({charge:{min: text}});
  };

  _changechargeMax = (text) =>{
    this.setState({charge:{max: text}});
  };

  _searchScreen =()=> {
    //this.props.container._setStates(this.state.monCheck, this.state.tueCheck, this.state.wedCheck, this.state.thuCheck, this.state.friCheck, this.state.satCheck, this.state.sunCheck);
    if(this.props.onSubmitFilterCondition != undefined){
      this.props.onSubmitFilterCondition({
        daysOfWeek:this.state.daysOfWeek
      });
    }
    //const {navigate} = this.props.navigation;
    //  navigate("searchScreen");
  };

  render() {
    console.log("SearchFilterScreen in");
    console.log(this.props);
    return (
      <SearchFilterScreen {...this.state}
      container={this}
      searchScreen = {this._searchScreen}
      changechargeMin = {this._changechargeMin}
      clickChargeMin = {this._clickChargeMin}
      changechargeMax = {this._changechargeMax}
      />
    );
  }
}

export default Container;

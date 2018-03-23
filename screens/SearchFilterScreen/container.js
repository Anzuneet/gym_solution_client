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
        monCheck: false,
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
  }

  componentDidMount() {
    //this.makeRemoteRequest();
  }

  _setMonCheck = (monCheck) => {
    this.setState({monCheck:!this.state.monCheck});
  };

  _setTueCheck = (tueCheck) => {
    this.setState({tueCheck:!this.state.tueCheck});
  };

  _setWedCheck = (wedCheck) => {
    this.setState({wedCheck:!this.state.wedCheck});
  };

  _setThuCheck = (thuCheck) => {
    this.setState({thuCheck:!this.state.thuCheck});
  };

  _setFriCheck = (friCheck) => {
    this.setState({friCheck:!this.state.friCheck});
  };

  _setSatCheck = (satCheck) => {
    this.setState({satCheck:!this.state.satCheck});
  };

  _setSunCheck = (sunCheck) => {
    this.setState({sunCheck:!this.state.sunCheck});
  };

  render() {
    return (
      <SearchFilterScreen {...this.state} 
      setMonCheck = {this._setMonCheck}
      setTueCheck = {this._setTueCheck}
      setWedCheck = {this._setWedCheck}
      setThuCheck = {this._setThuCheck}
      setFriCheck = {this._setFriCheck}
      setSatCheck = {this._setSatCheck}
      setSunCheck = {this._setSunCheck}
      />
    );
  }
}

export default Container;

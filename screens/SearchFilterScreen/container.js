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

  render() {
    return (
      <SearchFilterScreen {...this.state}
      container={this}
      />
    );
  }
}

export default Container;

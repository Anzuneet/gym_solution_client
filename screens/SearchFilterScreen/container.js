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
        daysOfWeek:{
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

// 180404
// 스플래시 이미지, 앱 아이콘 만들기
// 필터 함수에 시간조건이랑 가격 조건 추가
// UI 다듬기

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
          start:props.START,
          end: props.END,
        },
        charge:{// 가격 조건
          min: props.MIN,
          max: props.MAX,
        },
        startClockPickerVisible: false,
        endClockPickerVisible: false,
    };
    
  }

  componentDidMount() {
    //this.makeRemoteRequest();
    //this._searchScreen();
  }

  _changechargeMin = (text) =>{
    this.setState({charge:{...this.state.charge, min:text}});
  };

  _changechargeMax = (text) =>{
    this.setState({charge:{...this.state.charge, max:text}});
   // this.setState({charge:{...this.props.charge, max:text}})
  };

  _searchScreen =()=> {
    if(this.props.onSubmitFilterCondition != undefined){
      this.props.onSubmitFilterCondition({
        daysOfWeek:this.state.daysOfWeek,
        charge:this.state.charge,
        time:this.state.time
      });
    }
  };

  // state 초기화 함수
  _stateInitialization = () => {
     this.setState({daysOfWeek:{...this.state.daysOfWeek, MON:this.props.MON, TUE:this.props.TUE, WED:this.props.WED, THU:this.props.THU, FRI:this.props.FRI, SAT:this.props.SAT, SUN:this.props.SUN}});
     this.setState({time:{...this.state.time, start:this.props.START, end:this.props.END}});
     this.setState({charge:{...this.state.charge, min:this.props.MIN, max:this.props.MAX}});
  };

  // timePicker 관련 함수
  _showStartTimePicker = () => this.setState({ startTimePickerVisible: true });
  _hideStartTimePicker = () => this.setState({ startTimePickerVisible: false });
  _showEndTimePicker = () => this.setState({ endTimePickerVisible: true });
  _hideEndTimePicker = () => this.setState({ endTimePickerVisible: false });
  _showStartClockPicker = () => this.setState({ startClockPickerVisible: true });
  _hideStartClockPicker = () => this.setState({ startClockPickerVisible: false });
  _showEndClockPicker = () => this.setState({ endClockPickerVisible: true });
  _hideEndClockPicker = () => this.setState({ endClockPickerVisible: false });

  _handleStartClockPicked = (date) => {
    var startTime = new Date(date)
    oStartTime = (`${startTime.getHours()}:${startTime.getMinutes()}`);
    this.setState({time:{...this.state.time, start: oStartTime}, startClockPickerVisible: false});
  };

  _handleEndClockPicked = (date) => {
    var endTime = new Date(date)
    oEndTime = (`${endTime.getHours()}:${endTime.getMinutes()}`);
    //{...props.daysOfWeek,SAT:!props.daysOfWeek.SAT}
    this.setState({time:{...this.state.time, end: oEndTime}, endClockPickerVisible: false});
  };


  render() {
    //console.log("SearchFilterScreen in");
    //console.log(this.state);
    return (
      <SearchFilterScreen {...this.state}
      container={this}
      searchScreen = {this._searchScreen}
      changechargeMin = {this._changechargeMin}
      changechargeMax = {this._changechargeMax}
      showStartClockPicker = {this._showStartClockPicker}
      hideStartClockPicker = {this._hideStartClockPicker}
      showEndClockPicker = {this._showEndClockPicker}
      hideEndClockPicker = {this._hideEndClockPicker}
      changeStartTime = {this._handleStartClockPicked}
      changeEndTime = {this._handleEndClockPicked}
      stateInitialization = {this._stateInitialization}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9'
  },

  picker: {
    backgroundColor: '#E5E5E5'
  }
});

export default Container;


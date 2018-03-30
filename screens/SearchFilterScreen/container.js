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
// import TimePicker from 'react-native-timepicker';

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
    //this._searchScreen();
  }

  _searchScreen = props => { 
    //console.log("_searchScreen in");
    //console.log(this.props);
    //console.log(this.state);
    this.props.setStateInSearchFilterScreen(this.state.daysOfWeek.MON, this.state.daysOfWeek.TUE, this.state.daysOfWeek.WED, this.state.daysOfWeek.THU, this.state.daysOfWeek.FRI, this.state.daysOfWeek.SAT, this.state.daysOfWeek.SUN);
  };

/*
  _onValueChange = (hour, minute) => {
    console.log("Selected time:", hour, ':', minute);
  };

  _timePicker() {
    <View style={styles.container}>
        <TimePicker
        style={styles.picker}
        selectedHour={0}
        selectedMinute={30}
        minuteInterval={5}
        onValueChange={this._onValueChange}
        loop={true} />
    </View>
  }
  */

  render() {
    //console.log("SearchFilterScreen in");
    //console.log(this.props);
    return (
       <SearchFilterScreen {...this.state}
      container={this}
      searchScreen = {this._searchScreen}
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
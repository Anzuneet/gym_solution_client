
import React, { Component } from "react";
import PropTypes from "prop-types";
import TraineeOneGroupsScreen from "./presenter";
import { Image } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
  dialog = null;

  state = {
    reviewFlag: false,
    starCount: 3,
    data0 :
    {
      name: "팔굽혀 펴기",
      times: 15,
      sets: 4,
    }
  ,
  data1 :
    {
      name: "턱걸이",
      times: 7,
      sets: 4,
    }
  ,
  data2 :
    {
      name: "스쿼트",
      times: 20,
      sets: 5,
    }
  ,
  data3 :
    {
      name: "데드리프트",
      times: 10,
      sets: 5,
    }
  ,
  data4 :
    {
      name: "벤치프레스",
      times: 12,
      sets: 4,
    }
  ,
  data5 :
    {
      name: "런지",
      times: 15,
      sets: 4,
    },
  

    lists : [
      {
        date:"2018-04-23",
      },
      {
        date:"2018-04-25",
      },
      {
        date:"2018-04-27",
      },
      {
        date:"2018-04-30",
      },
      {
        date:"2018-05-06",
      },
      {
        date:"2018-05-02",
      },
      {
        date:"2018-05-04",
      },
      {
        date:"2018-05-07",
      },      {
        date:"2018-05-09",
      },
    ],
    before : {
      Weight: 85,
      Muscle: 20,
      Fat: 30,
    },
    after : {
      Weight: 79,
      Muscle: 28,
      Fat: 23,
    },
  }
  _pullDayInfo = (day) =>{
      
    if(this.dialog != null){
      this.dialog.show();
    }
  }
  _closeDialog = () =>
  {
    this.dialog.dismiss();
  }
  _setDialog = (dialog)=>this.dialog = dialog;

  _onStarRatingPress = (rating) =>{
    this.setState({starCount: rating});
  }

  render() {
    const {navigate} = this.props.navigation;
    const group = this.props.navigation.state.params.group;
   return (
    <TraineeOneGroupsScreen {...this.props} {...this.state}
    dates2 = {this.state.lists.reduce((obj, it)=>{
      obj[it.date] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"};
      return obj;
   }
   ,{})}
    pullDayInfo = {this._pullDayInfo}
    setDialog = {this._setDialog}
    navigate = {navigate}
    group = {group}
    closeDialog={this._closeDialog}
    onStarRatingPress = {this._onStarRatingPress}
    />
   );
 }
}
 
export default Container;
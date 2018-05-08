
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowMembersScreen from "./presenter";
import NavButton from "../../components/NavButton";
 
class Container extends Component {

  dialog
  state = {
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
    ]
   };


_changeNames0 = (text) => {
  this.setState({data0:{...this.state.data0, name:text}})
}
_changeNames1 = (text) => {
  this.setState({data1:{...this.state.data1, name:text}})
}
_changeNames2 = (text) => {
  this.setState({data2:{...this.state.data2, name:text}})
}
_changeTimes0 = (text) => {
  this.setState({data0:{...this.state.data0, times:text}})
}
_changeSets0 = (text) => {
  this.setState({data0:{...this.state.data0, sets:text}})
}
_changeTimes1 = (text) => {
  this.setState({data1:{...this.state.data1, times:text}})
}
_changeSets1 = (text) => {
  this.setState({data1:{...this.state.data1, sets:text}})
}
_changeTimes2 = (text) => {
  this.setState({data2:{...this.state.data2, times:text}})
}
_changeSets2 = (text) => {
  this.setState({data2:{...this.state.data2, sets:text}})
}
_changeNames3 = (text) => {
  this.setState({data3:{...this.state.data3, name:text}})
}
_changeNames4 = (text) => {
  this.setState({data4:{...this.state.data4, name:text}})
}
_changeNames5 = (text) => {
  this.setState({data5:{...this.state.data5, name:text}})
}
_changeTimes3 = (text) => {
  this.setState({data3:{...this.state.data3, times:text}})
}
_changeSets3 = (text) => {
  this.setState({data3:{...this.state.data3, sets:text}})
}
_changeTimes4 = (text) => {
  this.setState({data4:{...this.state.data4, times:text}})
}
_changeSets4 = (text) => {
  this.setState({data4:{...this.state.data4, sets:text}})
}
_changeTimes5 = (text) => {
  this.setState({data5:{...this.state.data5, times:text}})
}
_changeSets5 = (text) => {
  this.setState({data5:{...this.state.data5, sets:text}})
}

   _pullDayInfo = (day) =>{
    
    if(this.dialog != null){
      this.dialog.show();
    }
  }

  _setDialog = (dialog)=>this.dialog = dialog;

  _stateInitialization = () => {
   
 };
  _postExercise = () => {
    
  }

  render() {
   return (
     <ShowMembersScreen {...this.props} {...this.state}
     dates2 = {this.state.lists.reduce((obj, it)=>{
      obj[it.date] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"};
      return obj;
   }
   ,{})}

    pullDayInfo = {this._pullDayInfo}
    setDialog = {this._setDialog}
    stateInitialization = {this._stateInitialization}
    changeNames0 = {this._changeNames0}
    changeNames1 = {this._changeNames1}
    changeNames2 = {this._changeNames2}
    changeTimes0 = {this._changeTimes0}
    changeSets0 = {this._changeSets0}
    changeTimes1 = {this._changeTimes1}
    changeSets1 = {this._changeSets1}
    changeTimes2 = {this._changeTimes2}
    changeSets2 = {this._changeSets2}
    changeNames3 = {this._changeNames3}
    changeNames4 = {this._changeNames4}
    changeNames5 = {this._changeNames5}
    changeTimes3 = {this._changeTimes3}
    changeSets3 = {this._changeSets3}
    changeTimes4 = {this._changeTimes4}
    changeSets4 = {this._changeSets4}
    changeTimes5 = {this._changeTimes5}
    changeSets5 = {this._changeSets5}    
    postExercise = {this._postExercise}
/>
   );
 }
}
 
export default Container;